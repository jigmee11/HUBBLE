var cs = document.getElementById("canvas");
let imageName = new Image();
imageName.src = "./saad.png";
let Img = new Image();
Img.src = "./hun.png";
let Rocket=new Image();
Rocket.src="./puujin.png";
let Rocketfly=new Image();
Rocketfly.src="./gal.png"
let space=new Image();
space.src="./space-x.png"
const ctx = cs.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
console.log(width, height);

let mountain = new Image();
mountain.src = "mountain-mars.png";
let x = width;
let y = -1;
let x1 = width;
let l=0;
let l1=cs.width+100;
let m=height-200;
let sky=height;
let gol=cs.width/4;
let uragshaa=2;
let rbairshil=cs.width-80;
let puujinhuuruh=height-42;
let spu=cs.width;
console.log(x, y);
console.log(window.inn);
let speedY = 0.01 * canvas.height;
let gravity = 0.0003 * canvas.height;
const draw = () => {
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(mountain, l, m+6,cs.width+100 , 300);
  ctx.drawImage(mountain, l1, m+6, cs.width+100, 300);
  ctx.drawImage(Img, gol, y-20, 60, 60);
  ctx.drawImage(space,spu,height-100,130,60);
  ctx.drawImage(imageName, x - 50, height -10, 60, 60);
  
};
const davah =()=>{
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(mountain, l, m+6,cs.width+100 , 300);
  ctx.drawImage(mountain, l1, m+6, cs.width+100, 300);
  ctx.drawImage(Img, gol, y-20, 60, 60);
  ctx.drawImage(Rocket,cs.width-80,height-42,60,100);
}
const huuruh =()=>{
  ctx.clearRect(0, 0, cs.width, cs.height);
  ctx.drawImage(mountain, l, m+6,cs.width+100 , 300);
  ctx.drawImage(mountain, l1, m+6, cs.width+100, 300);
 ctx.drawImage(Rocketfly,cs.width-80,puujinhuuruh,60,130);
  
}

let jumpDown = false;
let jumpUp = false;
let i = 0;
let chuluu=0;
let sit = false;
let isJumping = false;
let down = 1;
const jump = () => {
  if(sit==true){
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
 const a=setInterval(() => {
   if(sit==true){
    if(l<=-cs.width){
      l = width+200;
    }
    else{
      l -= 5;
    }
    if(l1<=-cs.width){
      l1 = width+200;
    }
    else{
      l1 -= 5;
    }
    x -= 5;
    x1 -= 4;
    spu-=7;
    if(spu<=0){
      spu=cs.width
    }
    if(spu <= cs.width/4+48 && spu >= cs.width/4-80 && y>= height-130 && y<=height-60){
      x = cs.width;
      y = -1;
      down = 1;
      sit = false;
      chuluu=0;
      spu=cs.width
      alert('Game Over')
    }
    if (x <= cs.width/4+90 && x >= cs.width/4 && y >= height -38) {
      // console.log(x);
      // console.log(y);
  
      x = cs.width;
      alert("Game Over");
      
      y = -1;
      down = 1;
      sit = false;
      chuluu=0;
    }
    if(chuluu===3 && y-20>=height-20){
      clearInterval(a);
      const xhud=setInterval(() => {
        gol+=uragshaa;
        uragshaa+=0.05;
        if(gol>=rbairshil+5){
          clearInterval(xhud);
          const niseh=setInterval(() => {
          
            puujinhuuruh-=4;
            huuruh();
            if(puujinhuuruh<=-130){
              clearInterval(niseh)
              console.log("gg")
            }
          }, 30);
        }
        davah();
      }, 30);
      
    
      
     }
    if (x <= 0) {
      chuluu++;
      x = width + 200;
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
      if (Math.floor(y) >= height - 5) {
        jumpDown = false;
        y = height;
      }
  
      i = 0;
      console.log(chuluu)
   }
  }
  else{
    if(y>=height-20){
      sit = true;
    }
    else{
      y += 5 + down;
      down += 0.4;
    }
  }
  draw();
}, 30);
 
document.addEventListener("keyup", (e) => {
  jump();
});
