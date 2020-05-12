$(document).ready(function() {

    //sticky nav
    $('.js--slideshow').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName('imageslides');
        var dots = document.getElementsByClassName('thumbs');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 4000);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
   

});