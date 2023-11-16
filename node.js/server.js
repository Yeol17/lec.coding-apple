// 라이브러리 호출
const express = require("express");
const app = express();

// static 파일 경로
app.use(express.static(__dirname + "/public"));

// DB 연결
const { MongoClient } = require("mongodb");

let db;
const url = "mongodb+srv://admin:admin1@origin.oelj8cf.mongodb.net/";
new MongoClient(url)
  .connect()
  .then((client) => {
    // 8080포트에 서버 띠우기
    console.log("DB연결성공...");
    db = client.db("fourm");
    app.listen(8080, () => {
      console.log("http://localhost:8080 에서 서버 실행중...");
    });
  })
  .catch((err) => {
    console.log(err);
  });


// 사이트 메인페이지에 접속하면 텍스트 전송
app.get("/", (요청, 응답) => {
  응답.send("반갑다");
});

app.get("/news", (요청, 응답) => {
  // 응답.sendFile(__dirname + "/index.html");
  db.collection('post').insertOne({title: '어쩌구'})
});
