//------------------------------------------CONSTS------------------------------------------//
const hamburgerMenu = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
const allArticles = document.getElementsByTagName('article')
const footerCont = document.getElementsByTagName('footer')
const headerCont = document.getElementsByTagName('header')


//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', function(e){
    if (!headerCont[0].contains(e.target) && hamburgerMenu.classList.contains('active')){
    responsiveMenu()
  }})

hamburgerMenu.addEventListener("click", responsiveMenu)
document.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    navMenu.classList.remove("active")
    document.body.classList.remove("locked")
    footerCont[0].classList.remove("blur")
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].classList.remove("blur")
    }
}))

function responsiveMenu() {
        navMenu.classList.toggle("active")
        document.body.classList.toggle("locked")
        hamburgerMenu.classList.toggle("active")
        footerCont[0].classList.toggle("blur")
        for (let i = 0; i < allArticles.length; i++) {
            allArticles[i].classList.toggle("blur")
        }
}

//------------------------------------------ functions to execute------------------------------------------//
document.getElementById('year').innerHTML = new Date().getFullYear()