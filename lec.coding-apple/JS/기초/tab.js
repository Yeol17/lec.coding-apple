// 버튼 0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div[0]에 show 클래스명 추가

// 좋은관습 : 자주 쓰는 셀렉터 변수에 넣어 쓰기

const $tabBtn = $('.tab-button');
const $tabContent = $('.tab-content');


// for (let i = 0; i < $tabBtn.length; i++) {
//   $tabBtn.eq(i).on('click', function(e) {
//     탭열기(i);
//   });
// }
let tabButtons = document.querySelectorAll('.tab-button');

$('.list').click(function (e) {
  탭열기(parseInt(e.target.dataset.id))
});

function 탭열기(i) {
  $tabBtn.removeClass('orange');
  $tabBtn.eq(i).addClass('orange');
  $tabContent.removeClass('show');
  $tabContent.eq(i).addClass('show');
}