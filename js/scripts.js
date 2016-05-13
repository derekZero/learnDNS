$(document).ready(function(){
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop;
		var names = $(".names").offset.scrollTop;
		if (names>scrollTop){
			$(".names h1").animate({opacity: 1});
			$(".names p").animate({opacity: 1});
		}
	});
});