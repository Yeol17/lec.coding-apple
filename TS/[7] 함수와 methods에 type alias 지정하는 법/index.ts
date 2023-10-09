// # Method types
type 함수타입 = (a: string) => number;

const 함수: 함수타입 = (a) => {
  return 10
}

type UseDataType = {
  name: string,
  age: number,
  plusOne: (x: number) => number,
  changeName: (x: string) => void,

}

let 회원정보: UseDataType = {
  name: 'kim',
  age: 20,
  plusOne(x) {
    return this.age + x;
  },

  changeName: (v) => {
    회원정보.name = v
  }

};


회원정보.plusOne(1);
회원정보.changeName('zim');

// console.log(회원정보);  

// ----------------------------------------------------------------------------

// 다음 함수 2개를 만들고 타입정의를 해보자
// 1. cutZero() 라는 함수. 
// 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거
// 문자로 리턴
type CutType = (x: string) => string;

const cutZero: CutType = (x) => {
  let res = x.replace('0', '')
  return res
}


console.log(cutZero('02340'));
// 2. removeDash() 라는 함수
// 문자를 하나 입력하면 대시기호 '-'가 있으면 전부 제거
// 숫자타입으로 리턴

function removeDash(x: string): number {
  let res = x.replace(/-/g, '');
  return parseInt(res)
}

console.log(removeDash('010-3466-5376'));

// -----------------------------------------------------------------

// - 위의 함수들을 파라미터로 넣을 수 있는 함수
// - 파라미터 3개 1. 문자 2. 함수 3. 함수
// 함수를 실행하면
// 1. 첫재 파라미터를 둘때 파라미터에 파라미터로 집어넣는다
// 2. 둘째 파라미터에서 return 된 결과를 셋째 파라미터로 
// 3. 셋째 파라미터에서 return 된 결과를 콘솔창에 출력
// (실행예시)
// 만들함수('010-1111-222', cutZero, removDash)

type TestType = (x: string, y: CutType, z: (x1: string) => number) => void;
const 만들함수: TestType = (x, y, z) => {
  let res = y(x);
  let res2 = z(res);
  console.log(res2);
}

만들함수('010-1111-222', cutZero, removeDash);