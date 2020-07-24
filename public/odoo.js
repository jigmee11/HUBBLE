var cs = document.getElementById("canvas");
let imageName = new Image();
imageName.src = "./saad.png";
let Img = new Image();
Img.src = "./hun.png";
const ctx = cs.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
console.log(width, height);

let x = width;
let y = height;
let x1 = x;
console.log(x, y);
let speedY = 0.01 * canvas.height;
let gravity = 0.0003 * canvas.height;
const draw = () => {
  ctx.clearRect(0, 0, width + 200, height + 110);
  ctx.drawImage(Img, 50, y + 38, 50, 50);
  ctx.drawImage(imageName, x - 50, height + 38, 50, 50);
  ctx.drawImage(imageName, x1 + 200, height - 100, 50, 50);
};

let jumpDown = false;
let jumpUp = false;
let i = 0;

let isJumping = false;
const jump = () => {
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
};
setInterval(() => {
  x -= 5;
  x1 -= 4;

  if (x <= 140 && y >= height - 38) {
    console.log(x);
    console.log(y);

    x = 800;

    alert("Ta uhlee");
  }
  if (x <= 0) {
    x = width + 200;
    console.log(x);
  }
  if (jumpUp) {
    y -= speedY;
    speedY -= gravity;

    if (speedY < 0) {
      jumpDown = true;
      jumpUp = false;
    }
  }
  if (jumpDown) {
    jumpUp = false;
    y += speedY;
    speedY += gravity;
    // console.log(Math.floor(y));
    if (Math.floor(y) >= height - 5) {
      jumpDown = false;
    }
    i = 0;
  }
  draw();
}, 50);
document.addEventListener("keyup", (e) => {
  jump();
});
