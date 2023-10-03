// 함수에 타입 지정
function 함수(x: number): number {
  return x * 2
}


// return이 없을 경우 void
function 보이드(x: number): void {
  // return x * 2 // 에러
}

// 타입지정된 파라미터가 있다면 함수 호출시 인수가 없으면 에러.
// 함수(); // 에러


// 파라미터가 옵션일 경우
// 파라미터변수?:타입
function 옵션(x?: number): void {

}

옵션();

// 중요
// 변수?: number 는
// 변수: number | undefined 와 같다


// ============================================================


// Q1. 왜 에러일까?
function 문제(x: number | string) {
  // console.log(x + 1)
}

// Q2. 왜 에러일까? // 보류: 오류라고 하는데 오류로 잡아주진 않는다 
// function 내함수(x?: number): number {
//   return x * 2
// }

// 숙제1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력
// 파라미터가 없으면 '이름이 없습니다' 출력
function 이름입력(이름?: string): void {
  let 값: string = 이름 ? `안녕하세요 ${이름} 입니다.` : '이름이 없습니다.'
  console.log(값)
}
이름입력('');

// 숙제2. 함수에 숫자 또는 문자를 집어넣으면 
// 자릿수를 세어 출력해주는 함수를 만들어보자
// 예) '245' 를 입력하면 3이 return, 1234 는 4
function 길이세기(x: string | number): number {
  return x.toString().length
}

길이세기('123');
길이세기(456);

// 숙제3. 결혼 가능 확률 알려주는 함수
// 1. 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수(상/중/하)를 입력
// 2. 월소득 만원 당 1점, 집보유시 500/ 미보유 0, 매력 상=100
// 3. 총 점수가 600 이상시 '결혼가능' return 외에는 return 하지 않음
// 예) 결혼가능하냐(700, false, '중'), return '결혼가능'
// 예) 결혼가능하냐(700, false, '중'), 아무것도 return 하지 않음

function 결혼가능하냐(월소득: number, 집보유: boolean, 매력점수: string): string | void {
  let 결혼점수: number = 0;
  결혼점수 += 월소득;
  if (집보유) {
    결혼점수 += 500;
  }
  if (매력점수 === '상') 결혼점수 += 100
  if (결혼점수 >= 600) return '결혼가능'
}

console.log(결혼가능하냐(700, false, '중'));
console.log(결혼가능하냐(100, false, '중'));
