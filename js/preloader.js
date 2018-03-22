	$(window).on('load', function() { 
		$(".loader").delay(800).slideUp('slow');
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	});