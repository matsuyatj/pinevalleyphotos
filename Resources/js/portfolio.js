$(document).ready(function() {

    //sticky nav
    $('.js--port-row').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

       

});