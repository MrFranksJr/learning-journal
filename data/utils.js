export { responsiveMenu, sortByDate, getCurrentYear, clickAnywhereToClose, showContent, showJournalContent, showArticleContent, resizeClose }

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

//click anywhere to remove
function clickAnywhereToClose(event) {
    if (!document.getElementsByTagName('header')[0].contains(event.target) && document.getElementById('hamburger').classList.contains('active')){
        responsiveMenu()
      }
}

function resizeClose() {
    if (document.getElementById('hamburger').classList.contains('active')) {
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

//make index.html appear
function showContent() {
    const introductionRight = document.getElementById('introductionRight')
    const welcomeTitle = document.getElementById('welcomeTitle')
    introductionRight.style.transform = 'translateY(0px)'
    introductionRight.style.opacity = '1'
    welcomeTitle.style.transform = 'translateY(0px)'
    welcomeTitle.style.opacity = '1'
}

//make journal.html appear
function showJournalContent() {
    const mainCont = document.getElementById('mainCont')
    mainCont.style.transform = 'translateY(0px)'
    mainCont.style.opacity = '1'
}

//make articles appear
function showArticleContent() {
    const mainCont = document.getElementById('mainCont')
    mainCont.style.transform = 'translateY(0px)'
    mainCont.style.opacity = '1'
}

//make myWork appear
function showMyWork() {
    const mainCont = document.getElementById('mainCont')
    mainCont.style.transform = 'translateY(0px)'
    mainCont.style.opacity = '1'
}