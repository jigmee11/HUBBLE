const cs = document.getElementById("canvas");
const ctx = cs.getContext("2d");

const laser = new Image();
laser.src = "laser.png";

const back = new Image();
back.src = "space-cut.jpg";
const ship = new Image();
ship.src = "shooter-me.png";
cs.width = innerWidth;
cs.height = innerHeight;
let now;

const behind = new Image();
behind.src = "space-cut.jpg";

const enemyNoob = new Image();
enemyNoob.src = "enemy2.png";

if (window.innerHeight < window.innerWidth) {
  now = true;
} else {
  now = false;
}
let x = cs.width / 2 - 50;
let y = cs.height / 2 - 50;
let c = 0;
let d = 0;
let e = 0;
let l = 0;
let p;
let la = false;
const draw = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(back, c, d, cs.width, cs.height);
  ctx.drawImage(behind, c, d + cs.height, cs.width, cs.height);
  ctx.drawImage(ship, x - 50, y - 100, 100, 100);
  ctx.drawImage(enemyNoob, cs.width / 2 - 50, e, 100, 100);
};
const a = setInterval(() => {
  if (window.innerHeight < window.innerWidth && now == false) {
    location.reload();
  }
  if (window.innerHeight > window.innerWidth && now == true) {
    location.reload();
  }
  if (d <= -window.innerHeight) {
    d = 0;
  }
  if (e >= window.innerHeight) {
    e = 0;
  }
  e += 3;
  d -= 3;
  l -= 3;
  draw();
}, 30);

const lase = setInterval(() => {
  if (la == true) {
    ctx.drawImage(laser, p, l, 100, 100);
  } else {
    l = y;
    la = true;
    p = x - 50;
  }
}, 30);

function printMousePos(event) {
  console.log(event);
  x = event.clientX;
  y = event.clientY;
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(back, c, d, cs.width, cs.height);
  ctx.drawImage(behind, c, d + cs.height, cs.width, cs.height);
  ctx.drawImage(ship, x - 50, y - 100, 100, 100);
  ctx.drawImage(enemyNoob, cs.width / 2 - 50, e, 100, 100);
  draw;
}
document.addEventListener("mousemove", printMousePos);
document.addEventListener(
  "touchmove",
  (touch = (e) => {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  })
);
window.onresize = () => {
  location.reload();
};
