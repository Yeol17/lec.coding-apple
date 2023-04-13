/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '파이썬 독학']);
  let [like, likeChange] = useState(0);

  function 좋아요증가() {
    likeChange(like++)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        제목변경(copy);
      }}>가나다</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={좋아요증가}>❤️</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={() => {
        let 글 = [...글제목];
        글[0] = '여자코트 추천';
        console.log(글제목, 글);
        제목변경(글);
      }}>이상한버튼</button>

      <Modal></Modal>

    </div>

  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
