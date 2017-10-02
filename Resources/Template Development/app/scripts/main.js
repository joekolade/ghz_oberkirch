
$(function(){
   // insert menü into mobile
    var
        $navi = $('#navigation'),
        $logo = $('#header h1 a'),
        $mobileMenu = $('.mobile-menu'),
        $mobileMenuTop = $('.top', $mobileMenu),
        $mobileMenuBottom = $('.bottom', $mobileMenu),
        init = function(){
            $mobileMenuTop.html($logo.html());
            $mobileMenuBottom.html($navi.html());
        }
    ;

    init();
});
