$(document).ready(function(){
	$('.single-item').slick({
	  infinite: true,
	  dots: true,
	  autoplay: true,
      autoplaySpeed: 7000,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	
	new WOW().init();
	materials();
	 
	$(".nav-btn").click(function(){
		$(".nav-link").slideToggle();	
	});
	$(".nav-link .nav-ul > li.sub-menu").each(function() {
		$(this).children("a").after("<span class='arrow'><i class='fa fa-angle-down'></i></span>");
	});
	$(".nav-link .nav-ul li.sub-menu span").click(function(){
		if($(this).next("ul").is(":visible"))
		{
			$(this).next("ul").slideUp();
			$(this).children(".fa").addClass("fa-angle-down").removeClass("fa-angle-up");
		}
		else
		{
			$(".nav-link .nav-ul li.sub-menu ul").slideUp();
			$(".nav-link .nav-ul li.sub-menu .fa").addClass("fa-angle-down").removeClass("fa-angle-up");
			$(this).children(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
			$(this).next("ul").slideDown();
		}
	});
	
	
	// Parallex js
	$.fn.parallax = function(options) {
		var windowHeight = $(window).height();
		// Establish default settings
		var settings = $.extend({
			speed        : 0.5
		}, options);
		// Iterate over each object in collection
		return this.each( function() {
		// Save a reference to the element
		var $this = $(this);
		// Set up Scroll Handler
		$(document).scroll(function(){
			var scrollTop = $(window).scrollTop();
				var offset = $this.offset().top;
				var height = $this.outerHeight();
			// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
				// Apply the Y Background Position to Set the Parallax Effect
				$this.css('background-position', 'center ' + yBgPosition + 'px');
			});
		});
	}
	// Parallax call
	$('.our-markets').parallax({
		speed :	0.5
	});
	
	
	
});


$('#myModal').on('hidden.bs.modal', function () {
    location.reload();
});
/*$(document).ready(function(){
	$('.venobox').venobox(); 
});*/

function materials(){
	$(".video-thumb").click(function(){
		$("body").addClass("video-open");
		$(".video-popup").slideDown();
	});
	$(".close-btn").click(function(){
		$(".video-popup").slideUp();
		$("body").removeClass("video-open");
	});
}

$(window).load (function() {
	$(function() {
		$(".logo-carousel ul").carouFredSel({
		  items: {
			visible: 5,
			minimum: 7
		  },
		  scroll: {
			pauseOnHover: 'immediate',
			easing: 'linear',
			duration: 20000
		  },
		  auto: {
			timeoutDuration: 0
		  },
		  swipe: true,
		  width: "100%"
		});
	});
});


/*$(window).scroll(function(){
	if($(window).scrollTop() > 700 )
		{
			$("body").addClass("sticky");
		}
	else
		{
			$("body").removeClass("sticky");	
		}
});*/

