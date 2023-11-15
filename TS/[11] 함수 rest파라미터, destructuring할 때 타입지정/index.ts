// # rest parameter / destructuring

// ## rest parameter
function 함수(...a: (number | string | boolean)[]) {
  console.log(a);
}

let [str, num] = ["안녕", 100];
let 오브젝트 = { student: true, age: 20 };

let obj = { a: true, b: "2" };
function 함수1({ student, age }) {
  console.log(student, age);
}

함수1(오브젝트);
