$(document).ready(function(){    
    resizing();
    $(window).on('resize', resizing);
    // 사이즈별로 잡아주기
    function resizing(){
         var winWidth=$(window).width();
         var winHeight=$(window).height();
        $('body').css('width', winWidth);
        $('nav, header, section, body').css('height', winHeight);
        $('section li').css('height', '300px');
    };
});