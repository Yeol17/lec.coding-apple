// Type이 아직 확정되지 않았을 경우
// Type Narrowing 

// 1. typeof 연산자
// 2. 속성명 in obj
// 3. 인스턴스 instanceof 부모
// => 현재 변수의 타입을 특정지을 수 있다면 다 인정래 준다.
function 내함수(x: number | string) {

  let arr: number[] = [];
  if (typeof x === 'number') {
    arr[0] = x;
  }

}

내함수(1);

// (주의) if문 썼으면 끝까지 써야 안전
// else, else if 안쓰면 에러로 잡아줄 수 있다.


// Assertion
// 타입 덮어쓰기
// 1. narrowing 할 때
// 2. 무슨 타입이 들어올지 100% 확실할 때
// *** 비상시 디버깅 용도로만 쓰자
function 함수1(x: number | string) {
  
  let arr: number[] = [];
  arr[0] = x as number;
  
}

// 이미 확정된 타입인 경우에 쓰면 에러
let 이름: string = 'kim';
이름 as number;
