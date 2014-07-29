$(document).ready(function(){	


	$( "#effect" ).show( "slide", 500 );

	$( window ).scroll(function() {
	//	$( "span" ).css( "display", "inline" ).fadeOut( "slow" );
	});


	var $slideEffect = $(".slideEffect");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$slideEffect.stop().animate({left: "200px"}, 300);
		} else {
			$slideEffect.stop().animate({left: "-90px"}, 300);
		}
	});


	$(function() {
		// run the currently selected effect
		function runEffect() {
			// most effect types need no options passed by default
			var options = {};

			// run the effect
			$( "#effect" ).show( "slide", options, 500, callback );
			$( "#effect1" ).show( "slide", options, 700, callback );
			$( "#effect2" ).show( "slide", options, 900, callback );
		};
		//callback function to bring a hidden box back
		function callback() {
			setTimeout(function() {
				$( "#effect:visible" ).removeAttr( "style" ).fadeOut();
			}, 2500 );
		};
		// set effect from select menu value
		$( "#button" ).click(function() {
			runEffect();
		});
		$( "#effect" ).hide();
	});

});