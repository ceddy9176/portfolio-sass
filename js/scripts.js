// JQUERY
$(function() {
	$(window).bind('load', function() {
		$('.overlay, .preload').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 1000);
	});
	setTimeout(function() {
		$('.overlay, .preload').addClass('loaded');
	}, 30000);
	var names = ['Loading images...', 'Generating Colors...', 'Getting Fonts...', 'Testing connection...'];
	setInterval(function() {
	  var rand = Math.floor(Math.random() * 4);
		$('#name').html(names[rand]);
	}, 3500);

});
