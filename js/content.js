$(document).ready(function(){
    let showNav = function(){
        if($(window).scrollTop() > 100){
            $('.navbar').css('background', "#37B271");
            $('.btn').css('transform', 'scale(1)');
        }else{
            $('.navbar').css('background', "rgba(0, 0, 0, 0)");
            $('.btn').css('transform', 'scale(0)');
        }
    }

    $(window).scroll(showNav);
    

    $(".btn").on('click', function(){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
});