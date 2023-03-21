const articleDate = 'October 17, 2022'
const articleTitle = 'Random Password Generator'
const articleImage = '/images/article3/frbl-pw-generator_16.jpg'


export const article3 =
    {
        id: 3,
        title: articleTitle,
        date: articleDate,
        articleType: 'regular-article',
        imagePath: articleImage,
        content: `
        The assignment was to make a simple random password generator. It basically focuses on the use of arrays and also for and if loops in JS. Quite a nice assignment to really start to master the logic.
        
        The following were the base requirements of the assignment:
        
        Create a simple button to generate 2 passwords on the screen
        Create the entire thing 'from scratch', even though we are given a base array with all the characters. I did use this template as a basis. Also the design template was given. As my focus is mainly coding, and I thought the design was quite nice, I decided to follow this.
        Each of the passwords should be 15 characters long
        base requirements
        The following were the stretch goals of the assignment:
        
        Ability to customize the pw length
        Add copy-on-click functionality
        Toggling to include or not include certain types of characters
        Stretch goals
        Development
        I took a step by step approach, making sure my logic all worked with the base requirements of this assignment. Other than that, I looked for inspiration around me. I used to use LastPass and now use NordPass and looked there for more inspiration.
        
        I really liked NordPass' approach and design. I wanted to build something similar.
        NordPass password generator
        I really like the design of that app and decided to try and create some similar looking buttons, or at least check what is possible in CSS. On top of that, I think the slider is quite cool. I already know that it would've been quite easy to just have a text field somewhere where the user could enter the length of a password. But the slider is cooler. That led into some extra research being don on how to implement and also style that.
        
        The design and feature-set I ended up with looks like this:
        FRBL PW generator
        
        Some details on the code
        As per usual, I tried to create the most efficient way of doing this (without overdoing it either ;) But basically, there's two main functions:
        
        collectArrays()
        generatePasswords() The original array that was given by @perborgen was split up in 4 different arrays (capitals, numbers, special characters, regular small caps characters)
        collectArrays() is called every time the user changes something on the page or when they click the button the screen. The function is basically a giant if statement, running through the different possible options the user can select. Whether or not too include capitals, symbols, etc... Based on the selected options, a match is found and the appropriate arrays are merged (mergedArray), using the Spread syntax I found online. Seemed like the most appropriate. The function also reads the length the user has set for the password and passes both parameters (the resulting array + the length of the pw) to the generatePasswords() function.
        
        generatePasswords() is then called, creating two variables for both passwords. I also read the .length of the new array mergedArray, because I need that for the Math.random formula. Both passwords are simultaneously generated within the same for-loop, and passed into the two variables.
        
        I then push the results into the div on the page.
        
        Lastly, I added functionality for click-to-copy. Quite simple to do it turned out, I also added like a small tool tip that turns up when hovering over the password. Also, the user gets feedback when they clicked to copy.
        
        Conclusion
        Honestly, I again enjoyed this assignment so much. The assignment itself maybe is not anything special. But it did make me even more comfortable with some of the base concepts and syntaxes in Javascript. The stretch goals trigger me to look beyond what is asked. To check what's out there and find inspiration. On top of that, the process of thinking about the problem and diving into it. Developing a different way of thinking, as a programmer. It really feels awesome to notice the progress there and being able to move quicker and more accurate. Thanks to @perborgen and @scrimba for this journey!`,
        html: `
        <div class='date-back-block'>
        <p class="date">${articleDate}</p>
        <a href='#' onclick="history.back()" class='date articleLink'><i class="fa-solid fa-arrow-left"></i> Back</a>
        </div>
        <h1 class="main-title">${articleTitle}</h1>
        <h2 class="sub-title">Overview</h2>

        <p class="articleText">
            Live version <a href='https://safepwgenerator.netlify.app/' target='_blank' class="articleLink">here</a>
        </p>
        <p class="articleText">
            I'm currently refreshing my entire JavaScript knowledge through a course on <a href='https://scrimba.com/' target='_blank' class="articleLink">Scrimba</a> The assignment was to make a simple random password generator. It basically focuses on the use of arrays and also for and if loops in JS. Quite a nice assignment to really start to master the logic.
        </p>
        <p class="articleText">
        The following were the base requirements of the assignment:
        <ul class='articleList'>
            <li>Create a simple button to generate 2 passwords on the screen</li>
            <li>Create the entire thing 'from scratch', even though we are given a base array with all the characters. I did use this template as a basis. Also the design template was given. As my focus is mainly coding, and I thought the design was quite nice, I decided to follow this.
            </li>
            <li>Each of the passwords should be 15 characters long</li>
        </ul>
        </p>

        <img class="article-main-img" src="/images/article3/base-requirements.png">

        <p class="articleText">
        The following were the stretch goals of the assignment:</p>
        <ul class='articleList'>
            <li>Ability to customize the pw length</li>
            <li>Add copy-on-click functionality</li>
            <li>Toggling to include or not include certain types of characters</li>
        </ul>

        <img class="article-main-img" src="/images/article3/stretch-goals.png">

        <h2 class="sub-title">Development</h2>

        <p class="articleText">
            I took a step by step approach, making sure my logic all worked with the base requirements of this assignment. Other than that, I looked for inspiration around me. I used to use LastPass and now use NordPass and looked there for more inspiration.
        </p>

        <p class="articleText">
            I really liked NordPass' approach and design. I wanted to build something similar.
        </p>

        <img class="article-main-img" src="/images/article3/nordpass.png">

        <p class="articleText">
            I really like the design of that app and decided to try and create some similar looking buttons, or at least check what is possible in CSS. On top of that, I think the slider is quite cool. I already know that it would've been quite easy to just have a text field somewhere where the user could enter the length of a password. But the slider is cooler. That led into some extra research being don on how to implement and also style that.
        </p>

        <p class="articleText">
            The design and feature-set I ended up with looks like this:
        </p>

        <img class="article-main-img" src="/images/article3/frbl-pw-generator.png">

        <h3>Some details on the code</h3>

        <p class="articleText">
            As per usual, I tried to create the most efficient way of doing this (without overdoing it either ;) But basically, there's two main functions:
        </p>

        <ul class='articleList'>
            <li>collectArrays()</li>
            <li>generatePasswords() The original array that was given by @perborgen was split up in 4 different arrays (capitals, numbers, special characters, regular small caps characters)</li>
        </ul>

        <p class="articleText">
            <strong>collectArrays()</strong> is called every time the user changes something on the page or when they click the button the screen. The function is basically a giant if statement, running through the different possible options the user can select. Whether or not too include capitals, symbols, etc... Based on the selected options, a match is found and the appropriate arrays are merged (mergedArray), using the Spread syntax I found online. Seemed like the most appropriate. The function also reads the length the user has set for the password and passes both parameters (the resulting array + the length of the pw) to the generatePasswords() function.
        </p>

        <p class="articleText">
            <strong>generatePasswords()</strong> is then called, creating two variables for both passwords. I also read the .length of the new array mergedArray, because I need that for the Math.random formula. Both passwords are simultaneously generated within the same for-loop, and passed into the two variables.
        </p>

        <p class="articleText">
            I then push the results into the div on the page.
        </p>

        <p class="articleText">
            Lastly, I added functionality for click-to-copy. Quite simple to do it turned out, I also added like a small tool tip that turns up when hovering over the password. Also, the user gets feedback when they clicked to copy.
        </p>

        <h2 class="sub-title">Conclusion</h2>

        <p class="articleText">
            Honestly, I again enjoyed this assignment so much. The assignment itself maybe is not anything special. But it did make me even more comfortable with some of the base concepts and syntaxes in Javascript. The stretch goals trigger me to look beyond what is asked. To check what's out there and find inspiration. On top of that, the process of thinking about the problem and diving into it. Developing a different way of thinking, as a programmer. It really feels awesome to notice the progress there and being able to move quicker and more accurate. Thanks to @perborgen and @scrimba for this journey!
        </p>
        `
    }