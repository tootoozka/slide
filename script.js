
new Swiper('.image-slider-vert', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	grabCursor: true,

	direction: 'vertical',




});


new Swiper('.image-slider-1', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".image-slider-1"
	},

	nested: true,
	grabCursor: true,


	//loop: true,

	effect: 'cube',

	cubeEffect: {
		slideShadows: true,
		shadow: false,
		// 	shadowOffset: 5,
		// 	shadowScale: 0.94

	},
});

new Swiper('.image-slider-2', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".image-slider-2"
	},

	nested: true,
	grabCursor: true,


	//loop: true,

	effect: 'cube',

	cubeEffect: {
		slideShadows: true,
		shadow: false,
		// 	shadowOffset: 5,
		// 	shadowScale: 0.94

	},
});

