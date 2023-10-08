// Union type
var 회원 = 'kim';
회원 = 123;
// Q. 숫자 or 문자가 가능한 array / object 타입지정은?
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: 123 };
// any type
// 모든 자료형이 허용된다.
// 타입 스크립트 사용 의미가 없는?
// ∴ 타입실드 해제, 일반 js변수로 만들고 싶을 때
var 이름;
이름 = 123;
이름 = [];
// unknown
// any 와 비슷하나 any 보다 안전하다.
// 
var 사람;
사람 = 123;
// 사람 = {};
var 휴먼 = 사람;
console.log(휴먼);
