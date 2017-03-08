$('.responsive').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  closeOnContentClick: true,
  image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 150 // don't foget to change the duration also in CSS
		}
});