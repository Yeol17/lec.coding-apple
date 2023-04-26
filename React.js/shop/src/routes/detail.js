import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Context1 } from './../App.js'
import { useDispatch, useSelector } from "react-redux";
import { addCart } from './../store/cartSlice.js'
// ----------------------------------------------------
// import styled from "styled-components"

// let YellowBtn = styled.button`
//   background: ${props => props.bg};
//   color: ${props => props.bg == 'blue' ? 'white' : 'black'};
//   padding: 10px;
// `
// let NewBtn = styled(YellowBtn)`
//   border-radius: 30px;
// `
// ----------------------------------------------------
// class DEtail2 extends React.Component {
//   componentDidMount() { }
//   componentDidUpdate() { }
//   componentDidUpdate() { }
// }

function Detail(props) {

  // let { 재고 } = useContext(Context1);

  let { id } = useParams();
  let res = props.shoes.find(shoe => shoe.id == id)

  let [event, setEvent] = useState(true);
  let [quant, setQuant] = useState(0);
  let [tab, setTab] = useState(0);

  let [isDetail, setDetail] = useState('');
  let state = useSelector(state => state.cart);
  let dispatch = useDispatch();

  console.log(state);
  useEffect(() => {
    setDetail('onload')
    let b = setTimeout(() => {
    }, 100)
    return () => {
      clearTimeout(b);
      setDetail('');
    }
  }, [])


  // useEffect(() => { // mount, updata 시 실행 
  // 디버깅을 위해 두 번정도 실행된다.
  // 이를 방지하려면 index.js에 가서 <React.StrictMode> 제거
  // html 렌더링 완료 후 실행이 된다.
  // for (let i = 0; i < 10000; i++){
  //   console.log(1);
  // }

  // 언제 사용하는가?
  // 1. 어려운 연산
  // 2. 서버에서 데이터 가져오는 작업
  // 3. 타이머

  // 왜 Effect 라는 이름인가?
  // Side Effect : 함수의 핵심기능과 상관없는 부가기능
  // 한마디로 useEffect는 side effect를 보관하는 장소
  // setTimeout(() => {
  //   setAlert(false);
  // }, 2000);

  //   if (isNaN(quant)) {
  //     alert('그러지마세요!')
  //     setQuant(0);
  //   } 
  // }, [quant])

  if (res) {

    return (
      <div className={"container start " + isDetail}>

        {
          event === true
            ? <div className="alert alert-warning">
              2초 이내 구매 시 할인
            </div>
            : null
        }

        {/* <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
        <NewBtn bg='green'>버튼</NewBtn> */}

        <div className="row">
          <div className="col-md-6">
            <img src={res.src} width="100%" alt={res.title} />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{res.title}</h4>
            <p>{res.content}</p>
            <p>{res.price}원</p>
            <input type="text" className="p-1 mx-2" onChange={(e) => {
              let val = e.target.value;
              setQuant(val);
            }} value={quant} />
            <button className="btn btn-danger" onClick={() => { dispatch(addCart(res.id)) }}>주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* {
          tab === 0 ? <div>내용0</div>
            : tab === 1 ? <div>내용1</div>
              : tab === 2 ? <div>내용2</div>
                : null
        } */}

        <TabContents tab={tab} shoes={res} />

      </div>
    )
  }
  return (

    <div className="container">
      <p>잘못된 페이지입니다.</p>
    </div>
  )

}

// function TabContents(props) {
function TabContents({ tab }) {
  // if (props.tab == 0) {
  //   return <div>내용0</div>
  // }
  // else if (props.tab == 1) {
  //   return <div>내용1</div>
  // }
  // else if (props.tab == 2) {
  //   return <div>내용2</div>
  // }
  let [fade, setFade] = useState('')
  let { 재고 } = useContext(Context1)
  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end')
    }, 100)
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (<div className={`start ${fade}`}>
    {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
  </div>)
  //   return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]
}

export default Detail;