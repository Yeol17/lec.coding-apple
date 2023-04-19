import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bg from './images/bg.png';
import data from './data';

function App() {

  let [shoes] = useState(data);

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
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#best">베스트</Nav.Link>
            <Nav.Link href="#new">신상품</Nav.Link>
            <Nav.Link href="#">남성</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
