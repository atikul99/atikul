

$(document).ready(function(){



	$('.grid').isotope({

		itemSelector: '.grid-item',
		
	});

	$('.filter-button-group').on( 'click', 'li', function() {

		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
		$('.filter-button-group li').removeClass('active');
		$(this).addClass('active');

	});

	// Typed JS
	var typed = new Typed('.atikul', {
		strings: ["Atikul Islam", 'Web Developer'],
		typeSpeed: 50,
		backSpeed: 50,
		loop: true
	});


});

