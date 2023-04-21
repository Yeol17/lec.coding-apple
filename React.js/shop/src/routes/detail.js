import { useParams } from "react-router-dom";

function Detail(props) {

  let { id } = useParams();
  let shoes = [...props.shoes];
  let res = shoes.find(shoe => shoe.id == id)

  if (res) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={res.src} width="100%" />
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
  } else {
    return (
      <div className="container">
        <div className="row">
          <p>올바르지 않은 페이지입니다.</p>
        </div>
      </div>
      )
  }
}
export default Detail;