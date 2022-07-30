$(document).ready(function(){

    /* For sticky Navigation */
    $('.js--section-about-us').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '65px;'
      });

     /*Animations on Scroll*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated', 'animate__fadeIn', 'animate__delay-3s');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated', 'animate__bounceInDown');
    }, {
        offset: '50%'
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        nav.slideToggle(200); 
    });
});