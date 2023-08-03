import viewHandler from "./handler.js";
const buttonPlus = document.querySelector(".plus");
const buttonLess = document.querySelector(".less");
const buttonDark = document.querySelector(".buttonDark");
const text = document.querySelector(".textBox");
const body = document.querySelector("body");

buttonPlus.addEventListener("click",viewHandler, false)
buttonLess.addEventListener("click",viewHandler, false)
buttonDark.addEventListener("click",viewHandler, false)