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

document.addEventListener("DOMContentLoaded", ()=> {
   function counter(id,start,end,duration){
    let obj =document.getElementById(id),
    current=start,
    range=end-start,
    incerement=end>start?1:-1,
    step =Math.abs(Math.floor(duration/range)),
    timer=setInterval(()=>{
        current+= incerement;
        obj.textContent=current;
        if
        (current==end)
        {
            clearInterval(timer);
        }
    },step)
    
   }
   counter("count1",0,10,2000);
   counter("count2",100,10,2000);
   counter("count3",0,10,4000);
   counter("count4",0,10,2000);
});

