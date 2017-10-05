(function($){

	$.fn.shuffle = function() {

		var allElems = this.get(),
			getRandom = function(max) {
				return Math.floor(Math.random() * max);
			},
			shuffled = $.map(allElems, function(){
				var random = getRandom(allElems.length),
					randEl = $(allElems[random]).clone(true)[0];
				allElems.splice(random, 1);
				return randEl;
			});

		this.each(function(i){
			$(this).replaceWith($(shuffled[i]));
		});

		return $(shuffled);

	};

})(jQuery);

$(function(){
   // insert menü into mobile
    var
        $navi = $('#navigation'),
        $logo = $('#header h1 a'),
        $mobileMenu = $('.mobile-menu'),
        $mobileMenuTop = $('.top', $mobileMenu),
        $mobileMenuBottom = $('.bottom', $mobileMenu),

        // Startslider
        slider = function () {
            var
                $slider = $('.full-slider'),
                slickOptions = {
                    dots: false,
                    arrows: false,
                    fade: true,
					autoplay: true,
                    autoplaySpeed: 5500,
					speed: 1220
                },
				maxItems = 5
            ;

            if($slider.length){

            	// Shuffle images
				$slider.find('.slide').shuffle();
				$slider.find('.slide').each(function () {
					if($(this).index() >= maxItems){
						$(this).remove();
					}
				});

				// Init slick
				$slider.slick(slickOptions);
            }
		},

        init = function(){
            $mobileMenuTop.html($logo.html());
            $mobileMenuBottom.html($navi.html());

            slider();
        }
    ;

    init();
});
