var footer = document.getElementsByClassName("footer-bottom-flex");
var i;
 $(document).ready(function () {
            for (i = 0; i < footer.length; i++) {
                footer[i].addEventListener("click", function () {
                    this.parentElement.classList.toggle("active");
                });
            }

        });

var card = document.getElementsByClassName("card-item");
var i;

for (i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", function() {
        this.classList.add("active");
    });
    card[i].addEventListener("mouseout", function() {
        this.classList.remove("active");
    });
}
$(function(){
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true,
        fade: true
    });
});
$(document).ready(function() {
    $('.header-up-item-right-burger').click(function() {
        $('.header-up-item-right-burger,.header-bottom,.header-bottom-inner,.header-bottom-inner-active,.header-bottom-item,.header-up-item-right-svg-left,.main-btm, .video-play, .main-up').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.custom-checkbox').click(function() {
        $('.btn').toggleClass('disable');
    });
});
var videoEl = document.getElementsByTagName('video')[0]
playBtn = document.querySelector('.main-bottom-left-image')
playBtn.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
        $('.video-play').addClass('active')
    } else {
        videoEl.pause();
        $('.video-play').removeClass('active')
    }
}, false);
