"use strict"

const hamBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const links = Array.from(document.querySelectorAll(".links"));


hamBtn.addEventListener("click",(e)=>{
    nav.classList.toggle("show-nav");
})

for(let i=0;i<links.length;i++){
    links[i].addEventListener("click",()=>{
        nav.classList.remove("show-nav");
    })
}


