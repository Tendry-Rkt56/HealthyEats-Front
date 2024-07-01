const entete = document.querySelector(".entete");
const body = document.querySelector("body");
const claire = document.querySelector(".claire");
const sombre = document.querySelector(".sombre");
const mode = document.querySelector(".mode-sombre")
const nav = document.querySelector("nav");
const buttonmenu = document.querySelector(".button-menu");
const line = document.querySelector(".line");

window.addEventListener("scroll", () =>{
    if (window.scrollY > 10){
        entete.style.background = "linear-Gradient(90deg,darkOrchid,darkviolet)";
    }
    else{
        entete.style.background = "none";
    }

});

// mode sombre et claire

mode.addEventListener("click", () =>{
    body.classList.toggle("active");
    body.classList.toggle("active-2");
});

buttonmenu.addEventListener("click", () => {
    buttonmenu.classList.toggle("active");
    nav.classList.toggle("active");
});

