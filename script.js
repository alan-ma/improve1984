var clicked = 0;
function enter() {
	$('#dystopia').css('transform', 'translateX(-100%)');
	$('#utopia').css('transform', 'translateX(100%)');
	$('#slide').css('opacity', '0');
	setTimeout(function() {
		$('#slide').css('display', 'none');
		$('.content').css('display', 'block');
		$('#elon').css('display', 'block');
		setTimeout(function() {
			$('.content').css('opacity', '1');
		}, 5);
	}, 2000);
}
function intro() {
	$('#slide button').css('opacity', '1');
}
$(document).ready(function(){
	setTimeout(function() {
		intro();
	}, 1500);
	$('#elon img').click(function() {
		if (clicked == 0) {
			$('.content').css('filter', 'brightness(40%)');
			$('#tesla').slideDown();
			clicked = 1;
		} else {
			$('.content').css('filter', 'brightness(100%)');
			$('#tesla').slideUp();
			clicked = 0;
		}
	});
});