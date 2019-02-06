//CHANGING HEADER STYLING AND ACTIVE NAV ITEM ON SCROLL

var header = document.querySelector(".header");
var mePage = document.getElementById("me");
var myWorkPage = document.getElementById("myWork");
var contactPage = document.getElementById("contact");

function changeHeader() {

    var activeNavItem = document.querySelector(".menuItemActive");
    var menuItem1 = document.querySelector(".menuItem1");
    var menuItem2 = document.querySelector(".menuItem2");
    var menuItem3 = document.querySelector(".menuItem3");
    var contactMenuItem = document.querySelector(".contactMenuItem");

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
}

window.onscroll = function() {changeHeader()};
