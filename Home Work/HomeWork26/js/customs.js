
jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	let slid = jQuery('#carousel-client');
		
	slid.owlCarousel({
		items: 7,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: false,
		mouseDrag: true,
		margin: 0,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 2,
				dots: false,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{ 
				items: 3,
				mouseDrag: true
			},
			767:{
				items: 5,
				mouseDrag: true
			},
			991:{
				items: 7,
				mouseDrag: true
			},
			1099:{
				items: 7,
				mouseDrag: true
			}
		}
	});


		// BURGER
		jQuery('.header__burger').click(function(){
			jQuery('.header').toggleClass('open-menu');
			jQuery('.header__burger-svg').toggleClass('active');
			jQuery('.header__menu').toggleClass('open-menu');
		});
	
		// BUTTON-UP
		let button = jQuery('#button-up');	
		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop() > 300) {
				button.addClass('show');
			} else {
				button.removeClass('show');
			}
		});	 
		button.on('click', function(){
			jQuery('body, html').animate({
		scrollTop: 0
		}, 500);
		return false;
		});


		// SPOILER
			jQuery('.footer__title').click(function(event) {
				if (jQuery('.row').hasClass('footer__spoiler-one')) {
					jQuery('.footer__title').not(jQuery(this)).removeClass('active');
					jQuery('.footer__spoiler').not(jQuery(this).next()).slideUp(300).addClass('active');
				}
				if (jQuery('.footer__title').hasClass('active')) {
					jQuery('.footer__logo').removeClass('hide').slideDown(300);
				} else {
					jQuery('.footer__logo').addClass('hide').slideUp(300);
				}
				jQuery(this).toggleClass('active').next().slideToggle(300);
				jQuery('.footer__spoiler').toggleClass('active');
			});


			// Спойлер сохраняет состоянии при изменениях разрешения экрана
			jQuery(window).resize(function() {
					if (jQuery(window).width() >= '767'){
						jQuery('.footer__logo').addClass('full');
						jQuery('.footer__spoiler').addClass('full');
						jQuery('.footer__logo').removeClass('min');
						jQuery('.footer__spoiler').removeClass('min');

					}
					else {
						jQuery('.footer__logo').addClass('min');
						jQuery('.footer__spoiler').addClass('min');
						jQuery('.footer__logo').removeClass('full');
						jQuery('.footer__spoiler').removeClass('full');
					}
					jQuery('.footer__logo.full').css('display', 'block'); 
					jQuery('.footer__spoiler.full').css('display', 'block');
					jQuery('.footer__spoiler.min').css('display', 'none');
					jQuery('.footer__spoiler.min.active').css('display', 'block');
				});




			// Спойлер сворачивается при разрешении больше 767
			// jQuery(window).resize(function() {
			// 	if (jQuery(window).width() >= '767'){
			// 		jQuery('.footer__logo').addClass('full');
			// 		jQuery('.footer__spoiler').addClass('full');
			// 		jQuery('.footer__logo').removeClass('min');
			// 		jQuery('.footer__spoiler').removeClass('min');
			// 		jQuery('.footer__title').removeClass('active');
			// 		jQuery('.footer__spoiler').removeClass('active');
			// 		jQuery('.footer__logo').removeClass('hide');

			// 	}
			// 	else {
			// 		jQuery('.footer__logo').addClass('min');
			// 		jQuery('.footer__spoiler').addClass('min');
			// 		jQuery('.footer__logo').removeClass('full');
			// 		jQuery('.footer__spoiler').removeClass('full');
			// 	}
			// 	jQuery('.footer__logo.full').css('display', 'block'); 
			// 	jQuery('.footer__spoiler.full').css('display', 'block');
			// 	jQuery('.footer__spoiler.min').css('display', 'none');
			// 	jQuery('.footer__spoiler.min.active').css('display', 'block');
			// });


	});