const cs = document.getElementById('canvas');
const ctx = cs.getContext('2d');

const back = new Image;
back.src = "space-cut.jpg";
const ship = new Image;
ship.src = "shooter.png";

let x;
let y;
const draw = () =>{
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(back, 0, 0, cs.width, cs.height);
    ctx.drawImage(ship, x , y+100, 100, 100);

}
const a = setInterval(() => {
    draw();
}, 30)
function printMousePos(event) {
    console.log(event);
    x = event.clientX;
    y =event.clientY;
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(back, 0, 0, cs.width, cs.height);
    ctx.drawImage(ship, x, y+100, 50, 20);

}
document.addEventListener("mousedown", printMousePos);
