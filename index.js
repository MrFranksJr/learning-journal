import { getCurrentYear, responsiveMenu, clickAnywhereToClose, showIndexContent } from "./data/utils.js"

//------------------------------------------CONSTS------------------------------------------//
const hamburgerMenu = document.getElementById('hamburger')

//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', e => clickAnywhereToClose(e))

hamburgerMenu.addEventListener("click", responsiveMenu)

//------------------------------------------ functions to execute------------------------------------------//
getCurrentYear()
window.addEventListener('load', () => {
    showIndexContent()
}) 