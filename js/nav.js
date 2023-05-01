const nav = document.querySelector(".ham-toggle");
const menu = document.querySelector(".nav-items");

nav.addEventListener("click", function(){
    nav.classList.toggle("open");
    menu.classList.toggle("open");
});