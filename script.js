function enter() {
	$('#dystopia').css('transform', 'translateX(-100%)');
	$('#utopia').css('transform', 'translateX(100%)');
	$('#slide').css('opacity', '0');
	setTimeout(function() {
		$('#slide').css('display', 'none');
		$('.content').css('display', 'block');
	}, 2000);
}
function intro() {
	$('#slide button').css('opacity', '1');
}
$(document).ready(function(){
	setTimeout(function() {
		intro();
	}, 1500);
});