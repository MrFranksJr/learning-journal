const articleDate = 'February 22, 2023'
const articleTitle = 'BoredBot'
const appUrl = `https://bored-botz.netlify.app/`


export class article18 {
    constructor() {
        this.id = 18,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.jpeg`,
        this.content = `BoredBot is an introductory app, part of Module 8 of the Front-Developer Career Path over at scrimba.com.`,
        this.html = `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <img class="article-main-img" src="/images/article${this.id}/banner.png" style="width: 100%; max-width: unset; margin: 1.5rem 0 0 0;">
        <h1 class="main-title">${articleTitle} - playing with the BoredAPI</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='${appUrl}' target='_blank' class="articleLink">here</a>
        </p>
        ` 
        //URL STOP - ARTICLE start
        + 
        `
        <p class="articleText">
        BoredBot is an introductory app, part of Module 8 of the Front-Developer Career Path over at <a href='https://scrimba.com' target='_blank' class="articleLink">scrimba.com</a>.
        </p>

        <p class="articleText">
        With this app, we explore the FetchAPI interface and interact with the BoredAPI in order to find us something nice to do.
        </p>

        <p class="articleText">
        Below are the topics we covered in this module:
        </p>

        <img class="article-main-img" src="/images/article${this.id}/topics.png">

        <p class="articleText">
        All and all a fairly simple app, just to take my first steps into working with APIs.
        </p>

        <h3 class="sub-sub-title">Some extra's</h3>

        <p class="articleText">
        I did add a couple of extra's in this app:
        </p>

        <ul class='articleList'>
            <li>The logo was generated with Dall E, because why not :)</li>
            <li>The button relies on an array to feed the user a couple of extra strings of text when they press it.</li>
        </ul>

        <img class="article-main-img" src="/images/article${this.id}/app.jpeg">

        `
    }
}