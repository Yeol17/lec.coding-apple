var 함수 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 20,
    plusOne: function (x) {
        return this.age + x;
    },
    changeName: function (v) {
        회원정보.name = v;
    }
};
회원정보.plusOne(1);
회원정보.changeName('zim');
var cutZero = function (x) {
    var res = x.replace('0', '');
    return res;
};
console.log(cutZero('02340'));
// 2. removeDash() 라는 함수
// 문자를 하나 입력하면 대시기호 '-'가 있으면 전부 제거
// 숫자타입으로 리턴
function removeDash(x) {
    var res = x.replace(/-/g, '');
    return parseInt(res);
}
console.log(removeDash('010-3466-5376'));
var 만들함수 = function (x, y, z) {
    var res = y(x);
    var res2 = z(res);
    console.log(res2);
};
만들함수('010-1111-222', cutZero, removeDash);
