import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bg from './images/bg.png'

function App() {
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
        <div className="row prods">
          <div className="col-md-4 item">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"alt="" />
            <h4>껌정이</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4 item">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"alt="" />
            <h4>분홍이</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4 item">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"alt="" />
            <h4>그레이</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
