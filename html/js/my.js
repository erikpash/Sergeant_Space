$(document).ready(function() {
   $("#row_menu").children("a").on({       //Анимация на ховер разделов на главной
    mouseover:function(event){
    $(this).children('div').children('div').stop(true, true).animate({
        opacity:1
    })
    },
    mouseout:function(event){
    $(this).children('div').children('div').stop(true, true).animate({
        opacity:0.7
    })
    }
});
  

 $(".hamb").on({
    click:function(event){

        $(this).toggleClass("cross");
        $(".menu_right").fadeToggle( "fast");
        $(".right_bar").toggleClass("right_slide");
    }

 });



});