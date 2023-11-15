let $list = $('.list');

let store = [];

//데이터바인딩
$.get('../data/store.json').then(data => {
  store = [...data.products];
  store.forEach((itm) => {
    $list.append(`
      <div class="card p-3 g-col-3 bg-white mb-3 mx-2" data-id=${itm.id} draggable="true" ondragstart="drag(event)">
        <img src="./images/${itm.photo}" alt="${itm.title}" class="card-img">
        <div class="card-body p-0 mt-3">
          <h5 class="card-text title">${itm.title}</h5>
          <div class="card-text brand">${itm.brand}</div>
          <div class="card-text">가격 : ${itm.price}</div>
          <a class="btn btn-dark mt-2 btn-cart" data-id=${itm.id}>담기</a>
        </div>
      </div>`);
  })

  // 장바구니 기능
  let cart = JSON.parse(localStorage.getItem('cart'));
  let prods = [];

  if (cart != null) { // 장바구니에 상품이 있다면
    // cart = [
    //   {id: 0, title: title, quan: 1},
    //   {id: 1, title: title, quan: 1},
    //   ...,
    // ];
    $('.cart').html('');
    store.forEach(a => {
      cart.forEach(b => {
        if (b.id == a.id) {
          $('.cart').append(`
            <div class="card p-3 bg-white w-25 mb-3 mx-2" data-id=${a.id} draggable="true" ondragstart="drag(event)">
              <img src="./images/${a.photo}" alt="" class="card-img">
              <div class="card-body p-0 mt-3">
                <h5 class="card-text title">${a.title}</h5>
                <div class="card-text brand">${a.brand}</div>
                <div class="card-text">가격 : ${a.price}</div>
                <div class="card-text">
                  <input class="w-100 mt-2" value="${b.quan}"></input>
                </div>
              </div>
            </div>`)
        }
      })
    })
  }

  $('.btn-cart').click(function (e) {
    let prodId = e.target.dataset.id; // 담기버튼을 누른 상품의 고유번호
  
    cart = JSON.parse(localStorage.getItem('cart'));
    // {id: 0, title: '식기세척기', quan: 1}
    // {id: 1, title: '원목 침대 프레임', quan: 1}

    if (cart) { // 장바구니에 상품이 있다면,
      $cart.html(''); // 장바구니 요소 안에 컨텐츠를 비우고
      let idx = cart.findIndex(el => { return el.id == prodId })
      if (idx != -1) { // 이미 있는 상품
        cart[idx].quan++;
      } else { // 새로운 상품이 추가 된다면
        let item = store.find(itm => { return itm.id == prodId })
        let data = { id: item.id, title: item.title, quan: 1 };
        cart.push(data);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      cart = JSON.parse(localStorage.getItem('cart'));
      $cart.html('');
      cart.forEach(prod => {
        let res = store.find(itm => { return itm.id == prod.id })
        $cart.append(`<div class="card p-3 bg-white w-25 mb-3 mx-2" data-id="${res.id}" draggable="true" ondragstart="drag(event)">
        <img src="./images/${res.photo}" class="card-img">
        <div class="card-body p-0 mt-3">
        <h5 class="card-text title">${res.title}</h5>
        <div class="card-text brand">${res.brand}</div>
        <div class="card-text">가격 : ${res.price}</div>
        <div class="card-text">
          <input class="w-100 mt-2" value="${prod.quan}"></input>
        </div>
        </div>
        </div>`)
      })
    } else { // 장바구니가 비었다면, null이라면
      console.log(3);
      $cart.html('');
      let item = store.find(itm => { return itm.id == prodId })
      let data = { id: item.id, title: item.title, quan: 1 };
      cart = [data];
      localStorage.setItem('cart', JSON.stringify(cart));
      cart = JSON.parse(localStorage.getItem('cart'));
      cart.forEach(itm => {
        store.forEach(itm2 => {
          if (itm2.id == itm.id) {
            $cart.append(`
            <div class="card p-3 bg-white w-25 mb-3 mx-2" data-id="${itm2.id}" draggable="true" ondragstart="drag(event)">
            <img src="./images/${itm2.photo}" class="card-img">
            <div class="card-body p-0 mt-3">
            <h5 class="card-text title">${itm2.title}</h5>
            <div class="card-text brand">${itm2.brand}</div>
            <div class="card-text">가격 : ${itm2.price}</div>
            <div class="card-text">
              <input class="w-100 mt-2" value="${itm.quan}"></input>
            </div>
            </div>
            </div>`)
          }
        })
      })
    }
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
    return itm.title.includes(val) || itm.brand.includes(val)
  }))
  res.forEach(itm => {
    template = `
    <div class="card g-col-md-3 p-3 bg-white w-25 mb-3 mx-2" id=${itm.id} draggable="true" ondragstart="drag(event)">
      <img src="./images/${itm.photo}" alt="${itm.title}" class="card-img">
      <div class="card-body p-0 mt-3">
        <h5 class="card-text title">${itm.title}</h5>
        <h5 class="card-text brand">${itm.brand}</h5>
        <div class="card-text">가격 : ${itm.price}</div>
        <a class="btn btn-dark mt-2 btn-cart">담기</a>
      </div>
    </div>`;
    $cardBox.append(template);
  });

  $('.card-body h5').each((i, el) => {
    let title = el.innerHTML;
    title = title.replace(val, `<span style="background:yellow">${val}</span>`);
    el.innerHTML = title;
  })
})


// 1랍
// 장바구니 드래그앤 드랍
let $card = $('.card');
let $cart = $('.cart');
let cart = [];

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function allowDrop(e) {
  e.preventDefault();

}
function drop(e) {
  e.preventDefault();
  let idx = e.dataTransfer.getData('text');
  addCart(target);
}

function addCart(target) {
  // cart = [{id:0,title:abc, quan:1},{title:..., quan:...},...]
  let cart = localStorage.getItem('cart');
  console.log(target);
  let title = target.siblings().$('.title').html();
  if (cart == null) {
    localStorage.setItem('cart',)
  } else {

  }
  // filter() : 콜백함수에 의해 통과된 배열의 요소로만 필터링된 얕은 복사본을 만든다.

  `<div class="card p-3 g-col-md-3 bg-white w-25 mb-3 mx-2" id=${data.id} >
      <img src="./images/${data.photo}" alt="${data.title}" class="card-img">
      <div class="card-body p-0 mt-3">
        <h5 class="card-text title">${data.title}</h5>
        <div class="card-text brand">${data.brand}</div>
        <div class="card-text">가격 : ${data.price}</div>
        <input class="fluid" type="number" value="${cart.quan}">
      </div>
    </div>`;
  $cart.append(template);
}


// btnCarts.forEach(btnCart => {
//   btnCart.addEventListener('click', (e) => {
//     let cart = localStorage.getItem('cart');
//     console.log(cart);
//   })
// })