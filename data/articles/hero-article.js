const articleDate = 'December 22, 2022'
const articleTitle = 'Welcome to my Coding Journal'
const articleImage = '/images/hero-article/DeskMain.jpg'

export const heroArticle =
    {
        id: 0,
        title: articleTitle,
        date: articleDate,
        articleType: 'hero-article',
        imagePath: articleImage,
        content: `
            Hello visitor, and welcome to my personal page!<br>
            This spot on the internet will serve not only as my personal testing-ground / portfolio, but also as my diary of my journey into coding.
    
            I'm currently following a course over at <a class="articleLink" href="https://scrimba.com" target="_blank" alt="go to scrimba.com">scrimba.com</a> and I'm intending on documenting my trip through the course quite thoroughly. Both from the perspective of my personal experience, as well as from a technical point-of-view.<br><br>Expect to read about the new things I learnt, about my struggles but also about what went easy.<br>Expect to read about the extras I implemented but also about bigger ideas that I had and inevitably had to abandon because of time-constraints 😂

            I also invite you to read up on <a href="/pages/mystory.html" alt="go to my story" class="articleLink">My Story</a>. You'll learn how I got where I am today and why I'm moving in the direction I am.

            There will be a <a href="/pages/mywork.html" alt="go to my portfolio" class="articleLink">portfolio</a> section too with any projects listed and linked that I have completed, as well as any assignments I might pick up for 'real' customers along the way.

            Finally, there's a <a href="/pages/contact.html" alt="go to contact me" class="articleLink">contact</a> page where you'll find the different ways to get in touch with me, as well as my GitHub (which was my previous diary spot).

            Cheers! Happy Coding!<br>
            Franky`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>
        <h1 class="main-title">${articleTitle}</h1>
        <h2 class="sub-title">Hi 👋 I'm Franky,<br> an aspiring front-end developer from Ghent, Belgium</h1>
    
        <p class="articleText">
            Hello visitor, and welcome to my personal page!<br><br>
            This spot on the internet will serve not only as my personal testing-ground / portfolio, but also as my <a href="/pages/journal.html" alt="go to my journal" class="articleLink">diary</a> of my journey into coding.
        </p>

        <img class="article-main-img" src="${articleImage}">
        
        <p class="articleText">
            I'm currently following a course over at <a class="articleLink" href="https://scrimba.com" target="_blank" alt="go to scrimba.com">scrimba.com</a> and I'm intending on documenting my trip through the course quite thoroughly. Both from the perspective of my personal experience, as well as from a technical point-of-view.<br><br>Expect to read about the new things I learnt, about my struggles but also about what went easy.<br>Expect to read about the extras I implemented but also about bigger ideas that I had and inevitably had to abandon because of time-constraints 😂
        </p>
        <p class="articleText">
            I also invite you to read up on <a href="/pages/mystory.html" alt="go to my story" class="articleLink">My Story</a>. You'll learn how I got where I am today and why I'm moving in the direction I am.
        </p>
        <p class="articleText">
            There will be a <a href="/pages/mywork.html" alt="go to my portfolio" class="articleLink">portfolio</a> section too with any projects listed and linked that I have completed, as well as any assignments I might pick up for 'real' customers along the way.
        </p>
        <p class="articleText">
            Finally, there's a <a href="/pages/contact.html" alt="go to contact me" class="articleLink">contact</a> page where you'll find the different ways to get in touch with me, as well as my GitHub (which was my previous diary spot).
        </p>
        <p class="articleText">
            Cheers! Happy Coding!<br>
            Franky
        </p>
        `
    }