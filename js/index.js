$(document).ready(function(){
    $("#enter").on("click", function(){
        let target = $($(this).attr('href'));
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 600);
    });
});