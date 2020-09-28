/*
main.js v1.0
Author: Sergey Kushnir
(c) 2012-2015 IT DEV GROUP
http://it-devgroup.com
*/

function mainSliderImg() {
	$('.main-slide').each(function(){
		var attrImg = $(this).find('img').attr('src');
		$(this).css('background-image','url('+attrImg+')');
	});			
}

$(document).ready(function(){

	mainSliderImg();

	$('.js_main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		draggable: true,
		autoplay: false,
		autoplaySpeed: 3000,
	});

	$('.js_menu').slicknav();

	$('.main').css({'min-height': $(window).outerHeight()-$('.header').outerHeight()-$('.color-strip').outerHeight()-$('.menu-wrap').outerHeight()-$('.footer-wrap').outerHeight()})
});
