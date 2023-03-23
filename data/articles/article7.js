const articleDate = 'September 26, 2022'
const articleTitle = 'Emergency Counter'
const articleImage = '/images/article7/counterJournal.jpg'


export const article7 =
    {
        id: 7,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `Emergency Counter is a very simple page, with a counter on it (part of the Scrimba courses) Objective was to just build a simple counter.

        I live very close to an ambulance / fire truck depot. I decided to build a counter that counts every single one of the vehicles that passes by :)`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Emergency Counter is a very simple page, with a counter on it (part of the <a href='https://scrimba.com/' target='_blank' class="articleLink">Scrimba</a> courses) Objective was to just build a simple counter.

        I live very close to an ambulance / fire truck depot. I decided to build a counter that counts every single one of the vehicles that passes by :)
        </p>

        <h2 class="sub-title">Live version</h2>
        
        <p class="articleText">
        Live version <a href='https://emergencycounter.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <img class="article-main-img" src="/images/article7/counter.jpg">
        `
    }