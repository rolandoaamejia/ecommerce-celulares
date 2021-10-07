/*
________________________
Navigation
________________________
*/
const navOpen = documet.querySelector(".nav_hamburger");
const navClose = documet.querySelector(".close_toggle");
const menu = documet.querySelector(".nav_menu");
const navContainer = documet.querySelector(".nav_menu");

navOpen.addEventListener("click", () => {
    menu.classList.add("open");
    document.body.classList.add("active");
    navContainer.style.left = "0";
    navContainer.style.width = "30rem";
});


navClose.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.classList.remove("active");
    navContainer.style.left = "-30rem";
    navContainer.style.width = "0";
});
/*
_________________________
Pop Up
_________________________
*/

/*
__________________________
Fixed Navigation
__________________________
*/

// Smooth Scroll
// Fixed NavBar

//AOS
AOS.init();
