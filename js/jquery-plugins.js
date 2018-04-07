$( document ).ready(function() {
	
	// -- FullPage configuration
	
	$('#fullpage').fullpage({
		navigation: true,
		loopBottom: true,
		loopHorizontal: true,
		scrollHorizontally: true,
	});

	// -- AOS configuration

	   AOS.init({
        easing: 'ease-in-out-sine'
      });

	// --- FANCY BOX

	$(document).ready(function() {
		$(".fancybox").fancybox({

			openEffect	: 'elastic',
    	closeEffect	: 'elastic',
			 overlayColor: "#000",  // here you set the background black

			overlayOpacity: 0.3,  // here you set the transparency of background: 1 = opaque

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}

		});
	});
	
	

});
