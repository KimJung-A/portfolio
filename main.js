// $(window).on("scroll",function(){
//     if( $(window).scrollTop() > 100){
//         $(".navMenu").addClass("navAction");
//     }else {
//         $(".navMenu").removeClass("navAction");
//     }
//
// });




$(".projectSlider").slick({
    // slideToShow:3,
    // centerMode:true,
    // arrows: ,

    prevArrow:$(".prevBtn"),
    nextArrow:$(".nextBtn"),

    dots:true,
    appendDots:$(".dotsWrap"),
    dotsClass:"customDots",
});


// $(".aboutSlider").find("li").slick({
// });

$("#slider").slick({
    autoplay:true,
    arrows:false,
    spaceBetween: 100,
    // slidesToShow:5,
});



function mousemoveEvent() {
    const $cursor = $(".followCursor");
    const $cover = $(".coverBg");

    const mousePos = {
        x: 0, // property
        y: 0,
    };

    $(window).on("mousemove", function (event) {
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;
        $cursor.css({left: mousePos.x, top: mousePos.y});
        $cover.css({transform: `translateX(${mousePos.x}px)`,});
    });
}

mousemoveEvent();
