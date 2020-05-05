$(document).ready(function() {

    // Slideshow
    var slideIndex = 1;
    showSlides(slideIndex);
    var myTimer;

    window.addEventListener("load",function() {
        showSlides(slideIndex);
        myTimer = setInterval(function(){plusSlides(1)}, 3500);

    var slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
    
    slideshowContainer.addEventListener('mouseenter', pause)
        
    slideshowContainer.addEventListener('mouseleave', resume)
    })
    
    function plusSlides(n){
        clearInterval(myTimer);
        if (n < 0){
          showSlides(slideIndex -= n);
        } else {
         showSlides(slideIndex += n); 
        }
    }

    function currentSlide(n){
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(n + 1)}, 3500);
        showSlides(slideIndex = n);
    }

    function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("imageslides");
        var dots = document.getElementsByClassName("thumbs");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
   
    pause = () => {
        clearInterval(myTimer);
    }

    resume = () =>{
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(slideIndex)}, 3500);
    }
    


});

