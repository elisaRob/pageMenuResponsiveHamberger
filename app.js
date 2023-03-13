const menuHamberger=document.querySelector(".menuHamberger");
const menuHamberger2=document.querySelector(".container");
const menuEnGras=document.querySelectorAll("li");

menuHamberger.addEventListener('click',function(){
    menuHamberger.classList.toggle('active1');
    menuHamberger2.classList.toggle("active2");
 
})