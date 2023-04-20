import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bg from './images/bg.png';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logos"
              src="./logo512.png"
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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg" style={{ background: `url(${bg}) center/cover` }}></div>
            <div className="container">
              <h3>상품목록</h3>
              <div className="row prods mx-auto">
                {shoes.map((shoe) => {
                  return (
                    <Card shoe={shoe} key={shoe.id} />
                  )
                })}
              </div>
            </div>
          </>
        } />

        <Route path='/detail' element={<Detail />} />

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치</div>} />
        </Route>

        <Route path='*' element={<div>없는 페이지에요</div>} />
      </Routes>


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
    <div className="col-md-4 item">
      <img src={props.shoe.src} width="80%" alt={`신발이미지${props.shoe.id}`} />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
    </div>
  )
}

export default App;
