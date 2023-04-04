const articleDate = 'February 27, 2023'
const articleTitle = 'BlogSpace'
const appUrl = `https://frankysblogspace.netlify.app/`


export class article19 {
    constructor() {
        this.id = 19,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `BlogSpace is a little app app, part of module 9 of the Front-Developer Career Path over at scrimba.com. With this app, we focused on getting data from the JSONPlaceHolderAPI service, and displaying 'article-style' elements on the screen.`,
        this.html = `
        <img class="banner" src="/images/article${this.id}/banner.png">
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle} - HTTP Request and RESTful APIs</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='${appUrl}' target='_blank' class="articleLink">here</a>
        </p>
        ` 
        //URL STOP - ARTICLE start
        + 
        `
        <p class="articleText">
        BlogSpace is a little app app, part of module 9 of the Front-Developer Career Path over at scrimba.com. With this app, we focused on getting data from the JSONPlaceHolderAPI service, and displaying 'article-style' elements on the screen.
        </p>

        <p class="articleText">
        We also allow users to create a post on BlogSpace, although the data is not really saved on the backend. We basically send a POST request to the JSONPlaceHolderAPI and get a response with the content of our original message back. And an ID. Which we are not really using 😂
        </p>

        <p class="articleText">
        Anyway! It's a very tiny project, I did not spend any time at all on the styling or anything. Well maybe a little styling here and there. But I wanted to focus on the technical side here.
        </p>

        <p class="articleText">
        APIs are really interesting, and I did work with them a lot already in my job as a Solution Architect, to interact with Esko's WebCenter Application.
        </p>

        <p class="articleText">
        It was nice to build something from the ground up and really understand how these APIs typically work.
        </p>

        <p class="articleText">
        Below are once more the topics we covered in this module:
        </p>

        <img class="article-main-img" src="/images/article${this.id}/topics.png">
        `
    }
}