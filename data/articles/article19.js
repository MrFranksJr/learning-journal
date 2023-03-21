const articleDate = 'January 30, 2023'
const articleTitle = 'Wizardz n Monsters'
const appUrl = `https://wizardz-n-monsters.netlify.app/`


export class article19 {
    constructor() {
        this.id = 19,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `I will not spend too much time elaborating on this particular project, it was a simple exercise on adding and removing items from an array in JavaScript, but with Emojis :) Go and give it a spin!`,
        this.html = `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle} - using Classes & Constructor functions</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='${appUrl}' target='_blank' class="articleLink">here</a>
        </p>
        ` 
        //URL STOP - ARTICLE start
        + 
        `
        <p class="articleText">
        Wizardz n Monsters is a small dice-rolling game, that was an assignment coming from the front-end developer career path on scrimba.com. The goal of this assignment and the module as a whole is to get familiar with some of the more advanced JavaScript concepts.
        </p>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <h2 class="sub-title">What did we learn?</h2>

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <img class="article-main-img" src="/images/article${this.id}/requirements.png">
        <img class="article-main-img" src="/images/article${this.id}/requirements.png">
        <img class="article-main-img" src="/images/article${this.id}/requirements.png">

        <p class="articleText">
        BLABLABLABLABLA
        </p>

        <h2 class="sub-title">Closing</h2>

        <p class="articleText">
        BLABLABLABLABLA
        </p>
        `
    }
}