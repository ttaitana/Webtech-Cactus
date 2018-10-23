$(document).ready(function(){

    let nav = $(".navbar a.dot");

    let smooth_scroll = function (){
        let target = $($(this).attr('href'));
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 600);

    }


    let findNav = function(){
        let screen = $(window).scrollTop();
        $("section").each(function(){
            let id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(screen >= offset && screen <= offset+height){
                nav.removeClass('active');
                $(".navbar").find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    }

    $(document).on("mousemove", function(event){
        // console.log(event.pageX);
        if (event.pageX > ($(window).width() * 0.85)){
            // console.log("Show");
            $(".navbar").css("right", "0%");
        }else{
            $(".navbar").css("right", "-20%");
        }
    });
    
    $(nav).hover(
        function(){
            $(this).addClass('hover');
        }, function(){
            $(this).removeClass('hover');   
        }
    );

    $("#enter").on("click", smooth_scroll);

    $(nav).on("click", smooth_scroll);

    $(window).on('scroll', findNav);



    // Card zone
    $(".card").hover(
        function(){
            $(this).css('height', '40vh');
            $(this).css('width', '20%');
            
        }, function(){
            $(this).css('height', '7vh');   
            $(this).css('width', '15%');
            
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
});
