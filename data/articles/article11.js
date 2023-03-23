const articleDate = 'November 21, 2022'
const articleTitle = 'Frankito\'s Delicacies - a restaurant ordering app'
const articleImage = '/images/article11/main-article.png'
const appUrl = `https://frankitos.netlify.app/`


export const article11 =
    {
        id: 11,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `The goal of this assignment was to build a simple online restaurant ordering app. The concepts this app focuses on were very similar as with the Roostr app, completed not too long before this one.        `,
        html: `
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
        The goal of this assignment was to build a simple online restaurant ordering app. The concepts this app focuses on were very similar as with the Roostr app, completed not too long before this one.
        </p>
        <ul class='articleList'>
            <li>Working with Arrays</li>
            <li>for of loops</li>
            <li>data in JS Modules (exporting and importing)</li>
            <li>Objects in arrays</li>
        </ul>

        <p class="articleText">
        Below are the requirements of the assignment:
        </p>
        <img class="article-main-img" src="/images/article11/requirements.png">

        <p class="articleText">
        Some stretch goals were set as well, as always
        </p>
        <img class="article-main-img" src="/images/article11/stretch_goals.png">

        <p class="articleText">
        Check out the live version to give it a spin!
        </p>

        <h2 class="sub-title">The approach</h2>

        <p class="articleText">
        During the first steps of the deployment of the assignment, I followed the design in it's measurements, but then immediately deviated. I know interpreting designs from Figma is an important skill to still master, I feel as if I had enough understanding of how to translate from a design into an actual website.
        </p>

        <p class="articleText">
        We got a clear overview of what the 4 states of the application would be, and they made sense to start designing them chronologically.
        </p>
        <img class="article-main-img" src="/images/article11/4differentstates.png">

        <p class="articleText">
        I basically spied a bit on the internet and found a couple of restaurant sites I like, and borrowed from designs there. Bearing in mind, I'm not a designer and my end result probably hurts some people's eyes 😂
        </p>

        <h3 class="sub-sub-title">Splitting the data</h3>

        <p class="articleText">
        I kind of wanted to make my site clearer/more scalable. I wanted to have more than 3 options for the user to order from, so I split the menu cards in drinks, mains and desserts. I populated all JS's with their own objects, based on dishes I sometimes make myself, or I just like.
        </p>
        <img class="article-main-img" src="/images/article11/datastructure.png">

        <p class="articleText">
        All pictures from the mains were dishes created by myself btw ;) Except the salmon, which was my girlfriend's
        </p>

        <h3 class="sub-sub-title">Some extras</h3>

        <p class="articleText">
        I wanted to make the page a bit nicer to navigate. I made a nav bar, a footer and collapsable sections. When you click the images of the menu, you can see an enlarged image of the dish.
        </p>

        <p class="articleText">
        Furthermore, I spent some time on the design and the logo's and such. I learnt about the modern way of deploying correct icons and favicons for Apple Devices. All interesting skills to pick up along the way.
        </p>

        <p class="articleText">
        Once I got the rendering working of everything, I implemented some animations on the collapsable sections and on the cart. Really fun.
        </p>

        <h3 class="sub-sub-title">Getting the Cart to work</h3>

        <p class="articleText">
        So when a user clicks an item, it needs to be added to the cart. In order to do this, I created a new array that would store the clicked Object, with a couple of parameters saved to it. (id, name, price, etc)
        </p>

        <p class="articleText">
        I then render this to the cart, and calculate the total price.
        </p>

        <p class="articleText">
        One little extra I did is the delivery costs, by default set to 4.99. If a user orders more than $35, the shipping costs are automatically dropped.
        </p>

        <p class="articleText">
        Interesting to note here is that I struggled a lot with data types!! Numbers vs Strings and so on. Why? Because I had decided that my prices should be displayed with comma's to point out the decimals 😅 European vs American, I guess So instead of making my prices numbers again in the arrays, I do some converting back and forth in the background, to make all prices still display with comma's... A lot of unnecessary extra work, you could think, but I thought it was interesting to claw my way out of my own Requirements...
        </p>
        <img class="article-main-img" src="/images/article11/requirements.png">

        <h3 class="sub-sub-title">Checkout experience</h3>

        <p class="articleText">
        When it came to the checkout, I had a couple of interesting struggles too!
        </p>

        <p class="articleText">
        First of all, setting up the form itself still was a little bit of a challenge to me, meaning, when it comes to the positioning and the layout of the form. For some reason I seem to struggle with it from time to time. Even though I think it looks okay now, it didn't 'feel' like I was doing the right thing. I guess I'll need some more practice...
        </p>
        <img class="article-main-img" src="/images/article11/checkout.png">

        <p class="articleText">
        Other than that, I decided to add a coupon functionality. With a specific coupon defined (I didn't hide it in the code or anything), I display a 'loading' graphic; which is just a basic setTimeout() function, and run some code. Fun thing to do, and you also get to see the discount you got on the total order
        </p>
        <img class="article-main-img" src="/images/article11/invalid.gif">
        <img class="article-main-img" src="/images/article11/valid.gif">

        <p class="articleText">
        After some review by a user on the Scrimba code review forums, I noticed I had some issues with the validation of my form. The required fields were not taken into account. The reason for this was that I had pointed an eventlistener to the Pay button on the bottom of the screen. That's not how you're supposed to do it. Instead, I added an eventlistener to the form itself, listening for a 'submit' event on the form. This allowed me not only to properly validate the (required) data the user needed to fill out, but on top of that, I could use the preventDefault method, stopping the thing from reloading... Learned a lot there!
        </p>
        <img class="article-main-img" src="/images/article11/validation.png">

        <p class="articleText">
        Next up, once the user is able to pay their order, I made sure the modal is repainted with a couple of SVG animations I found and included on the site. I added them, and then concluded the animation.
        </p>
        <img class="article-main-img" src="/images/article11/payorder.gif">

        <h2 class="sub-title">Conclusion</h2>

        <p class="articleText">
        I loved every second of this assignment. It was the perfect closure to the essential Javascript section of the course. A chance to bring all knowledge together. And at the same time, I learned so much more in the process of creating this. I really, really liked it.
        </p>
        `
    }