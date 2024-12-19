const countdown = () => {
    const endDate = new Date("Dec 5, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
};

const timer = setInterval(countdown, 1000);

$(document).ready(function () {
    $('#owl-demo').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoPlaySpeed: 2000,
        autoPlayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});

$(document).ready(function () {
    $('#owl-demo1').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoPlaySpeed: 2000,
        autoPlayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
});
