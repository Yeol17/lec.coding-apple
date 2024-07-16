// 라이브러리 호출
const express = require("express");
const app = express();

// 유틸
const isValidId = require("./utility/isValidId.js");

// static 파일 경로
app.use(express.static(__dirname + "/public"));
// ejs 세팅
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB 연결
const { MongoClient, ObjectId } = require("mongodb");

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
  // db.collection('post').insertOne({title: '어쩌구'})
});

app.get("/list", async (요청, 응답) => {
  let result = await db.collection("post").find().toArray();
  응답.render("list.ejs", { 글목록: result });
});

app.get("/write", (요청, 응답) => {
  응답.render("write.ejs");
});

app.post("/add", async (요청, 응답) => {
  const { title, content } = 요청.body;

  try {
    if (title == "") {
      응답.send("글제목을 입력해 주세요");
    } else {
      await db.collection("post").insertOne({ title, content });
      응답.redirect("/list");
    }
  } catch (err) {
    console.log(err);
    응답.status(500).send("서버 에러");
  }
});

app.get("/detail/:id", async (요청, 응답) => {
  const vId = isValidId(요청.params.id, 응답);
  try {
    const result = await db.collection("post").findOne({ _id: vId });
    console.log(result);
    if (result == null) {
      응답.status(404).redirect("/list");
      return;
    }
    응답.render("detail.ejs", { post: result });
  } catch (err) {
    console.log(err);
    응답.status(404).redirect("/list");
  }
});

app.get("/edit/:id", async (요청, 응답) => {
  const vId = isValidId(요청.params.id, 응답);
  try {
    const result = await db.collection("post").findOne({ _id: vId });
    if (result == null) {
      return 응답.render("alert.ejs", { err: "존재하지 않는 게시물입니다." });
    }
    응답.render("edit.ejs", { post: result });
  } catch (error) {
    console.log(error);
  }
});

app.post("/update", async (요청, 응답) => {
  const { id, title, content } = 요청.body;
  const pId = isValidId(id, 응답);

  if (title == null || title == "") {
    return 응답.render("alert.ejs", { err: "제목을 입력해주세요." });
  }
  if (content == null || content == "") {
    return 응답.render("alert.ejs", { err: "내용을 입력해주세요." });
  }
  
  await db
    .collection("post")
    .updateOne({ _id: pId }, { $set: { title, content } });
  응답.render("update.ejs");
});
