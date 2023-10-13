class Person {
  name: string; // 필드 값을 미리 선언을 해야 한다.

  constructor(name: string) {
    this.name = name;
  }

  hello(a: string) {
    console.log(a + " 안녕?");
  }
}

let 사람1 = new Person("kim");
let 사람2 = new Person("gim");

// =============================================================

// 문1. Car 클래스를 만들어 보자
// - { model: '소나타', price: 3000 } 와 같은 형태의 객체를 만드는 class
// - 객체들은 tax() 를 사용하고 현재 price 의 10분의 1을 출력
// - model 과 price 속성의 xkdlqwlwjd
// 동작예시)
// let car1 = new Car('소나타', 3000)
// console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
// console.log(car1.tax()) //콘솔창 출력결과는 300

class Car {
  model: string;
  price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);

console.log(car1);
console.log(car1.tax());

// -----------------------------------------------------------------

// 문2
// 1. new World() 파라미터 숫자 혹은 문자
// 2. 숫자는 객체 안의 num 속성 안에 array 형태
// 3. 문자는 object 안의 str 속성 안에 배열
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수 제한 없음

// 동작예
// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num) //[3,5]
// console.log(obj.str) //['kim', 'park']

class World {
  num: number[];
  str: string[];
  constructor(...val: (number | string)[]) {
    let num: number[] = [];
    let str: string[] = [];

    val.forEach((v) => {
      if (typeof v === "string") {
        str.push(v);
      } else {
        num.push(v);
      }
    });

    this.num = num;
    this.str = str;
  }
}
