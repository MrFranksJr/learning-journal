const articleDate = 'January 30, 2023'
const articleTitle = 'Wizardz n Monsters'
const appUrl = `https://wizardz-n-monsters.netlify.app/`


export class article18 {
    constructor() {
        this.id = 18,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `Wizardz n Monsters is a small dice-rolling game, that was an assignment coming from the front-end developer career path on scrimba.com. The goal of this assignment and the module as a whole is to get familiar with some of the more advanced JavaScript concepts.`,
        this.html = `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle} - using Classes & Constructor functions</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='${appUrl}' target='_blank' class="articleLink">here</a>
        </p>
        ` 
        //URL STOP - ARTICLE start
        + 
        `
        <p class="articleText">
        Wizardz n Monsters is a small dice-rolling game, that was an assignment coming from the front-end developer career path on <a href='https://scrimba.com' target='_blank' class="articleLink">scrimba.com</a>. The goal of this assignment and the module as a whole is to get familiar with some of the more advanced JavaScript concepts.
        </p>

        <p class="articleText">
        This particular repo is the end-state of this little app. In this one we're using classes instead of constructor functions. To see the constructor function version, visit the <a href='https://github.com/MrFranksJr/card-rpgConstructor' target='_blank' class="articleLink">card-rpgConstructor</a> repository.
        </p>

        <img class="article-main-img" src="/images/article${this.id}/result.png">

        <h2 class="sub-title">What did we learn?</h2>

        <p class="articleText">
        This module gradually went over some key concepts, as posted below:
        </p>

        <img class="article-main-img" src="/images/article${this.id}/recappt1.png">
        <img class="article-main-img" src="/images/article${this.id}/recappt2.png">
        <img class="article-main-img" src="/images/article${this.id}/recappt3.png">

        <p class="articleText">
        As you can see, it started out with some more advanced methods and techniques that would help us complete the journey, before shifting to Constructor functions, which allowed us to build the different characters that are visible on the screen. In the very last part of the course, part 3, we took the same app and converted the constructor functions we used before, into Classes. Clearly demonstrating the difference between the two, and also allowing for a nice flow in understanding of the logic.
        </p>

        <h2 class="sub-title">Closing</h2>

        <p class="articleText">
        This was an extremely interesting chapter to me. I finally fully grasp arrow functions as well as the .map method, which for some reason I was struggling with... It really made me think about all of the different previous project I completed on this course, as well as some projects that are still running. The Solo Project connected to this chapter was called Tindog (which you can find in my repo's here) and was an amazing chance to put all this gained knowledge to test. And not only my knowledge, but it also challenged my way of thinking once again. Really enjoyed this one, on to the next!
        </p>
        `
    }
}