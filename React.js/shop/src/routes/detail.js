import { useParams } from "react-router-dom";
import styled from "styled-components"

let YellowBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding: 10px;
`
let NewBtn = styled(YellowBtn)`
  border-radius: 30px;
`

function Detail(props) {

  let { id } = useParams();
  let res = props.shoes.find(shoe => shoe.id == id)
  
  if (res) {

    return (
      <div className="container">

        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
        <NewBtn bg='green'>버튼</NewBtn>

        <div className="row">
          <div className="col-md-6">
            <img src={res.src} width="100%" alt={res.title} />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{res.title}</h4>
            <p>{res.content}</p>
            <p>{res.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

      </div>
    )
  }
  return (

    <div className="container">
      <p>잘못된 페이지입니다.</p>
    </div>
  )


}
export default Detail;