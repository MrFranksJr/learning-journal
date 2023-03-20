const articleDate = 'October 29, 2022'
const articleTitle = 'Unit Converter - Metric/Imperial'
const articleImage = '/images/article5/light-mode - small.png'


export const article5 =
    {
        id: 5,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `The assignment was to make a simple unit converter (Imperial -> Metric and vice versa)

        The following were the base requirements of the assignment:
        
        Create the first post
        Use semantic HTML
        Add hover effects on the icons (Like, Comment, Share)`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>
        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='https://metconverter.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        I'm currently refreshing my entire JavaScript knowledge through a course on <a href='https://scrimba.com' target='_blank' class="articleLink">Scrimba</a>
        </p>

        <p class="articleText">
        The assignment was to make a simple unit converter (Imperial -> Metric and vice versa)
        </p>

        <p class="articleText">
        The following were the base requirements of the assignment:
        </p>
        <ul class='articleList'>
            <li>Follow the design spec</li>
            <li>Generate all conversions when the user clicks "Convert"</li>
            <li>Round the numbers down to three decimal places</li>
        </ul>

        <img class="article-main-img" src="/images/article5/requirements.png">

        <h2 class="sub-title">Development</h2>

        <p class="articleText">
        This project was really quick and easy. Conversions of units are basically small calculations. I did it as efficiently as I could; just made sure all calcs are done in one function and there's only one DOM manipulation at the end.
        </p>

        <p class="articleText">
        Since the app was pretty bright and glary, I set a stretch goal for myself: implement a light- and dark-mode function. It started with the design of some button using only HTML and CSS I found on youtube. Really found a lot of interesting stuff on pseudo-classes I didn't know nothing about.
        </p>

        <p class="articleText">
        On top of that, I extended the stretch goal by implementing a function that reads the system's setting of light or darkmode. I still don't think I fully understand how it works 😂 But it's a step in the right direction, it was a blast when it worked.
        </p>

        <p class="articleText">
        When you change the theme, it is saved to LocalStorage, so your preference is kept ^^
        </p>

        <p class="articleText">
        Ah, and I added Fahrenheit conversion too, cause I needed that one the most haha.
        </p>
        <div class='unit-img'>
            <img class="article-main-img flex-unit-img" src="/images/article5/light-mode.jpg">
            <img class="article-main-img flex-unit-img" src="/images/article5/dark-mode.jpg">
        </div>

        <h2 class="sub-title">Conclusion</h2>

        <p class="articleText">
        In essence, this was not too complex to do. However, I was able to challenge myself and add a couple of interesting additional features.
        </p>
        `
    }