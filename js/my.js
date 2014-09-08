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

		if (y_scroll_pos >= 1650) {
			$(".icons").addClass("spin");
			console.log(">2150 px", y_scroll_pos, "$('document').height();", $(document).height());
		} else if (y_scroll_pos <= 1650) {
			$(".icons").removeClass("spin");
			console.log("menor 2150 px", y_scroll_pos, "$('document').height();", $(document).height());
		}

		switch (true) {
			// case y_scroll_pos >= 2150:
			// $(".icons").addClass("spin");
			// console.log(">2150 px", y_scroll_pos, "$('document').height();", $(document).height());
			// break;

			// case y_scroll_pos >= 1000 && y_scroll_pos <= 2150:
			// $(".icons").removeClass("spin");
			// console.log("menor 2150 px", y_scroll_pos, "$('document').height();", $(document).height());
			// break;

			case y_scroll_pos >= 600:
			$( ".effect3" ).show( "slide", options, 1000, callback );
			$( ".inverted-effect3" ).show( "slide", options_inverted, 1000, callback );
			console.log(">600 px", y_scroll_pos, "$('document').height();", $(document).height());
			break;

			case y_scroll_pos >= 400:
			$( ".effect2" ).show( "slide", options, 1800, callback );
			$( ".inverted-effect2" ).show( "slide", options_inverted, 1800, callback );
			console.log(">400 px", y_scroll_pos, "$('document').height();", $(document).height());
			break;

			case y_scroll_pos >= 200:
			$( ".effect" ).show( "slide", options, 2600, callback );
			$( ".inverted-effect" ).show( "slide", options_inverted, 2600, callback );
			console.log(">200 px", y_scroll_pos, "$('document').height();", $(document).height());
			break;
			
		}

	});

});