/* eslint-disable */

import './App.css';
import React, { useState } from 'react';

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
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        제목변경(copy);
      }}>가나다</button> */}

      {/* <div className="list" onClick={() => {
        setModal(!modal);
      }}>
        <h4>{글제목[0]} <span onClick={좋아요증가}>❤️</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div style={{ height: '120px' }} className="list" key={i}>
              <div style={{ float: 'left', width: '90%' }}>
                <h4 onClick={() => {
                  setModal(!modal)
                  setIdx(i)
                }}>{a} <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i]++;
                  likeChange(copy)
                }}>❤️</span>{like[i]}</h4>
                <p>2월 17일 발행</p>
              </div>
              <button style={{ float: 'right', margin: '6px 6px 0 0' }} onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                제목변경(copy);
                let likeCopy = [...like];
                // console.log(likeCopy);
                likeCopy.splice(i, 1);
                likeChange(likeCopy);
                // console.log(like);
              }}>X</button>
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


      <div style={{ marginTop: 10 }}>
        <input onChange={(e) => {
          입력값변경(e.target.value);
        }}></input>
        <button onClick={() => {
          console.log(like);
          if (입력값 == '') return
          let copy = [...글제목];
          copy.push(입력값);
          제목변경(copy);
          let likeCopy = [...like]
          likeCopy.push(0);
          likeChange(likeCopy);
        }}>글쓰기</button>
      </div>


      {
        modal ? <Modal 글제목={글제목} title={title} /> : null
      }

      {/* <Modal2 글제목={글제목}></Modal2> */}

    </div >

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

// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'Kim',
//       age: 20
//     }
//   }
//   render() {
//     return (
//       <div>리액트 {this.state.age} 
//       <p>{this.props.글제목[0]}</p>
//         <button onClick={() => {
//           this.setState({ age: 21 })
//         }}>수정</button>
//       </div>
//     )
//   } 
// }
export default App;
