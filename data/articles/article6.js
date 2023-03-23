const articleDate = 'September 14, 2022'
const articleTitle = 'Franky\'s Business Card'
const articleImage = '/images/article6/franky.png'


export const article6 =
    {
        id: 6,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `This is one of my first projects, obviously not too much to see here. Just a basic experiment with some HTML and CSS, to get back in the groove
        
        Live version
        Find it here
        `,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        This is one of my first projects, obviously not too much to see here. Just a basic experiment with some HTML and CSS, to get back in the groove.
        </p>

        <h2 class="sub-title">Live version</h2>

        <p class="articleText">
        Live version <a href='https://frbl-business-card.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <img class="article-main-img" src="${articleImage}">
        `
    }