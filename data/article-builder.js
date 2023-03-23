//------------------------------------------CONSTS------------------------------------------//
import { articles } from '/data/articles-collection.js'
import { showArticleContent, getCurrentYear, responsiveMenu } from './utils.js'

//------------------------------------------CONSTS------------------------------------------//
const hamburgerMenu = document.getElementById('hamburger')
const articleBody = document.getElementById('article-body')

//------------------------------------------ MENU WORKINGS + STYLINGS------------------------------------------//
window.addEventListener('click', e => clickAnywhereToClose(e))

hamburgerMenu.addEventListener("click", responsiveMenu)
//----------------------------------------------------------------------------------------------------//


function buildArticle() {
    articleBody.innerHTML = articles[articleBody.dataset.id].html
}

buildArticle()
getCurrentYear()

window.addEventListener('load', function () {
    showArticleContent()
}) 