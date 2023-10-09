// Literal types
// 변수에 들어올 값을 더 엄격하게 관리 가능
// 자동완성 힌트가 나온다
var 이름;
// 이름 = 'gim'; // 에러
var me;
function 함수(a) {
    return 1;
}
함수('hello');
function 가위바위보(v) {
    return [v];
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
};
function 내함수(a) {
}
// 'kim'이라는 자료만 올 수 있다 (x) 
// 'kim'이라는 타입만 올 수 있다 (o) 
내함수(자료.name);
