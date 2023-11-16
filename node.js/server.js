// 라이브러리 호출
const express = require("express");
const app = express();

// 8080포트에 서버 띠우기
app.listen(8080, () => {
  console.log("http://localhost:8080 에서 서버 실행중...");
});


// 사이트 메인페이지에 접속하면 텍스트 전송
app.get("/", (요청, 응답) => {
  응답.send("반갑다");
});
app.get("/news", (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
});
