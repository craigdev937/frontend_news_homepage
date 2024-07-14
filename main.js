const nav__ul = document.querySelector(".nav__ul");
const menu__open = document.querySelector(".menu__open");
const menu__close = document.querySelector(".menu__close");
const img__background = document.querySelector(".img__background");

menu__open.addEventListener("click", () => {
    nav__ul.classList.add("active");
    menu__open.classList.add("active");
    menu__close.classList.add("active");
    img__background.classList.add("active");
});



