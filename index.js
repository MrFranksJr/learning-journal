import { getCurrentYear, responsiveMenu, clickAnywhereToClose } from "./data/utils.js"

//------------------------------------------CONSTS------------------------------------------//
const hamburgerMenu = document.getElementById('hamburger')

//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', e => clickAnywhereToClose(e))

hamburgerMenu.addEventListener("click", responsiveMenu)

//------------------------------------------ functions to execute------------------------------------------//
getCurrentYear()