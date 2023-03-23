import { articles } from '/data/articles-collection.js'
import { heroArticle } from './articles/hero-article.js'
import { showArticleContent, getCurrentYear, responsiveMenu, clickAnywhereToClose } from './utils.js'

//------------------------------------------CONSTS------------------------------------------//
const hamburgerMenu = document.getElementById('hamburger')
const articleBody = document.getElementById('article-body')

//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', e => clickAnywhereToClose(e))

hamburgerMenu.addEventListener("click", responsiveMenu)
//----------------------------------------------------------------------------------------------------//

function buildArticle() {
    if (articleBody.dataset.id === '0') {
        articleBody.innerHTML = heroArticle.html
    }
    else {
        articleBody.innerHTML = articles[articleBody.dataset.id].html
    }
}

buildArticle()
getCurrentYear()

window.addEventListener('load', function () {
    showArticleContent()
}) 