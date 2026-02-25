// PAGE SWITCH
function showPage(id){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

// 3D CARD INTERACTION
const card = document.getElementById("card");
const glow = document.querySelector(".glow");

let isDragging = false;

function rotate(x,y){
const rect = card.getBoundingClientRect();
const centerX = rect.left + rect.width/2;
const centerY = rect.top + rect.height/2;

const rotateX = -(y-centerY)/15;
const rotateY = (x-centerX)/15;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

glow.style.left = (x-rect.left)+"px";
glow.style.top = (y-rect.top)+"px";
}

// DESKTOP
card.addEventListener("mousedown",()=>{
isDragging=true;
card.classList.add("active");
glow.style.display="block";
});

document.addEventListener("mouseup",()=>{
isDragging=false;
card.classList.remove("active");
card.style.transform="rotateX(0) rotateY(0)";
glow.style.display="none";
});

document.addEventListener("mousemove",(e)=>{
if(isDragging){
rotate(e.clientX,e.clientY);
}
});

// MOBILE
card.addEventListener("touchstart",()=>{
isDragging=true;
card.classList.add("active");
glow.style.display="block";
});

document.addEventListener("touchend",()=>{
isDragging=false;
card.classList.remove("active");
card.style.transform="rotateX(0) rotateY(0)";
glow.style.display="none";
});

document.addEventListener("touchmove",(e)=>{
if(isDragging){
const touch = e.touches[0];
rotate(touch.clientX,touch.clientY);
}
});

// LOADING
window.addEventListener("load",function(){
document.getElementById("loader").style.display="none";
});

// TYPING EFFECT
const text = "Alfin Sabil Khafifudin";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);
}
}
typing();

// PARTICLES
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});
