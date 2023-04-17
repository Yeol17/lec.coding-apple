/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [title, setIdx] = useState(0);
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '파이썬 독학']);
  let [like, likeChange] = useState(() => {
    let data = 글제목.map(() => {
      return 0
    })
    return data
  });
  let [modal, setModal] = useState(false);

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

      {/* <div className="list" onClick={() => {
        setModal(!modal);
      }}>
        <h4>{글제목[0]} <span onClick={좋아요증가}>❤️</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal)
                setIdx(i)
              }}>{a} <span onClick={() => {
                let copy = [...like];
                copy[i]++;
                likeChange(copy)
              }}>❤️</span>{like[i]}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {/* <button onClick={() => {
        let 글 = [...글제목];
        글[0] = '여자코트 추천';
        console.log(글제목, 글);
        제목변경(글);
      }}>이상한버튼</button> */}
      {
        modal ? <Modal 글제목={글제목} title={title} /> : null
      }

    </div>

  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>수정하기</button>
    </div>
  )
}

export default App;
