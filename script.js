'use strict'

// FORM JS

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


// add event listener on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}  


// Mobile nav

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
const togglerNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);


// Header & Back To Top

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    backTopBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


// login

function func(){
    var email = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (email == 'mrshivam073@gmail.com' && pass == '123456'){
        alert("success full !")
        window.location.assign("index.html")
    }
    else {
        alert("In Valid User !") 
    }
}
