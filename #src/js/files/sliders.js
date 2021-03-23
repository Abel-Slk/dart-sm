//SLIDERS
if($('.slider').length>0){
	$('.slider').slick({
		arrows: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,

		rows: 2,
		slidesPerRow: 1,

		vertical: true,
		verticalSwiping: true,

		responsive:[
			{
				breakpoint: 768,
				settings: {
					verticalSwiping: false // чтобы на моб это не мешало прокручивать сайт
				}
			}
		]
	});
}

if($('.slider-team').length>0){
	$('.slider-team').slick({
		autoplay: true,
		//infinite: false,
		dots: true,
		// arrows: false,
		accessibility:false,
		autoplaySpeed: 3000,
		slidesToShow:1,
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}