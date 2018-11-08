$(document).ready(function(){

    let nav = $(".navbar a.dot");

    let smooth_scroll = function (){
        let target = $($(this).attr('href'));
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 600);

    }

    // navbar auto change
    let findNav = function(){
        let screen = $(window).scrollTop();
        $("section").each(function() {
            let id = $(this).attr('id'),
                offset = $(this).offset().top-100,
                height = $(this).height();
            if(screen >= offset && screen <= offset+height){
                nav.removeClass('active');
                $(".navbar").find('[data-scroll="' + id + '"]').addClass('active');   
            }
        });
    }

    let showNav = function(){
        let screen = $(window).scrollTop();
        if(screen < $('#about').offset().top-500){
            $(".navbar").css('transform', 'translateY(-50%) translateX(12em)');
        }else{
            $(".navbar").css('transform', 'translateY(-50%) translateX(0em)')
        }
    }

    $('.navbar').hover(
        function(){
            $(this).css('opacity', '1');
        }, function(){
            $(this).css('opacity', '.5');
        }
    );

    $("#enter").on("click", smooth_scroll);

    $(nav).on("click", smooth_scroll);

    $(window).scroll(showNav);
    $(window).scroll(findNav);



    // Card zone
    $(".card").hover(
        function(){
            $(this).css('height', '40vh');
            $(this).css('width', '20%');
            $(this).css('background', '#B5A08E');

            
        }, function(){
            $(this).css('height', '7vh');   
            $(this).css('width', '15%');
            $(this).css('background', '#D1C9C1');
            
        }
    );

    // money card
    $(".money_btn").on('click', function(){
        if($(this).html() == '1'){
            $("#page1").addClass('btn_active');
            $("#page2").removeClass('btn_active');

            $('.slider').css('transform', 'translateX(0%)')

        }else{
            $("#page1").removeClass('btn_active');
            $("#page2").addClass('btn_active');
            $('.slider').css('transform', 'translateX(-56%)')
            
        }
    });

    // card text show
    $('.box').hover(
        function(){
            $(this).children('img').css('opacity', '.1');
            $(this).children('.box-cover').css('transform', 'translateY(0em)');
        }, function(){
            $(this).children('img').css('opacity', '1');
            $(this).children('.box-cover').css('transform', 'translateY(-30em)')
        }
    )
});
