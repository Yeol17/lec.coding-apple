let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let img1 = new Image();
img1.src = 'dinosaur.png';
let img2 = new Image();
img2.src = 'cactus.png';

canvas.width = window.innerHeight - 100;
canvas.height = window.innerWidth - 100;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    // ctx.fillStyle = 'green';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y, this.width, this.height)
  }
}

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 30;
    this.height = 30;
  }
  draw() {
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


let timer = 0;
let cactus여러개 = [];
let 점프타이머 = 0;
let animation;

function 프레임마다실행할코드() {
  animation = requestAnimationFrame(프레임마다실행할코드);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (timer % 200 === 0) {
    let cactus = new Cactus();
    cactus여러개.push(cactus);
  }

  cactus여러개.forEach((a, i, o) => {
    // x 좌표가 0미만 제거
    if (a.x < -50) {
      o.splice(i, 1);
    }
    a.x-=3;
    충돌인가(dino, a)
    a.draw();
  })

  if (점프중) {
    dino.y -= 4;
    점프타이머++;
  } else if (점프중 == false) {
    if(dino.y < 200){
      dino.y += 4;
    }
  }

  if(점프타이머 > 25){
    점프중 = false;
    점프타이머 = 0;
  }

  dino.draw();
}
프레임마다실행할코드();

// 충돌확인

function 충돌인가(dino, cactus){
  let xGap = cactus.x - (dino.x + dino.width);
  let yGap = cactus.y - (dino.y + dino.height);

  if(xGap < 0 && yGap < 0){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var 점프중 = false;
document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    점프중 = true;
  }
})