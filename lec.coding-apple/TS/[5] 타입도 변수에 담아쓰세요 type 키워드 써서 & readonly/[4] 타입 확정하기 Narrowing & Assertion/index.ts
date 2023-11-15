// type alias 타입별칭(타입변수)
// 관습
// - 작명시 영어 대문자로 시작하거나
// - 변수에 type을 붙인다

// type Animal = String | number | undefined;
// type AnimalType = String | number | undefined;
// let 동물: Animal;

// object 타입
type Animal = { name: string, age: number };
let 동물: Animal = { name: 'kim', age: 20 };


// readonly
// 에디터 & 터미널에서만 에러를 잡아준다.
// 실제 변환된 js파일에는 에러가 없다.
type Girfriend = {
  readonly name: string
};
const 여친: Girfriend = {
  name: '엠버'
};
여친.name = '유라'; // 수정 불가능 하지만 변환된 js 파일에는 에러x


// type변수 extend(합치기)
// 1.
type Name = string;
type Age = number;
type Person = Name | Age;

let 사람: Person = 123;
사람 = '사람임';

// 2. & 연산자
type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY;

let position: Position = {
  x: 10, y: 14
}

// (참고) 같은 이름의 type 변수 재정의 불가능
type PositionX; // 에러


// =========================================================

// 1. object 타입을 정의한 type alias 두개를
// & 기호로 합칠 때 중복된 속성이 있으면 ?
type One = { a: string };
type Two = { a: number, b: number };

type NewThing = One & Two;

let thing: NewThing = {
  a: 1,
  b: 2
};
// never 타입?

// ------------------------------------------------------

// 2. 아래 조건을 만족하는 타입 만들기
// - object 자료형
// - color 라는 속성을 가질 수도 있고 항상 문자가 온다.
// - size 라는 속성이 있고 항상 숫자가 들어와야 한다.
// - position 이라는 변경불가능한 속성이 있고 항상 숫자가 담긴 배열자료가 온다.

type MyType = {
  color?: string,
  size: number,
  readonly position: number[]
};

let test: MyType = {
  size: 9,
  position: [1, 2, 3],
};

//--------------------------------------------------------

// 3. 다음 조건을 만족하는 type alias 만들기
// - { name : 'kim', phone : 123, email : 'abc@naver.com' }
// - object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias

type UserDataType = {
  name: string,
  phone: number,
  email?: string,
};

let 사람1: UserDataType = {
  name: 'kim',
  phone: 123,
  email: 'abc@naver.com'
};

//--------------------------------------------------------

// 4. 다음 조건을 만족하는 type alias 만들기
// - 이름, 전화번호, 이메일, 미성년자여부 
// 속성이 옳은 타입인지 검사하는 type alias
// - 미성년자 여부 속성은 true/false 만 온다.

type Adult = { adult: boolean };
type AdultUser = UserDataType & Adult;

let 미성년자: AdultUser = {
  name: '홍김동',
  phone: 345,
  adult: false
};