const articleDate = 'February 14, 2023'
const articleTitle = 'Tindog - a Tinder clone'
const appUrl = `https://tindogzzz.netlify.app/`


export class article17 {
    constructor() {
        this.id = 17,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `Tindog was the solo project of Module 7 (advanced JavaScript) over at scrimba.com's front-end developer career path course. The goal was to build a simple tinder clone, using Javascript classes, as a perfect closer for what had been taught in the previous couple of scrims.`,
        this.html = `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
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

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h2 class="sub-title">My original plan</h2>

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

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h2 class="sub-title">Stretch goals - some extra's</h2>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h3 class="sub-sub-title">Mobile first?</h3>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        CODE BLOCK
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        CODE BLOCK
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <h3 class="sub-sub-title">Mobile first?</h3>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <h3 class="sub-sub-title">Some design changes</h3>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <h3 class="sub-sub-title">Desktop version</h3>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <h3 class="sub-sub-title">Actual swiping</h3>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h3 class="sub-sub-title">Trouble</h3>

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

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h3 class="sub-sub-title">More dogs!!</h3>

        <p class="articleText">
        BLABLABLABLABLA
        </p>
        
        <h3 class="sub-sub-title">Optimizations</h3>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        CODE BLOCK
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h2 class="sub-title">Future improvements?</h2>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <ul class='articleList'>
            <li>Create the first post</li>
            <li>Use semantic HTML</li>
            <li>Add hover effects on the icons (Like, Comment, Share)</li>
        </ul>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h2 class="sub-title">Conslusion</h2>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">
        `
    }
}