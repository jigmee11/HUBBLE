const cs = document.getElementById('canvas');
const ctx = cs.getContext('2d');

const back = new Image;
back.src = "space-cut.jpg";
const ship = new Image;
ship.src = "shooter.png";
cs.width = innerWidth;
cs.height  = innerHeight;
let now;
if(window.innerHeight < window.innerWidth){
    now = true;
}
else{
    now = false;
}
let x=0;
let y=0;
const draw = () =>{
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(back, 0, y, cs.width, cs.height);
    ctx.drawImage(ship, x-50 , y-100, 100, 100);
}
const a = setInterval(() => {
    if(window.innerHeight < window.innerWidth && now==false){
        location.reload();
    }
    if(window.innerHeight > window.innerWidth && now==true){
        location.reload();
    }
    // if(now == true){
    //     x -= 3;
    // }
    // else{
    //     y -= 3;
    // }
    draw();
}, 30)
function printMousePos(event) {
    console.log(event);
    x = event.clientX;
    y =event.clientY;
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.drawImage(back, 0, 0, cs.width, cs.height);
    ctx.drawImage(ship, x-50 , y-100, 100, 100);

}
document.addEventListener("mousemove", printMousePos);
document.addEventListener("touchmove", touch = (e) => {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    console.log(x);
});
window.onresize = () => {
    location.reload();
}