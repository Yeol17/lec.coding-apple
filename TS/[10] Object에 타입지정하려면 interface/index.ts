// # interface

// type Squere = { color: string, width: number };
interface Squere {
  color: string;
  width: number;
}

let 네모: Squere = {
  color: "red",
  width: 100,
};

// ## extends
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

let 학생: Student = {
  name: "kim",
};

let 선생: Teacher = {
  name: "kim",
  age: 20,
};

// ## &(intersection type)
// 두 타입을 전부 만족하는 타입
type Animal = { name: string };
type Cat = { age: number } & Animal;

let 고양이: Cat = {
  name: "묘묘",
  age: 3,
};
for (let i = 0; i < 3; i++) {
  console.log("1" + 1);
}
// let arr: number[] = new Array(3).fill();
// arr = arr.map((a, i) => i + 1);
// console.log(arr);

// ## type / interface 차이점
// type
// - 엄격해섯 중복선언이 불가능하다
// interface
// - 유연해서 중복선언이 가능하다
// - 자동으로 extend가 된다
interface Human {
  name: string;
}
interface Human {
  age: number;
}

let 사람: Human = {
  name: "나사람",
  age: 20,
};

// ==================================================

// 문제1 interface 로 타입을 지정해 보자.
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface Production {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품 = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// -------------------------------------------------

// 문제2 타입지정을 해보자
// let 장바구니 = [
//   { product: '청소기', price: 7000 },
//   { product: '삼다수', price: 800 }
// ]
interface Product {
  product: string;
  price: number;
}
let 장바구니: Product[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// ---------------------------------------------------

// 문제3
// 문제2의 타입을 extneds 해보자
// 일부 상품은 card 속성이 들어가야 한다.
// { product : '청소기', price : 7000, card : false }

interface Card extends Product {
  card: boolean;
}

let 장바구니2: Card[] = [{ product: "청소기", price: 7000, card: false }];

// ---------------------------------------------------

// 문제4 object 안에 함수 2개를 넣어보자
// 1. 이 object 자료는 내부에 plus()를 가지고 있으며 파라미터 2개를 입력하면 더해서 return 해준다.
// 2. minus()를 가지고 있으며 파라미터 2개를 입력하면 뺴서 return

interface Calc {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

let calculator: Calc = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};
