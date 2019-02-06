//CHANGING ACTIVE NAV ITEM ON CLICK

var menu = document.querySelector(".menu");
var contactMenuItem = document.querySelector(".contactMenuItem");

function changeActiveNavItem(event) {

    console.log("I work");

    var activeNavItem = document.querySelector(".menuItemActive");

    console.log(activeNavItem);

    activeNavItem.classList.remove("menuItemActive");

    console.log(event.target)

    event.target.parentElement.classList.add("menuItemActive");
}

menu.addEventListener("click", changeActiveNavItem);
contactMenuItem.addEventListener("click", changeActiveNavItem);

//CHANGING HEADER STYLING ON SCROLL

var header = document.querySelector(".header");
var mePage = document.getElementById("me");
var myWorkPage = document.getElementById("myWork");
var contactPage = document.getElementById("contact");

function changeHeader() {

    if (window.pageYOffset + 100 > mePage.offsetTop) {
        header.classList.add("meHeader");
    } else {
        header.classList.remove("meHeader");
    }

    if (window.pageYOffset + 100 > myWorkPage.offsetTop) {
        header.classList.add("myWorkHeader");
    } else {
        header.classList.remove("myWorkHeader");
    }

    if (window.pageYOffset + 100 > contactPage.offsetTop) {
        header.classList.add("contactHeader");
    } else {
        header.classList.remove("contactHeader");
    }
}

window.onscroll = function() {changeHeader()};
