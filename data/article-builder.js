//------------------------------------------CONSTS------------------------------------------//
import { articles } from '/data/articles-collection.js'

const articleBody = document.getElementById('article-body')

function buildArticle() {
    articleBody.innerHTML = articles[articleBody.dataset.id].html
}

buildArticle()