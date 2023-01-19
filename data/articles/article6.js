const articleDate = 'September 28, 2022'
const articleTitle = 'Basketball Counter'
const articleImage = '/images/article6/appjournal.jpg'


export const article6 =
    {
        id: 6,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `The assignment was to make a simple scoreboard for a basketball game
        
        I wanted to take it a tiny bit further:

        - I added a clock, that counts down periods.
        - Periods indicators are added
        - Extra counters, for fouls
        - Indicators of who is winning.
        `,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='https://basketball-counter-frbl.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        The assignment was to make a simple scoreboard for a basketball game
        </p>

        <p class="articleText">
        I wanted to take it a tiny bit further:
        </p>
        <ul class='articleList'>
            <li>I added a clock, that counts down periods.</li>
            <li>Periods indicators are added</li>
            <li>Extra counters, for fouls</li>
            <li>Indicators of who is winning.</li>
        </ul>

        <img class="article-main-img" src="/images/article6/app.jpg">
        `
    }