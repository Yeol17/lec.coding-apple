let 이름: string = 'kim';
let 나이: number = 50;
let 결혼했니: boolean = true;
// let 성별: undefined = null;

// 문자만 담긴 배열만 가능
let 회원들: string[] = ['kim', 'park'];

let 회원: { member1: string, member2: string } = { member1: 'kim', member2: 'park' }

let 사람들 = 'kim';
// 타입지정을 해주지 않아도 자동으로 타입을 지정해 준다.

// let name = 'han';
// 변수명에 name 을 쓸 수 없으며 이외에도 여러가지 있다.
// ---------------------------------------------------------------------

let 음악: { artist: string, title: string } = { artist: '윤하', title: '우산' };
let project: { 
  member: string[], 
  days: number, 
  started: boolean 
} = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}