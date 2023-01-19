const articleDate = 'November 14, 2022'
const articleTitle = 'Roostr – A Twitter clone'
const articleImage = '/images/article4/my-emojis.jpg'


export const article10 =
    {
        id: 10,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `I will not spend too much time elaborating on this particular project, it was a simple exercise on adding and removing items from an array in JavaScript, but with Emojis :) Go and give it a spin!`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='https://roostrtweet.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>
        <ul class='articleList'>
            <li>Create the first post</li>
            <li>Use semantic HTML</li>
            <li>Add hover effects on the icons (Like, Comment, Share)</li>
        </ul>

        <img class="article-main-img" src="/images/article5/requirements.png">
        `
    }