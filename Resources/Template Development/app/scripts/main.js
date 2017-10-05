
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
                }
            ;

            if($slider.length){
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
