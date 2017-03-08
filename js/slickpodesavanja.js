/* slick - мој код */
$(document).ready(function() {
	$('.responsive').slick({
	  dots: false,
	  infinite: false,
	  speed: 200,
	  fade: false,
  	  cssEase: 'linear',
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
		{
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },	    
	    {
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 1440,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
});