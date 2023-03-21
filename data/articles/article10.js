const articleDate = 'November 14, 2022'
const articleTitle = 'Roostr – A Twitter clone'
const articleImage = '/images/article10/journal.png'


export const article10 =
    {
        id: 10,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `The assignment focused primarily on different essential JavaScript concepts such as:

        textareas: Already knew about these but it's the first time in class we used these
        .forEach(): interesting entry on how to use forEach on arrays and objects
        data-attributes: an extremely interesting piece on data attributes and how to use them in JavaScript. This was really handy
        Adding conditional render styles
        CDNs to fetch icons
        Logical NOT operator`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>

        <h1 class="main-title">${articleTitle}</h1>

        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
        Live version <a href='https://roostrtweet.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        I'm currently refreshing my entire JavaScript knowledge through a course on <a href='https://scrimba.com/' target='_blank' class="articleLink">Scrimba</a> The assignment focused primarily on different essential JavaScript concepts such as:
        </p>

        <ul class='articleList'>
            <li><strong>textareas:</strong> Already knew about these but it's the first time in class we used these</li>
            <li><strong>.forEach():</strong> interesting entry on how to use forEach on arrays and objects</li>
            <li><strong>data-attributes:</strong> an extremely interesting piece on data attributes and how to use them in JavaScript. This was really handy</li>
            <li><strong>Adding conditional render styles</strong></li>
            <li><strong>CDNs</strong> to fetch icons</li>
            <li><strong>Logical NOT operator</strong></li>
        </ul>

        <img class="article-main-img" src="/images/article10/concepts.png">

        <p class="articleText">
        Using all these concepts, I came to an app I called Roostr, which is in effect a 'clone' to twitter
        </p>

        <h2 class="sub-title">How it works</h2>

        <p class="articleText">
        The app basically first reads a data.js file, which contains some 'roost' objects (the equivalent of a tweet, in the Roostr world) in an array.
        </p>

        <p class="articleText">
        Using the stored data in that array, I run a function that reads out each object, and creates the different HTML elements necessary to display the 'roosts'
        </p>

        <img class="article-main-img" src="/images/article10/main-screen.png">
        
        <p class="articleText">
        Next up, it was necessary to make the reply, like and 'reroost' buttons work. Therefore, an eventlistener was added to the document. that will listen to any clickevent that happens on the screen. Each one of the like, reroost or reply buttons carries with it some data-attributes. Inside the data-attribute, the UUID is stored. In the eventlistener, I listen for which target was clicked, and handle that click appropriately.
        </p>

        <img class="article-main-img" src="/images/article10/event-listener.png">

        <p class="articleText">
        On top of that, it needed to be possible to 'roost' onto the site. So a textarea was created, that will allow users to add a message. Upon confirming, the user's message should appear on screen, as it is pushed to the array. Really fun!
        </p>

        <h2 class="sub-title">Stretch goals</h2>

        <p class="articleText">
        At Scrimba, some interesting stretch goals were proposed:
        </p>

        <img class="article-main-img" src="/images/article10/stretch-goals.png">

        <p class="articleText">
        Some of these were implemented, others not, in favor of some extras of my own that I found more interesting.
        </p>

        <h3>Creating a user</h3>

        <p class="articleText">
        As a first, I wanted the user to be able to choose their own handle to 'roost' with. So I created a small modal that asks the user for a (required) username. On top of that, the user is able to push in an avatar image.
        </p>

        <img class="article-main-img" src="/images/article10/login.png">

        <p class="articleText">
        Since I don't store anything server-side, and since one of the stretch goals mentions using the localstorage to store data anyhow, I decided to try and store all this data in the LocalStorage, including the avatar image. Since localstorage has some limitations, I added a limit to the upload size. So now I store a 'currentUser' object in the localstorage, which will be the driving factor for users to 'roost' from, instead of a hardcoded user like before
        </p>

        <p class="articleText">
        Interesting to note; If the user does not upload an avatar, I revert to a default image to show (a cracked egg)
        </p>

        <h3>Moving things to LocalStorage</h3>

        <p class="articleText">
        Once a user has been 'created' it is available in the LocalStorage. This means that next time you load the page, the user is loaded again from localStorage, and the login modal will not be shown again.
        </p>

        <p class="articleText">
        Roosting with a user being available will use the currentUser object from the localStorage.
        </p>

        <p class="articleText">
        Now, to furthermore leverage the localStorage:
        </p>

        <ul class='articleList'>
            <li>onload, I read the data.js file and push it into a local array and into the localStorage.</li>
            <li>second loadtime around, the data in the local array is fetched from localstorage</li>
            <li>refactoring had to happen to make the entire renderfunction listen to the local data, instead of the initial data.js file.</li>
        </ul>

        <p class="articleText">
        So with these changes made, I can now solely interact with the local array and/or localStorage data to generate new tweets, save the likes and reroosts and so on.
        </p>

        <h3>Delete Roosts</h3>

        <p class="articleText">
        I then went on to implement a deletion functionality. The code will check if the username of the currentuser is equal to the username of the roost. If the outcome is positive, a user can delete one of their own Roosts
        </p>

        <h3>Replies</h3>

        <p class="articleText">
        Replies functionality has been skipped in favor of progress towards the next assignments. I technically know exactly how I would tackle such a task, so I'm skipping for now.
        </p>

        <p class="articleText">
        Quite a fun little assignment and again, I learned so much!
        </p>
        `
    }