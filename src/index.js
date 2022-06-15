import {page1} from './page1.js';
import {page2} from "./page2.js";
import {page3} from "./page3.js";

let body = document.querySelector("body");

function activateMenu() {
//add eventListener to the 3 menu buttons
let homelink = document.querySelector(".tabDiv :nth-child(1)")
let menulink = document.querySelector(".tabDiv :nth-child(2)")
let contactlink = document.querySelector(".tabDiv :nth-child(3)")

homelink.addEventListener("click", loadPage1);
menulink.addEventListener("click", loadPage2);
contactlink.addEventListener("click", loadPage3);
}

function loadPage1 () {
    body.innerHTML = "";
    page1();
    activateMenu();
}

function loadPage2 () {
    body.innerHTML = "";
    page2();
    activateMenu();
}

function loadPage3 () {
    body.innerHTML = "";
    page3();
    activateMenu();
}

//action
console.log("Awesome! Making progress here!")
page1();
activateMenu();