import { createContext, useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button, } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


import './App.css';

import bg from './images/bg.png';
import data from './data';
import Detail from './routes/Detail';
import Cart from './routes/Cart';

import axios from 'axios';
import styled from 'styled-components'

export let Context1 = createContext();

let BgWrap = styled.div`
  background: rgba(0,0,0, .3);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center
`
let Loading = styled.div`
  width: 300px;
  height: 300px;
  background: #f1f1f1;
  border-radius: 8%;
  font-size: 18px
  line-height: 1.4rem;
  positoin: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700
`;

function Loader() {
  return (
    <BgWrap>
      <Loading>불러오는중...</Loading>
    </BgWrap>
  )
}

function App() {

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();
  let [reqCnt, setReqCnt] = useState(1);
  let [loadingStat, setLoadingStat] = useState(false);
  let [watched, setWatched] = useState([]);

  useEffect(() => {
    // if (loadingStat) {
    //   setLoadingStat(true)
    // }
    let data = JSON.parse(localStorage.getItem('watched'));
    if (!data) {
      localStorage.setItem('watched', JSON.stringify(watched));
    } else {
      setWatched(data)
    }
  })

  function prodReq() {
    setLoadingStat(true)
    setReqCnt(reqCnt += 1);
    axios
      .get(`https://codingapple1.github.io/shop/data${reqCnt}.json`)
      .then((res) => {
        // let copy = [...shoes, ...res.data];
        let copy = shoes.concat(res.data)
        setShoes(copy);
      }).catch((res) => {
        console.log('실패함.');
      }).then(() => {
        setLoadingStat(false)
      })
  }


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logos"
              src={`${process.env.PUBLIC_URL}/logo192.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> React Shop
          </Navbar.Brand>
          <Nav className="me-auto nav">
            <Link to='/'>Home</Link>
            <Nav.Link href="/best">Best</Nav.Link>
            <Nav.Link href="/new">New</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Link to='/detail'>상품</Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Recent shoes={shoes} watched={watched} />

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg" style={{ background: `url(${bg}) center/cover` }}></div>
            <div className="container">
              <h3>상품목록</h3>
              <div className="row prods mx-auto" >
                {shoes.map((shoe) => {
                  return (
                    <Link to={'/detail/' + shoe.id} className="col-md-4 item" key={`pId` + shoe.id}>
                      <Card shoe={shoe} />
                    </Link>
                  )
                })}
              </div>
            </div>


            {
              reqCnt < 3
                ? <Button variant="dark" className="mt-4" onClick={prodReq}>더보기</Button>
                : null
            }

          </>

        } />

        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고 }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치</div>} />
        </Route>

        <Route path='*' element={<div>없는 페이지에요</div>} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      {
        loadingStat ? <Loader />
          : null
      }

    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div>
      <img src={props.shoe.src} width="80%" alt={`신발이미지${props.shoe.id}`} />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
    </div>
  )
}


function Recent(props) {

  return (
    <div className="recent-list">
      <h6>최근 본 상품</h6>
      <ul>
        <li className="itm">
          {
            props.watched.length > 0
              ? (<img src={props.shoes[props.watched[props.watched.length - 1]].src} alt='' />)
              : <p>비어있음</p>
          }
        </li>
      </ul>
      <div className="nextIcn">▼</div>
    </div>
  )
}



export default App;
