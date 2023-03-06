let $cardBox = $('.card-box');
let store = [];
let template = '';

//데이터바인딩
$.ajax('../data/store.json').done(data => {
  store = [...data.products];
  store.forEach((itm) => {
    template = `
    <div class="card p-3 bg-white w-25 mb-3 mx-2">
      <img src="./images/${itm.photo}" alt="${itm.title}" class="card-img" draggable="false">
      <div class="card-body p-0 mt-3">
        <h5 class="card-text title">${itm.title}</h5>
        <div class="card-text brand">${itm.brand}</div>
        <div class="card-text">가격 : ${itm.price}</div>
        <a class="btn btn-dark mt-2 btn-cart">담기</a>
      </div>
    </div>`;
    $cardBox.append(template);
  })
})

// 검색기능
// input에 검색어를 입력하면 해당 워드가 들어간 상품만 필터링되어 보인다.
// 찾은 워드는 노란 배경이 칠해진다.
const $search = $('#search');

$search.on('input', (e) => {
  $cardBox.html('');
  let val = e.target.value;
  let res = store.filter((itm => {
    if (itm.title.includes(val)) return itm
    else if (itm.brand.includes(val)) return itm
  }))
  res.forEach(itm => {
    template = `
    <div class="card p-3 bg-white w-25 mb-3 mx-2">
      <img src="./images/${itm.photo}" alt="${itm.title}" class="card-img" draggable="false">
      <div class="card-body p-0 mt-3">
        <h5 class="card-text title">${itm.title}</h5>
        <div class="card-text brand">${itm.brand}</div>
        <div class="card-text">가격 : ${itm.price}</div>
        <a class="btn btn-dark mt-2 btn-cart">담기</a>
      </div>
    </div>`;
    $cardBox.append(template);
  })
})