$(function(){
	$('.menu').click(function(){
		$('.nav').css('left','0');
		$('.menu').css('left','-1000px')
	});
	$('.closemenu').click(function(){
		$('.menu').css('left','0');
		$('.nav').css('left','-1000px')
	});
	$('.applynow').click(function(){
		$('.applyforms').css({
      "top": "10px",
      "opacity": "1"
		}
    );
    $('.contact').css(
      "top", "10px"
    );
	})
});