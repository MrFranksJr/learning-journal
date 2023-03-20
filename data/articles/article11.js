const articleDate = 'November 22, 2022'
const articleTitle = 'WeBarelyWork - WeWork spoof website'
const articleImage = '/images/article11/wework.png'


export const article11 =
    {
        id: 11,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `There's not a whole lot to say about this assignment. It was however part of a very interesting exercise to do with positioning and flexbox in CSS.`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='https://we-barely-work.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        There's not a whole lot to say about this assignment. It was however part of a very interesting exercise to do with positioning and flexbox in CSS.
        We got a basic HTML page and played around with the CSS, to make sure the elements were positioned correctly.
        Some concepts touched on were as follows:
        </p>
        <img class="article-main-img" src="/images/article11/concepts.png">

        <p class="articleText">
        Resulting in one of my first mobile-first / mobile-only pages:
        </p>
        <img class="article-main-img" src="/images/article11/fullpage.png">
        `
    }