// Literal types
// 변수에 들어올 값을 더 엄격하게 관리 가능
// 자동완성 힌트가 나온다
let 이름: 'kim';
// 이름 = 'gim'; // 에러

let me: '대머리' | '솔로';

function 함수(a: 'hello'): 1 | 0 {
  return 1
}
함수('hello')


// ---------------------------------------------------------

// Q. 다음 조건을 만족하는 함수 타입지정
// 가위|바위|보 만 입력 가능
// 가위|바위|보 만 들어올 수 있는 array return

type RCP = '가위' | '바위' | '보';
function 가위바위보(v: RCP): RCP[] {
  return [v]
}

// ----------------------------------------------------------


// Literal type의 문제점
// 솔루션1. object 만들 때 타입지정 확실히 한다.
// 솔루션2. as 문법으로 타입을 지정.
// 솔루션3. as const
//  └─ 효과1. object value 값을 그대로 타입으로 지정
//  └─ 효과2. object 속성들에 readonly
var 자료 = {
  name: 'kim'
} as const

function 내함수(a: 'kim') {
  
}

// 'kim'이라는 자료만 올 수 있다 (x) 
// 'kim'이라는 타입만 올 수 있다 (o) 
내함수(자료.name);


