$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        // nav: true,
        // navText: ["<img src='img/icon/prev.png'>", "<img src='img/icon/next.png'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
var nav = document.querySelector('.nav');
console.log({ nav })
window.addEventListener('scroll', () => {
    var y = window.scrollY
    var navTop = nav.getBoundingClientRect().y
    console.log(navTop)
    if (y > nav.offsetTop + nav.offsetHeight / 2) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})
