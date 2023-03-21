const articleDate = 'November 30, 2022'
const articleTitle = 'Franky.fast - a responsive splashpage'
const articleImage = '/images/article4/main.png'
const appUrl = `https://fastfranky.netlify.app/`


export class article14 {
    constructor() {
        this.id = 14,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `This next assignment was another small splash/webpage with mobile support. I extended my knowledge and learnt about the viewport (which I was actually already using), transforming text, ordering flexbox items. Box sizing was also taught in this module, but I wouldn't have been able to complete many of my previous assignments without this one`,
        this.html = `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='${appUrl}' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        This next assignment was another small splash/webpage with mobile support. I extended my knowledge and learnt about the viewport (which I was actually already using), transforming text, ordering flexbox items. Box sizing was also thaught in this module, but I wouldn't have been able to complete many of my previous assignments without this one 😉
        </p>
        <img class="article-main-img" src="/images/article${this.id}/concepts.png">

        <p class="articleText">
        So in the end, resulting in quite a simple splashpage, which switches flex-directions based on the screen width. And also a deeper dive in formatting input fields and forms, which is something I desperately needed.
        </p>
        <img class="article-main-img" src="/images/article${this.id}/desktop.png">
        <img class="article-main-img" src="/images/article${this.id}/mobile.png">
        `
    }
}