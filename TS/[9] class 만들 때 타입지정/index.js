var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function (a) {
        console.log(a + ' 안녕?');
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('gim');
// =============================================================
// 문1. Car 클래스를 만들어 보자
// - { model: '소나타', price: 3000 } 와 같은 형태의 객체를 만드는 class
// - 객체들은 tax() 를 사용하고 현재 price 의 10분의 1을 출력
// - model 과 price 속성의 xkdlqwlwjd
// 동작예시)
// let car1 = new Car('소나타', 3000)
// console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
// console.log(car1.tax()) //콘솔창 출력결과는 300
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
