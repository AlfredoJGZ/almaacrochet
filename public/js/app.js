$(document).ready(function() {

    /* BOTONES FLOTANTES DE FILTROS Y CARRITO*/

    // $(".search").on("click", function(){
    //     $(".black-screen").toggle("slow");
    //     if(!$(".side-filters.d-md-none").hasClass("open")){
    //         $(this).addClass("on-press");
    //         $(this).find("button").addClass("text-white");
    //         $(this).addClass("zi-4");
    //         $(".cart-button").removeClass("zi-2");
            
    //         $(".side-filters.d-md-none").addClass("p-2 open");
        
    //     } else if($(".side-filters.d-md-none").hasClass("open")){
    //         $(this).removeClass("on-press");
    //         $(this).find("button").removeClass("text-white");
    //         $(this).removeClass("zi-4");
    //         $(".side-filters.d-md-none").removeClass("open");
    //         setTimeout(()=>{$(".side-filters.d-md-none").removeClass("p-2");} , 400);       
    //     }   
    // });

    // $(".cart-button").on("click", function(){
    //     $(".black-screen").toggle("slow");
    //     if(!$(".cart-list").hasClass("open")){
    //         $(this).addClass("on-press");
    //         $(this).find("button").addClass("text-white");
    //         $(this).addClass("zi-4");
    //         $(".search").removeClass("zi-2");

    //         $(".cart-list").addClass("p-2 open");
        
    //     } else if($(".cart-list").hasClass("open")){
    //         $(this).removeClass("on-press");
    //         $(this).find("button").removeClass("text-white");
    //         $(this).removeClass("zi-4")
    //         $(".cart-list").removeClass("open");
    //      setTimeout(()=>{ $(".cart-list").removeClass("p-2");} , 400);          
    //     }   
    // });

    /* EFECTOS PARA ZOOM DE PRODUCTOS*/

    if($( window ).width() >= 768){
        $('#ex1').zoom();
    }

    $(window).resize(()=>{
        if($( window ).width() >= 768){
            $('#ex1').zoom();
        } else {
            $('#ex1').trigger('zoom.destroy')
        }
    });
    
    
    /* BOTONES PARA CANTIDAD DE PRODUCTO*/

    $(".quantity button").on("click", function(){
        if($(this).hasClass("add")){
            let now = parseInt($(".quantity input").val());
            $(".quantity input").val(now + 1); 
        } else {
            let now = parseInt($(".quantity input").val());
            if(now > 1){
                $(".quantity input").val(now - 1); 
            }
            
        }
    });

});