$(document).ready(function(){	

	$( ".effect" ).hide();
	$( ".effect2" ).hide();
	$( ".effect3" ).hide();
	$( ".inverted-effect" ).hide();
	$( ".inverted-effect2" ).hide();
	$( ".inverted-effect3" ).hide();

	$('.multiple-items').slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	//callback function to bring a hidden box back
	function callback() {
		setTimeout(function() {
			$( "#effect:visible" ).removeAttr( "style" ).fadeOut();
		}, 2500 );
	};


	$(window).scroll(function() {
		var options = { direction: 'right' };
		var options_inverted = { direction: 'left' };
		var y_scroll_pos = window.pageYOffset;

		switch (true) {
			case y_scroll_pos >= 600:
			$( ".effect3" ).show( "slide", options, 1000, callback );
			$( ".inverted-effect3" ).show( "slide", options_inverted, 1000, callback );
			break;

			case y_scroll_pos >= 400:
			$( ".effect2" ).show( "slide", options, 1800, callback );
			$( ".inverted-effect2" ).show( "slide", options_inverted, 1800, callback );
			break;

			case y_scroll_pos >= 200:
			$( ".effect" ).show( "slide", options, 2600, callback );
			$( ".inverted-effect" ).show( "slide", options_inverted, 2600, callback );
			break;
		}

	});

});