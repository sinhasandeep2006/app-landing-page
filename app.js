function navMenu() {
    let navbar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollUp');

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navbar.classList.add("navbar-sticky-moved-up");
        }
        else {
            navbar.classList.remove("navbar-sticky-moved-up");
        }
        if (scroll >= 250) {
            navbar.classList.add("navbar-sticky-transitioned");
            scrollTopButton.classList.add("scrollActive");
        } else {
            navbar.classList.remove("navbar-sticky-transitioned");
            scrollTopButton.classList.remove("scrollActive");
        }
        if (scroll>=500) {
            navbar.classList.add("navbar-sticky-on");
        }
        else{
            navbar.classList.remove("navbar-sticky-on");
        }
    }
}

navMenu()