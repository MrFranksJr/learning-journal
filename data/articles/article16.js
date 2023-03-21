const articleDate = 'December 24, 2022'
const articleTitle = 'JavaScriptmas 2022'
const appUrl = `https://github.com/MrFranksJr/javascriptmas-2022`


export class article16 {
    constructor() {
        this.id = 16,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `Welcome to JavaScriptmas 2022, a daily challenge from the 1st of December 2022 until the 24th. Organized by Scrimba, the organization I'm using to freshen up my JavaScript skills.`,
        this.html = `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>

        <img class="article-main-img" src="/images/article${this.id}/title.png">
        <h1 class="main-title">${articleTitle} - an advent calendar of challenges</h1>

        <p class="articleText">
        GitHub link right <a href='${appUrl}' target='_blank' class="articleLink">here</a>
        </p>
        ` 
        //URL STOP - ARTICLE start
        + 
        `
        <p class="articleText">
        Welcome to JavaScriptmas 2022, a daily challenge from the 1st of December 2022 until the 24th. Organized by Scrimba, the organization I'm using to freshen up my JavaScript skills.
        </p>

        <p class="articleText">
        A new door will open every single day from December 1st to 24th, revealing a small coding challenge for you to solve. I made a point of it to sit down every day to solve these little challenges. Some easy, some hard, but above all, a really nice way to stay engaged and to also learn something new along the way.
        </p>

        <p class="articleText">
        Get into the subfolders on GitHub to learn about the different assignments.
        </p>

        <img class="article-main-img" src="/images/article${this.id}/calendar.png">
        `
    }
}