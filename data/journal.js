//------------------------------------------CONSTS------------------------------------------//
import { articles } from '/data/articles-collection.js'
import { easterEgg } from '/data/data.js'
import { sortByDate, getCurrentYear, responsiveMenu, clickAnywhereToClose, showJournalContent, resizeClose } from '/data/utils.js'
import { heroArticle } from "./articles/hero-article.js"

const hamburgerMenu = document.getElementById('hamburger')
const mainContainer = document.getElementById('mainCont')
let articleIndex = 0
let articleCurrentIndex = 6
let articleMaxIndex = articles.length
let heroArticleHTML = ''
let articleGrid = ''

//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', e => clickAnywhereToClose(e))

hamburgerMenu.addEventListener("click", responsiveMenu)
//-----------------------------------------------------------------------------------------------------------//

//------------------------------------------ PAGE BUILDING ------------------------------------------//
function renderHeroArticle() {
    //BUILD HTML
    heroArticleHTML = `
        <section>
            <article class="${heroArticle.articleType}" id="hero-article">
            <div class="hero-container">
                <p class="article-date">${heroArticle.date}</p>
                <h2 class="article-title">${heroArticle.title}</h2>
                <p class="article-content">${heroArticle.content}</p>
                <a class="read-more" href="/pages/articles/article${heroArticle.id}.html" alt="read the full article">Read more</a>
            </div>
            </article>
        </section>
    `
}

function collectArticles(articles) {
    //SORT THE ARTICLES ON DATE
    articles.sort((a,b) => sortByDate(a,b))
    //BUILD HTML
    for (let i = articleIndex; articleCurrentIndex > i; i++) {
            let articleHTML = `
            <article class="${articles[i].articleType}">
                <img class="article-img" src="${articles[i].imagePath}">
                <div class="article-text">
                    <p class="article-date">${articles[i].date}</p>
                    <h3 class="article-title">${articles[i].title}</h2>
                    <p class="article-content">${articles[i].content}</p>
                    <a class="read-more" href="/pages/articles/article${articles[i].id}.html" alt="read the full article">Read more</a>
                </div>
            </article>
        `
        articleGrid += articleHTML
        articleIndex ++
    }
    document.getElementById('mainCont').innerHTML = `${easterEgg} ${heroArticleHTML} <section class="reg-art-section">${articleGrid}</section>`
    document.getElementById('hero-article').style.backgroundImage = 'url(../images/hero-article/DeskMain.jpg)'
}
//-----------------------------------------------------------------------------------------------------------//

//------------------------------------------ Load when scrolling down ------------------------------------------//
window.addEventListener('scroll', () => {
    //check if at bottom
    let check = (mainContainer.getBoundingClientRect().bottom - window.innerHeight) <= 0
    //if at bottom...
    if (check) {
        if (articleCurrentIndex != articleMaxIndex) {
            if ((articleMaxIndex - articleCurrentIndex) > 6) {
                articleCurrentIndex += 6
                collectArticles(articles)
            } else {
                articleCurrentIndex += articleMaxIndex - articleCurrentIndex
                collectArticles(articles)
            }
        }
    }
})
//-----------------------------------------------------------------------------------------------------------//

//------------------------------------------ EXECUTE ------------------------------------------//
renderHeroArticle()
collectArticles(articles)

getCurrentYear()

window.addEventListener('load', function () {
    showJournalContent()
})

window.addEventListener("resize", () => {
    if (document.body.clientWidth >= 880) {
        resizeClose()
    }
})