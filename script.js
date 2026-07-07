/*=========================================
 Devendra Kumar Premium Theme
 script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

const body = document.body;

const themeBtn = document.getElementById("theme-toggle");

const mobileTheme = document.getElementById("mobile-theme");

const scrollBtn = document.getElementById("scrollTop");



/*=========================
  Theme
=========================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

body.classList.add("dark");

changeIcon("dark");

}

function changeIcon(mode){

const icon = body.classList.contains("dark")
? "fa-sun"
: "fa-moon";

if(themeBtn){

themeBtn.innerHTML =
`<i class="fa-solid ${icon}"></i>`;

}

if(mobileTheme){

mobileTheme.innerHTML =
`<i class="fa-solid ${icon}"></i><span>Theme</span>`;

}

}

function toggleTheme(){

body.classList.toggle("dark");

const mode = body.classList.contains("dark")
? "dark"
: "light";

localStorage.setItem("theme",mode);

changeIcon(mode);

}

if(themeBtn){

themeBtn.addEventListener("click",toggleTheme);

}

if(mobileTheme){

mobileTheme.addEventListener("click",toggleTheme);

}



/*=========================
 Scroll Button
=========================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



/*=========================
 Smooth Anchor
=========================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



/*=========================
 Hero Animation
=========================*/

const hero=document.querySelector(".hero");

if(hero){

hero.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}



/*=========================
 Card Animation
=========================*/

const cards=document.querySelectorAll(".post-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(50px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:700,

fill:"forwards"

});

observer.unobserve(entry.target);

}

});

},

{

threshold:.15

});

cards.forEach(card=>{

observer.observe(card);

});



/*=========================
 Active Menu
=========================*/

const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section")

.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



/*=========================
 Button Ripple
=========================*/

document.querySelectorAll(".btn")

.forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";

circle.style.height=d+"px";

circle.style.left=(e.offsetX-d/2)+"px";

circle.style.top=(e.offsetY-d/2)+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});



console.log("Devendra Kumar Premium Theme Loaded");

});
