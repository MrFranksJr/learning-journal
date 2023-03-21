const articleDate = 'October 26, 2022'
const articleTitle = 'Oldagram - Instagram Clone'
const articleImage = '/images/article2/app_screen.jpg'

export const article2 =
    {
        id: 2,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `
        What if well known artists from times past, were able to take selfies?

        The assignment was to make an Instagram clone called 'Oldagram'. We all like selfies. Some famous painters in the past were way ahead of the curve and made their own classic hand-painted selfies. Hence: Oldagram.
        
        The assignment was mostly an exercise in CSS. But I definitely decided to keep on practicing my Javascript and applied a lot of the functionality we practiced in some of the previous lessons.
        
        The following were the base requirements of the assignment:
        
        Create the first post
        Use semantic HTML
        Add hover effects on the icons (Like, Comment, Share)
        
        The following were the Stretch goals:
        
        Use Javascript to render out all three posts
        Increase the likes when double clicking the post
        
        
        It was a given that I wanted to immediately render all posts using Javascript... All posts are coming from an array of Objects.
        
        Given some of the previous lessons, I borrowed some stuff from the chrome extension class Extra goals that I achieved:
        
        The like system is extended:
        When clicking the heart- icon, the system shows a string 'You and XXX others like this' and later revert to the sum of all Like
        'Over-liking' is not possible. It is possible to unlike a picture when clicking the heart again
        
        The posts themselves are initially loaded in from an array of Objects. However, the first thing I do is store all posts inside the LocalStorage.
        I actually wanted to extend the initial array to allow people to add extra posts or comments or something. I left this behind, and did not implement it.
        The second time you load the page, the posts are loaded from LocalStorage.
        The data in the Objects were extended to hold the Likes. This was necessary to have some place to actually store the likes you have given (which the app will do).
        Double-click eventlistener on the pics: It is possible to like the pics by double-clicking or double-tapping. Unliking is not possible via double-tap, which is by design.
        Added some extra posts, not that this is a notable achievement.
        
        Conclusion
        This was by far the most fun application to build. Both from a technical as a creative perspective. I feel like I'm quickly improving on many different fronts, further proving it is important to program every day, even if it's just a couple of lines ;)`,
        html: `
        <div class='date-back-block'>
            <p class="date">${articleDate}</p>
            <a href='#' onclick="history.back()" class='date'>&lt;&lt; Back</a>
        </div>
        <h1 class="main-title">${articleTitle}</h1>
        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
            Live version <a href='https://frbl-oldagram.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>

        <p class="articleText">
        What if well known artists from times past, were able to take selfies?<br><br>
        The assignment was to make an Instagram clone called 'Oldagram'. We all like selfies. Some famous painters in the past were way ahead of the curve and made their own classic hand-painted selfies. Hence: Oldagram.
        </p>

        <img class="article-main-img" id='oldagram-img' src="/images/article2/app_screen_full.jpg">

        <p class="articleText">
            The assignment was mostly an exercise in CSS. But I definitely decided to keep on practicing my Javascript and applied a lot of the functionality we practiced in some of the previous lessons.
        </p>

        <p class="articleText">
        The following were the base requirements of the assignment:</p>
        <ul class='articleList'>
            <li>Create the first post</li>
            <li>Use semantic HTML</li>
            <li>Add hover effects on the icons (Like, Comment, Share)</li>
        </ul>
        <img class="article-main-img" src="/images/article2/requirements.png">

        <p class="articleText">
        The following were the Stretch goals:
        </p>
        <ul class='articleList'>
            <li>Use Javascript to render out all three posts</li>
            <li>Increase the likes when double clicking the post</li>
        </ul>
        <img class="article-main-img" src="/images/article2/stretch-goals.png">

        <p class="articleText">
            It was a given that I wanted to immediately render all posts using Javascript... All posts are coming from an array of Objects.
        </p>


        <p class="articleText">
        Given some of the previous lessons, I borrowed some stuff from the chrome extension class Extra goals that I achieved:
        </p>
        <ul class='articleList'>
            <li>The like system is extended:
                <ul>
                    <li>When clicking the heart- icon, the system shows a string 'You and XXX others like this' and later revert to the sum of all Like</li>
                    <li>'Over-liking' is not possible. It is possible to unlike a picture when clicking the heart again</li>
                </ul>
                <img class="list-img" src="/images/article2/like-system1.jpg">
                <img class="list-img" src="/images/article2/like-system2.jpg">
                <img class="list-img" src="/images/article2/like-system3.jpg">
            </li>
            <li>The posts themselves are initially loaded in from an array of Objects. However, the first thing I do is store all posts inside the LocalStorage.
                <ul>
                    <li>I actually wanted to extend the initial array to allow people to add extra posts or comments or something. I left this behind, and did not implement it.</li>
                    <li>The second time you load the page, the posts are loaded from LocalStorage.</li>
                </ul>
            </li>
            <li>The data in the Objects were extended to hold the Likes. This was necessary to have some place to actually store the likes you have given (which the app will do).</li>
            <li>Double-click eventlistener on the pics: It is possible to like the pics by double-clicking or double-tapping. Unliking is not possible via double-tap, which is by design.</li>
            <li>Added some extra posts, not that this is a notable achievement.</li>
        </ul>

        <h2 class="sub-title">Conclusion</h2>

        <p class="articleText">
        This was by far the most fun application to build. Both from a technical as a creative perspective. I feel like I'm quickly improving on many different fronts, further proving it is important to program every day, even if it's just a couple of lines ;)
        </p>
        `
    }