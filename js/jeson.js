$(document).ready(function(){
    $('.header__burger').on('click', function(){
        $('.header__burger,.header__menu').toggleClass('active');
    });
    
    $('.team__item:first-child').mousemove(function(){
			$('.team__button ul li:first-child').css({'background': '#3949ab'});
			$('.team__item:first-child').mouseout(function(){
				$('.team__button ul li:first-child').css({'background': '#00897b'});
			});
		});

		$('.team__item:nth-child(2)').mousemove(function(){
			$('.team__button ul li:nth-child(2)').css({'background': '#3949ab'});
			$('.team__item:nth-child(2)').mouseout(function(){
				$('.team__button ul li:nth-child(2)').css({'background': '#00897b'});
			});
		});

		$('.team__item:last-child').mousemove(function(){
			$('.team__button ul li:last-child').css({'background': '#3949ab'});
			$('.team__item:last-child').mouseout(function(){
				$('.team__button ul li:last-child').css({'background': '#00897b'});
			});
		});

});



/*$(document).ready(function(){
    $('.slider').slick({
        arrow:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed: 1000,
        easing:'ease',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        waitForAnimate:false,
        centerMode:false,
        variableWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        
    });
});
*/



