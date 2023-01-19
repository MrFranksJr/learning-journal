//------------------------------------------CONSTS------------------------------------------//
import { articles } from '/data/articles-collection.js'
import { easterEgg } from '/data/data.js'

const hamburgerMenu = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
const allArticles = document.getElementsByTagName('article')
const footerCont = document.getElementsByTagName('footer')
const headerCont = document.getElementsByTagName('header')
const mainCont = document.getElementById('mainCont')

//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', function(e){
    if (!headerCont[0].contains(e.target) && hamburgerMenu.classList.contains('active')){
    responsiveMenu()
  }})

hamburgerMenu.addEventListener("click", responsiveMenu)
document.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    navMenu.classList.remove("active")
    footerCont[0].classList.remove("blur")
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].classList.remove("blur")
    }
}))

function responsiveMenu() {
        navMenu.classList.toggle("active")
        hamburgerMenu.classList.toggle("active")
        footerCont[0].classList.toggle("blur")
        for (let i = 0; i < allArticles.length; i++) {
            allArticles[i].classList.toggle("blur")
        }
}

document.getElementById('year').innerHTML = new Date().getFullYear()


//-----------------------------------------------------------------------------------------------------------//

//------------------------------------------ PAGE BUILDING ------------------------------------------//
function collectArticles(articles) {
    let articleGrid = ''
    let heroArticleHTML = ''
    for (let article of articles) {
        if (article.articleType === 'regular-article') {
            let articleHTML = `
                <article class="${article.articleType}">
                    <img class="article-img" src="${article.imagePath}">
                    <div class="article-text">
                        <p class="article-date">${article.date}</p>
                        <h3 class="article-title">${article.title}</h2>
                        <p class="article-content">${article.content}</p>
                        <a class="read-more" href="/pages/articles/article${article.id}.html" alt="read the full article">Read more</a>
                    </div>
                </article>
            `
            articleGrid += articleHTML
        } else {
            heroArticleHTML = `
            <section>
                <article class="${article.articleType}" id="hero-article">
                <div class="hero-container">
                    <p class="article-date">${article.date}</p>
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-content">${article.content}</p>
                    <a class="read-more" href="/pages/articles/article${article.id}.html" alt="read the full article">Read more</a>
                </div>
                </article>
            </section>
            `
        }
    }
    mainCont.innerHTML = easterEgg + heroArticleHTML + '<section class="reg-art-section">' + articleGrid + '</section>'
    document.getElementById('hero-article').style.backgroundImage = 'url(../images/hero-article/DeskMain.jpg)'
}

collectArticles(articles)