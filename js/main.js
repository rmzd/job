var footer = document.getElementsByClassName("footer-bottom-media");
var i;

for (i = 0; i < footer.length; i++) {
    footer[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}
$(document).ready(function() {
    $('.header-hover').mouseover(function() {
        $('.header-bottom-hover').toggleClass('active');
    });
    $('.header-bottom-hover').mouseover(function() {
        $('.header-bottom-hover').addClass('active');
    });
    $('.header-bottom-hover').mouseout(function() {
        $('.header-bottom-hover').removeClass('active');
    });
})
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
        $('.header-up-item-right-burger').toggleClass('active');
        $('.header-bottom').toggleClass('active');
        $('.header-bottom-inner').toggleClass('active');
        $('.header-bottom-inner-active').toggleClass('active');
        $('.header-bottom-item').toggleClass('active');
        $('.header-up-item-right-svg-left').toggleClass('active');
    });
});
