$(document).ready(function(){

	/* Closes the menu after user clicks on something */
    $(document).click(function (event) {
        var clickover = $(event.target);
	    var $navbar = $(".navbar-collapse");               
	    var _opened = $navbar.hasClass("in");
	    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
	        $navbar.collapse('hide');
	    }
    });

    /* Smooth scrolling to anchor link */
    $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 650);
	        return false;
	      }
	    }
	  });
	});

    // Check the current window size
    var buttonResize = function () {
	    var viewportWidth = $(window).width();

	    if (viewportWidth <= 767) {
	    	$('.intro-buttons').children('li').children('a').removeClass('btn-lg').addClass('btn-md');
	    }

	    if (viewportWidth > 767) {	    	

	    }

	    if (viewportWidth >= 991) {
	    	$('.intro-buttons').children('li').children('a').removeClass('btn-md').addClass('btn-lg');
	    }
    };

    buttonResize();
    $(window).resize(function(){
    	// If screen size falls below certain level, make buttons smaller
    	buttonResize();
    });
});