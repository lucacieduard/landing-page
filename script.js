"use strict"

const hamBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const links = Array.from(document.querySelectorAll(".links"));
console.log(links)

hamBtn.addEventListener("click",(e)=>{
    nav.classList.toggle("show-nav");
})




