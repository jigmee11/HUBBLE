var cs = document.getElementById("canvas");
let hun = new Image();
hun.src = "./hun.png";
let saad = new Image();
saad.src = "./saad.png";
let spacex = new Image();
spacex.src = "./space-x.png";
let guideguul = new Image();
guideguul.src = "./mountain-mars.png";
const ctx = cs.getContext("2d");
const width = window.innerWidth;
const heigth = window.innerHeight;
console.log(width, heigth);
let uy = -60;
//Togloom ehleh uyiin dooshoo unah uurchlugduh hurd
let dooshoo = 0.3;
let unsaneseh = false;
let anhniiuy;
//togloom ehleh heseg
const ehleh = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(guideguul, gx, cs.height / 3 + 15, cs.width, 300);
  ctx.drawImage(hun, cs.width / 3, uy, 60, 60);
};
const unah = setInterval(() => {
  uy += dooshoo;
  dooshoo++;
  if (uy >= cs.height - cs.height / 3.5 - 10) {
    clearInterval(unah);
    unsaneseh = true;
    anhniiuy = uy;
  }
  ehleh();
}, 40);
//undsen guij usreh heseg
let guih = cs.width / 3;
let gx = 0; //guideguul nii x
const undsen = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(guideguul, gx, cs.height / 3 + 15, cs.width, 300);
  ctx.drawImage(hun, guih, uy, 60, 60);
};
const start = setInterval(() => {
  if (unsaneseh == true) {
    if (jumpUp) {
      uy -= speedY;
      speedY -= gravity;

      if (speedY < 0) {
        jumpDown = true;
        jumpUp = false;
      }
    }
    if (jumpDown) {
      jumpUp = false;
      uy += speedY;
      speedY += gravity;
      if (Math.floor(uy) >= cs.height - cs.height / 3.5 - 10) {
        jumpDown = false;
        uy === cs.height - cs.height / 3.5 - 10;
        console.log(uy);
      }

      i = 0;
    }
    //guih += 4;
    gx -= 4;
    undsen();
  }
}, 40);
//          //
//Usreh heseg
//         //
let jumpDown = false;
let jumpUp = false;
let i = 0;
let chuluu = 0;
let isJumping = false;
let down = 1;
const jump = () => {
  if (unsaneseh == true) {
    i++;
    console.log(i);
    speedY = 0.008 * canvas.height;
    gravity = 0.00018 * canvas.height;
    if (!jumpDown) {
      jumpUp = true;
    }

    if (i === 3) {
      jumpUp = false;
      jumpDown = true;

      i = 0;
    }
  }
};
document.addEventListener("keyup", (e) => {
  jump();
});
