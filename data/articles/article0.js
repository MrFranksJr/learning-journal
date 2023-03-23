const articleDate = 'October 24, 2022'
const articleTitle = 'My Shopping List - First Chrome Extension'
const articleImage = '/images/article0/my-shopping-list.png'


export const article0 =
    {
        id: 0,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `I'm currently refreshing my entire JavaScript knowledge through a course on Scrimba The assignment was to make a simple chrome extension to save for instance your sales leads. I turned the Extension into a shopping list, as when I browser the web sometimes to do some shopping and compare items, I'd like to store them somewhere quick - My Shopping List!

        The following were the base requirements of the assignment:
        
        Create a simple button that read content from the input field available
        Create a button that reads the URL of the visible active tab and store it
        Store the data in the 'backend' localstorage
        Make the data visible in a
        All of the goals above were achieved, but I went a little bit beyond.
        
        Extra goals that I achieved:
        
        When hovering over the items, you can delete items one-by-one. It was a little bit tricky, but managed in the end.
        An automated check for HTTP or HTTPS in the input field. Because this extension runs locally, and when you leave out HTTP, the link posted in the list would actually not work correctly. So, before adding the Input value to the list, HTTPS is added when HTTP or HTTPS is missing from the string
        Added a function to detect the return key. It just makes life easier to just hit return and add your item to the list!
        screenshot of the extension
        
        Development
        The most important part of this exercise was learning to create better, cleaner JS (I feel). Things included:
        
        Working better with arrays
        Working with the LocalStorage (laying the groundwork for future backend/database interaction I assume)
        Adding eventlisteners in your JS instead of in the HTML
        Properly using consts where needed, instead of let
        Adjust the HTML via JS (and be conscious about using it!)
        Using Parameters for functions (although I already liked using that before ;)
        Template strings! Amazing way of writing HTML inside your JS, and escaping out of the string using \${}
        Touching on JSON, used a lot in webdevelopment when storing/handling data
        Conclusion
        I've got to say; this exercise was super-interesting. The app itself is not that fancy but the concepts shown and explained during this course are CRUCIAL to a future as a web developer. I loved the way everything was explained, how the concepts are explained and how you eventually reach the end result. I feel like I retain so much information and I cannot state enough how impressed I am with the Scrimba course!!`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>
        <h1 class="main-title">My Shopping List - First Chrome Extension</h1>
        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
            GitHub Repository <a href='https://github.com/MrFranksJr/chrome-extension' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        I'm currently refreshing my entire JavaScript knowledge through a course on <a class="articleLink" href="https://scrimba.com" target="_blank" alt="go to scrimba.com">scrimba.com</a>.<br><br>
        The assignment was to make a simple chrome extension to save for instance your sales leads. I turned the Extension into a shopping list, as when I browser the web sometimes to do some shopping and compare items, I'd like to store them somewhere quick - My Shopping List!
        </p>

        <img class="article-main-img" src="${articleImage}">

        <p class="articleText">
        The following were the base requirements of the assignment:</p>
        <ul class='articleList'>
            <li>Create a simple button that read content from the input field available</li>
            <li>Create a button that reads the URL of the visible active tab and store it</li>
            <li>Store the data in the 'backend' localstorage</li>
            <li>Make the data visible in a &lt;ul&gt;</pre> </li>
        </ul>

        <p class="articleText">
        All of the goals above were achieved, but I went a little bit beyond.
        </p>

        <p class="articleText">
        Extra goals that I achieved:</p>
        <ul class='articleList'>
            <li>When hovering over the items, you can delete items one-by-one. It was a little bit tricky, but managed in the end.</li>
            <li>An automated check for HTTP or HTTPS in the input field. Because this extension runs locally, and when you leave out HTTP, the link posted in the list would actually not work correctly. So, before adding the Input value to the list, HTTPS is added when HTTP or HTTPS is missing from the string</li>
            <li>Added a function to detect the return key. It just makes life easier to just hit return and add your item to the list!</li>
        </ul>

        <h2 class="sub-title">Development</h2>
        <p class="articleText">
        The most important part of this exercise was learning to create better, cleaner JS (I feel). Things included:</p>
        <ul class='articleList'>
            <li>Working better with arrays </li>
            <li>Working with the LocalStorage (laying the groundwork for future backend/database interaction I assume) </li>
            <li>Adding eventlisteners in your JS instead of in the HTML</li>
            <li>Properly using consts where needed, instead of let</li>
            <li>Adjust the HTML via JS (and be conscious about using it!)</li>
            <li>Using Parameters for functions (although I already liked using that before ;)</li>
            <li>Template strings! Amazing way of writing HTML inside your JS, and escaping out of the string using \${}</li>
            <li>Touching on JSON, used a lot in webdevelopment when storing/handling data</li>
        </ul>

        <h2 class="sub-title">Conclusion</h2>
        <p class="articleText">
        I've got to say; this exercise was super-interesting. The app itself is not that fancy but the concepts shown and explained during this course are CRUCIAL to a future as a web developer. I loved the way everything was explained, how the concepts are explained and how you eventually reach the end result. I feel like I retain so much information and I cannot state enough how impressed I am with the Scrimba course!!
        </p>
        `
    }