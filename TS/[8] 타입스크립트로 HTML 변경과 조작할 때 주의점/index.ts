let 제목 = document.querySelector("#title");
if (제목?.innerHTML != undefined) {
  제목.innerHTML = '반가워요';

}

// narrowing
// 1. 제어문
// 2. instanceof 연산자
// 3. as Element
// - 비상시 - 확실할 시
// 4. ?. (optional chaining)
// 5. tsconfig strict 해제

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = 'https://kakao.com';
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function () { });