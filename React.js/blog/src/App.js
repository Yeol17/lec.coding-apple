import { useState } from "react";
import "./App.css";

function App() {
  let [title, fnc] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [like, likeChange] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>괘발 blog</h1>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          fnc(copy);
        }}
      >
        가나다순
      </button>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              likeChange(like + 1);
            }}
          >
            🤞
          </span>
          {like}
        </h4>
        <p>2월 16일 발행</p>
        <button
          onClick={() => {
            let copy = [...title];
            copy[0] = "여자 코트 추천";
            fnc(copy);
          }}
        >
          숙제
        </button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
