
const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navBtn.addEventListener("click",showList)

function showList(){
    links.classList.toggle("show-links")
}