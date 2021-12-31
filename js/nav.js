$(document).ready(function() {

    let lis = $("#nav").find("li")
    for (let i = 0; i < lis.length; i++) {
        $(lis[i]).mouseenter(function() {
            $(lis[i]).addClass("nav_active")
            console.log($(lis[i]).find("div"))
            $(lis[i]).find("div").slideDown(100);

            $(lis[i]).mouseleave(function() {
                $(lis[i]).removeClass("nav_active")
                $(lis[i]).find("div").slideUp(100);
            })
        })
    }

    //导航栏加背景颜色
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $("#container_nav").addClass("f_active")
            $(".nav_t").addClass("s")
        } else {
            $("#container_nav").removeClass("f_active")
            $(".nav_t").removeClass("s")
        }
    });



})