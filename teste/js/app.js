// Menu mobile
(function( $, window ) {
	$.fn.mobileMenu = function( options ) {
		
		// Opções	
		var settings = $.extend({
				breakpoint: 768,
				top: 100,
				color: '#654EA3',
				background: 'whitesmoke'
		}, options );
		
		var mobileWidth = settings.breakpoint,
				color = settings.color,
				background = settings.background,
				hambugerActive = false,
				hamburger = '<a id="mobile-icon"></a>',
				menu = $(this);
		
		var styles = '<style>\
						#mobile-menu { background-color: ' + background + '; top: ' + settings.top + 'px; }\
						#mobile-menu li { border-color: ' + color + '; }\
						#mobile-menu li:last-of-type { border-color: ' + color + '; }\
						#mobile-menu li a { color: ' + color + '; }\
						#mobile-menu li a:hover { color: ' + background + '; background: ' + color + '; }\
						#mobile-icon::before { background:' + color + '; }\
						#mobile-icon::after { box-shadow: 0 4px 0 0 ' + color + ', 0 -4px 0 0 ' + color + '; }\
						#mobile-icon.active::before, #mobile-icon.active::after { background:' + color + '; }\
					</style>';
	
		var menuFunction = function() {
			var width = $(window).width();
			if (width < mobileWidth) {
				menu.attr('id', 'mobile-menu');
				if(!hambugerActive) {
					hambugerActive = true;
					menu.before(hamburger);
					$('#mobile-menu').append(styles);
				} else {
					return false;
				}
	
			} else if (width > mobileWidth) {
				hambugerActive = false;
				$('#mobile-icon').remove();
				$('#mobile-menu style').remove();
				menu.attr('id', '');
			}
	
			$('#mobile-icon').on('click touchstart', function(e) {
				e.preventDefault();
				$('#mobile-icon').toggleClass('active');
				menu.toggleClass('active');
			});
		}
		
		menuFunction();
		$(window).resize(menuFunction);
	};
	}( jQuery, window ));

	// Atingir menu
	$('nav ul').mobileMenu({
		breakpoint: 952,
		top: 100,
		background: "whitesmoke",
		color: "#654EA3"
	});




//Animação Scroll      
        $('nav li a').click(function(e){
          e.preventDefault();
          var id = $(this).attr('href'),
            
              targetOffset = $(id).offset().top;
          $('html, body').animate({
            scrollTop: targetOffset 
          }, 1000);
        });
        
        // Debounce do Lodash
        debounce = function(func, wait, immediate) {
        	var timeout;
        	return function() {
        		var context = this, args = arguments;
        		var later = function() {
        			timeout = null;
        			if (!immediate) func.apply(context, args);
        		};
        		var callNow = immediate && !timeout;
        		clearTimeout(timeout);
        		timeout = setTimeout(later, wait);
        		if (callNow) func.apply(context, args);
        	};
        };
        
        // Animação ao Scroll
        (function(){
        	var $target = $('.anime'),
        			animationClass = 'anime-start',
        			offset = $(window).height() * 3/4;
        
        	function animeScroll() {
        		var documentTop = $(document).scrollTop();
        
        		$target.each(function(){
        			var itemTop = $(this).offset().top;
        			if (documentTop > itemTop - offset) {
        				$(this).addClass(animationClass);
        			} else {
        				$(this).removeClass(animationClass);
        			}
        		});
        	}
        
        	animeScroll();
        
        	$(document).scroll(debounce(function(){
        		animeScroll();
        	}, 200));
        })();