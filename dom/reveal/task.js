const reveal = document.querySelectorAll('.reveal')
let dir = 0;
const inViewport = function (element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect();
    let status = false;
    if (elementTop.top >= 0 || elementTop.bottom >= 0) {
        status = elementTop.top < viewportHeight ? true : false;
    }
    if (status == true) {
        element.classList.add('reveal_active');
    } 
    else {
        element.classList.remove('reveal_active');
    }
    if (reveal[0].getBoundingClientRect().top < (-viewportHeight)) {
        dir = 1;
    } 
    else {
        dir = 0;
    }
};

window.onscroll = function () {
    inViewport(reveal[dir]);
}