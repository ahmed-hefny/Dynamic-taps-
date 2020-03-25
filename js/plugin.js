$(document).ready(function(){
    $("ul li a").click (function(){
        $(".desc-content").fadeOut();
        $(this).addClass("active").parent()
        .siblings()
        .find("a")
        .removeClass("active");
    })
    $('.first-content').click(function(){
       $(".content1").fadeIn();
    });

    $('.second-content').click(function(){
        $(".content2").fadeIn();
    });

     $('.third-content').click(function(){
        $(".content3").fadeIn();
    });

}) // don't type anything after that