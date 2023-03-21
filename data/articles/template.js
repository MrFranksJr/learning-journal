const articleDate = 'October 30, 2022'
const articleTitle = 'My Emojis'
const appUrl = `https://frankitos.netlify.app/`


export class article22 {
    constructor() {
        this.id = 22,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `I will not spend too much time elaborating on this particular project, it was a simple exercise on adding and removing items from an array in JavaScript, but with Emojis :) Go and give it a spin!`,
        this.html = `
        <img class="banner" src="/images/article${this.id}/banner.png">
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='${appUrl}' target='_blank' class="articleLink">here</a>
        </p>
        ` 
        //URL STOP - ARTICLE start
        + 
        `
        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <ul class='articleList'>
            <li>Create the first post</li>
            <li>Use semantic HTML</li>
            <li>Add hover effects on the icons (Like, Comment, Share)</li>
        </ul>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <h3 class="sub-sub-title">mini-title</h3>
        `
    }
}