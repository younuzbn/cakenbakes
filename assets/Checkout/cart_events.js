$(document).on("loadminicart", function(e) {

	$('.header-mini-cart').load(baseUrl + 'cart/loadmini', '', function() {
		loadMiniCart = true;
	});

});
