// export default 내보낼거

var a = 10;
var b = 20;
var c = 30;

// export default a;
// export default var a = 10;
export { a, b }; // 여러개를 내보내는 방법
export default c;