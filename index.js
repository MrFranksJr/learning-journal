//consts
const hamburgerMenu = document.getElementById('hamburger')



//eventlisteners
hamburgerMenu.addEventListener("click", responsiveMenu)

//functions
function responsiveMenu() {
    const topNav = document.getElementById('nav-menu')
    if (topNav.className === "nav-menu") {
        topNav.className += " active";
    } else {
        topNav.className = "nav-menu";
    }
}