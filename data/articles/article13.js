const articleDate = 'November 29, 2022'
const articleTitle = 'Street Triple Dreams - a first responsive experience'
const articleImage = '/images/article13/main.png'
const appUrl = `https://triumph-responsive.netlify.app/`


export class article13 {
    constructor() {
        this.id = 13,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = articleImage,
        this.content = `So I've been working on mobile webdesign these last couple of weeks... Progress has been slower than usual (a lot happening in life). Either way, I've set the first steps using media queries, relative units (em, rem, percentages) as well as more extensive Flexbox features (flex-wrap/gap).`,
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
        So I've been working on mobile webdesign these last couple of weeks... Progress has been slower than usual (a lot happening in life). Either way, I've set the first steps using media queries, relative units (em, rem, percentages) as well as more extensive Flexbox features (flex-wrap/gap).
        </p>

        <p class="articleText">
        On top of everything else, this was just a very good exercise in 'mobile-first' thinking. Which I feel is probably the best way to go about many webdesign assignments these days.
        </p>
        <img class="article-main-img" src="/images/article${this.id}/concepts.png">

        <p class="articleText">
        The result is a very simple 1-pager, which scales the photos, text and buttons to a certain degree, before going to a full mobile layout when the screen is narrow enough. Notice also the menu changing on the top to a more manageable size on mobile.
        </p>

        <p class="articleText">
        I tried playing around with some other stuff too on this one :) Since this is about motorcycles, I wanted to have the sound on the page. But I thought it would be really nice to have some equalizer or something on the screen when users click to play the sound. This was all canvas stuff, and I got some 'prototype' working based on a youtube video. But it was a bit too much to dive into now, and especially if I wanted to get it to play nicely with mobile too. So, skipping for now! In favor of progress, because honestly, I'm missing Javascript already.
        </p>

        <img class="article-main-img" src="/images/article${this.id}/desktop.png">
        <img class="article-main-img" src="/images/article${this.id}/mobile.png">
        `
    }
    }