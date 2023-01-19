const articleDate = 'November 5, 2022'
const articleTitle = 'Kramiek\'s Purrrfect Memepicker'
const articleImage = '/images/article9/journal.png'


export const article9 =
    {
        id: 9,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `The assignment focused primarily on different essential JavaScript concepts such as:

        for of loops
        import/export: using JavaScript modules; really interesting as I also had to deploy my server, before I discovered I could just do this way more easily from VSCode itself xD
        Radio/Checkbox Input and rendering these based on input data via Javascript
        querySelector, had used this before so nothing much new
        getElementsByClassName, again not too new as I had used this tonnes of times before in previous assignments
        classList and all it's possibilities
        .includes()
        .filter(), really powerful this one! and a joy to use`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='https://purrfect-memepicker.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        I'm currently refreshing my entire JavaScript knowledge through a course on Scrimba The assignment focused primarily on different essential JavaScript concepts such as:
        </p>
        <ul class='articleList'>
            <li><strong>for of</strong> loops</li>
            <li><strong>import/export:</strong> using JavaScript modules; really interesting as I also had to deploy my server, before I discovered I could just do this way more easily from VSCode itself xD</li>
            <li><strong>Radio/Checkbox</strong> Input and rendering these based on input data via Javascript</li>
            <li><strong>querySelector,</strong> had used this before so nothing much new</li>
            <li><strong>getElementsByClassName</strong>  again not too new as I had used this tonnes of times before in previous assignments</li>
            <li><strong>classList</strong> and all it's possibilities</li>
            <li><strong>.includes()</strong></li>
            <li><strong>.filter(),</strong> really powerful this one! and a joy to use</li>
        </ul>

        <img class="article-main-img" src="/images/article9/concepts.png">

        <p class="articleText">
        With these basics, the app basically reads an array of different objects in a JS Module, draws elements on the screen and allows you to pick a 'mood'. The selected 'mood' returns a matching GIF or meme of Cats.
        </p>

        <img class="article-main-img" src="/images/article9/base-screen.png">

        <img class="article-main-img" src="/images/article9/meme.png">

        <h2 class="sub-title">Some background</h2>

        <p class="articleText">
        I made this app my own and called it 'Kramiek's Purrrfect Memepicker', after our recently deceased cat Kramiek 😿
        </p>
        `
    }