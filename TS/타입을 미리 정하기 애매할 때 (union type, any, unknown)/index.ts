// Union type
let 회원: number | string = 'kim';
회원 = 123;

// Q. 숫자 or 문자가 가능한 array / object 타입지정은?
let 회원들: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: 123 };

// any type
// 모든 자료형이 허용된다.
// 타입 스크립트 사용 의미가 없는?
// ∴ 타입실드 해제, 일반 js변수로 만들고 싶을 때
let 애니: any;
애니 = 123;
애니 = [];

// unknown
// any 와 비슷하나 any 보다 안전하다.
// 여기서 안전은 엄격한 타입 때문에 오염이 방지된다는 의미.
let 언노운: unknown;
언노운 = 123;
언노운 = {};

// unkwon은 오류를 일으키지지만 any 는 사용 가능하다.
// error: let 문자: string = 언노운; 
// error: 문자 = 애니; 

// 타입스크립트의 엄격함
// 간단한 수학연산도 타입이 맞아야한다.
// error:  언노운 - 1

// string type + 1 (허용)
// number type + 1 (허용)
// string | number type + 1 (x)
let 나이: string | number;
// error: 나이 + 1;

// unknown 에는 여러 타입이 올 수 있지만
// 엄밀히 말하자면  unknown 타입이므로 숫자 연산이 불가능.
let 나이1: unknown = 1;
// error: 나이1 - 1


///////////////////////////////////////////
// 연습1
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
// let 철수: (any)[] = [user, age, married];
// let 철수: (unknown)[] = [user, age, married];
// let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// 연습2
// let 학교 = {
//   score: [100, 97, 84],
//   teacher: 'Phil',
//   friend: 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee', 학교.teacher]

let 학교: {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[]
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]
