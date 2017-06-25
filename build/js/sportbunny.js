$(function(){

	$('.opinions__menu li').first().addClass('active');
	
	$('.js-opinions li').on('click', function(){
		$('.js-opinions li').removeClass('active');
		$(this).addClass('active');
		var val = $(this).data("item");
		$('.opinions__item').hide();
		$('.opinions__item--' + val).css('display', 'flex');
	});
	
	$('.js-opinions-btn').on('click', function(){
		$(this).hide();
		$('.opinions__more img').show();
	});
	
	$('.opinions__item div img').on('click', function(){
		var val = $(this).data("img");
		$('.opinions__info-item').hide();
		$('.opinions__info-item--' + val).css('display', 'flex');
	});
	
	$('.js-more').on('click', function(){
		$(this).hide();
		$(this).parent().find('.content').css('height', 'auto');
	});

	$(".js-menu a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});	

});
