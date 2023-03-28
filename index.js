import { getCurrentYear, responsiveMenu, clickAnywhereToClose, showContent, resizeClose } from "./data/utils.js"

//------------------------------------------CONSTS------------------------------------------//
const hamburgerMenu = document.getElementById('hamburger')

//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', e => clickAnywhereToClose(e))

hamburgerMenu.addEventListener("click", responsiveMenu)

//------------------------------------------ functions to execute------------------------------------------//
getCurrentYear()
window.addEventListener('load', () => {
    showContent()
}) 

window.addEventListener("resize", () => {
    if (document.body.clientWidth >= 880) {
        resizeClose()
    }
})