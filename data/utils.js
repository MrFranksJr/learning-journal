export { responsiveMenu, sortByDate, getCurrentYear, clickAnywhereToClose }

//responsive menu add visual style
function responsiveMenu() {
    const allArticles = document.getElementsByTagName('article')
    document.getElementById('nav-menu').classList.toggle("active")
    document.getElementById('hamburger').classList.toggle("active")
    document.getElementsByTagName('footer')[0].classList.toggle("blur")
    document.getElementById('mainCont').classList.toggle("blur")
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].classList.toggle("blur")
    }
}

//responsive menu remove visual style
// NOT SURE IF STILL NEEDED???? - PROBABLY TO REMOVE ALL BLUR STYLING WHEN GOING BEYOND A CERTAIN WIDTH

/* const allArticles = document.getElementsByTagName('article') */

/* document.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    document.getElementById('nav-menu').classList.remove("active")
    document.getElementsByTagName('footer')[0].classList.remove("blur")
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].classList.remove("blur")
    }
})) */

/* function closeResponsiveMenu() {
    document.getElementById('hamburger').classList.remove("active")
    document.getElementById('nav-menu').classList.remove("active")
    document.getElementsByTagName('footer')[0].classList.remove("blur")
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].classList.remove("blur")
    }
} */

//click anywhere to remove
function clickAnywhereToClose(event) {
    if (!document.getElementsByTagName('header')[0].contains(event.target) && document.getElementById('hamburger').classList.contains('active')){
        responsiveMenu()
      }
}

//sort by date
function sortByDate(a, b) {
    let publishDate1 = new Date(a.date), publishDate2 = new Date(b.date)
    return publishDate2-publishDate1
}

//enter current year
function getCurrentYear() {
    document.getElementById('year').innerHTML = new Date().getFullYear()
}