//CHANGING HEADER STYLING AND ACTIVE NAV ITEM ON SCROLL

const header = document.querySelector(".header");
const mePage = document.getElementById("me");
const myWorkPage = document.getElementById("myWork");
const contactPage = document.getElementById("contact");

const changeHeader = () => {

    const activeNavItem = document.querySelector(".menuItemActive");
    const menuItem1 = document.querySelector(".menuItem1");
    const menuItem2 = document.querySelector(".menuItem2");
    const menuItem3 = document.querySelector(".menuItem3");
    const contactMenuItem = document.querySelector(".contactMenuItem");

    if (window.pageYOffset + 100 > contactPage.offsetTop) {
        header.classList.add("contactHeader");
        activeNavItem.classList.remove("menuItemActive");
        contactMenuItem.classList.add("menuItemActive");
    } else if (window.pageYOffset + 100 > myWorkPage.offsetTop) {
        header.classList.remove("contactHeader");
        header.classList.add("myWorkHeader");
        activeNavItem.classList.remove("menuItemActive");
        menuItem3.classList.add("menuItemActive");
    } else if (window.pageYOffset + 100 > mePage.offsetTop) {
        header.classList.remove("myWorkHeader");
        header.classList.remove("contactHeader");
        header.classList.add("meHeader");
        activeNavItem.classList.remove("menuItemActive");
        menuItem2.classList.add("menuItemActive");
    } else if (window.pageYOffset + 100 <= mePage.offsetTop) {
        header.classList.remove("meHeader");
        header.classList.remove("myWorkHeader");
        header.classList.remove("contactHeader");
        activeNavItem.classList.remove("menuItemActive");
        menuItem1.classList.add("menuItemActive");
    }
};

window.onscroll = function() {changeHeader()};
window.onload = function() {changeHeader()};

//PROJECTS SLIDER

const slides = document.querySelectorAll(".slideList li");
const leftNavButton = document.querySelector(".sliderNavLeft");
const rightNavButton = document.querySelector(".sliderNavRight");
let slideIndex = 0;

const slideChangeNext = () => {

    slides[slideIndex].classList.remove("activeSlide");
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("activeSlide");
};

const slideChangePrev = () => {

    slides[slideIndex].classList.remove("activeSlide");
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = slides.length -1;
    }

    slides[slideIndex].classList.add("activeSlide");
};

leftNavButton.onclick = function() {slideChangePrev()};
rightNavButton.onclick = function() {slideChangeNext()};
