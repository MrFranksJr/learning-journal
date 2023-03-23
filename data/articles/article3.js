const articleDate = 'October 30, 2022'
const articleTitle = 'My Emojis'
const articleImage = '/images/article3/main.jpg'


export const article3 =
    {
        id: 3,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `I will not spend too much time elaborating on this particular project, it was a simple exercise on adding and removing items from an array in JavaScript, but with Emojis :) Go and give it a spin!`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='https://frbl-in-emojis.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        I will not spend too much time elaborating on this particular project, it was a simple exercise on adding and removing items from an array in JavaScript, but with Emojis :) Go and give it a spin!
        </p>

        <img class="article-main-img" src="/images/article3/my-emojis.jpg">
        `
    }