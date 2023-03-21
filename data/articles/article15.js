const articleDate = 'October 12, 2022'
const articleTitle = 'Blackjack - The Dealer always wins'
const appUrl = `https://frbl-blackjack.netlify.app/`


export class article15 {
    constructor() {
        this.id = 15,
        this.title = articleTitle,
        this.date = articleDate,
        this.articleType = 'regular-article',
        this.imagePath = `/images/article${this.id}/main.png`,
        this.content = `I will not spend too much time elaborating on this particular project, it was a simple exercise on adding and removing items from an array in JavaScript, but with Emojis :) Go and give it a spin!`,
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
        ` 
        //URL STOP - ARTICLE start
        + 
        `
        <p class="articleText">
        The assignment was to make a simple number generator, that at the press of a button, generates you a couple of numbers representing cards.
        </p>

        <p class="articleText">
        I wanted to take it a tiny bit further, wanted to make it a bit nicer to look at, I'll explain below how I worked.
        </p>

        <h2 class="sub-title">Rules of the Game</h2>

        <p class="articleText">
        I'm not going to go too deep into the rules of Blackjack. How my game works in particular though, is as follows:
        </p>

        <ul class='articleList'>
            <li>You enter your data when starting a game. You can choose however much money you have
            <img style="width:300px; margin-bottom:0; margin-left:30px;" class="article-main-img" src="/images/article${this.id}/infoscreen.png"></li>
            <li>You press START GAME in order to kick off
                <ul>
                    <li>Starting a game will draw two random cards</li>
                    <li>Starting a game costs you $100</li>
                </ul>
            </li>
            <li>You can draw a new card by clicking the New Card... button</li>
            <li>You can completely reset the game by pressing the button below</li>
            <li>When bust, you have the option to start a new game</li>
            <li>When you get Blackjack, you win $400</li>
        </ul>

        <h2 class="sub-title">Some technicalities</h2>

        <p class="articleText">
        Making a random number generator is not the hardest thing in the world. So that's why I wanted something extra in the game.
        </p>

        <h3 class="sub-sub-title">Make it visual</h3>

        <p class="articleText">
        So what I did is that I really wanted to see the cards on the screen. I got some card faces from the <a href='https://code.google.com/archive/p/vector-playing-cards/downloads' target='_blank' class="articleLink">Google Code Archive</a>. Once the cards were downloaded, I got rid of the cards I didn't need, and all named them in a specific way, e.g.:
        
        <ul class='articleList'>
            <li>king-hearts.png</li>
            <li>9-spades.png</li>
            <li>... In the Javascript, I could then determine the value of the cards, just based of the naming, and count scoring like that.</li>
        </ul>
        </p>
        <img class="article-main-img" src="/images/article${this.id}/gamestart.png">

        <h3 class="sub-sub-title">Make it random</h3>

        <p class="articleText">
        Now, at this point the randomization factor really became an interesting thing to tackle. I'm sure there's different ways of doing it, but I solved it like this:

        <ul class='articleList'>
            <li>Made a big array that contained all the filenames of all cards in the deck</li>
            <li>I then shuffle this entire Array when the player presses 'Start Game'
                <ul>
                    <li>I used the <a href='https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle' target='_blank' class="articleLink">Fisher-Yates shuffle</a>. There's a really interesting visualization/explanation <a href='https://bost.ocks.org/mike/shuffle/' target='_blank' class="articleLink">here</a>.</li>
                </ul>
            </li>
            <li>Once the cards in the array, it's simple:
                <ul>
                    <li>At the start of the game, I pick the first two cards of the Array</li>
                    <li>I remove them from the original array, and store them in an Array cardsOnTable</li>
                    <li>The process is repeated every time the user draws a cards. Basically like in real life.</li>
                </ul>
            </li>
        </ul>
        </p>

        <h3 class="sub-sub-title">Finishing touches</h3>

        <p class="articleText">
        So yeah, the rest is just some details, calculations, etc... Still some things missing, I might add that in the future. Right now my objective is not to make the perfect app, but to understand and familiarize myself with certain concepts, fast. Adding a fail state will not necessarily teach me much, rather cost me time. But still, I want to track all my todo's, just like I did with the basketball counter.
        </p>

        <img class="article-main-img" src="/images/article${this.id}/blackjack.png">

        <h2 class="sub-title">ToDo's</h2>
        
        <p class="articleText">
        Obviously, the game is far from finished, but it served as a really nice training for me to get back into JavaScript. Some things I want to add still:
        </p>
        <ul class='articleList'>
            <li>Currently nothing happens when you have $0. So I want to implement a fail-state in the future.</li>
            <li>You don't get to see the dealer's hand... And that takes away the entire point of the game. You can't really win in this game, unless you exactly hit a Blackjack. And that needs to change.</li>
            <li>One other option I thought of is that you can press an 'end-game' button and that they would get to see the next card in the stack, to see if they would've gone bust.</li>
        </ul>
        `
    }
}