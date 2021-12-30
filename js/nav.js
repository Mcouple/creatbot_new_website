$(document).ready(function() {

    let lis = $("#nav").find("li")
    for (let i = 0; i < lis.length; i++) {
        $(lis[i]).mouseenter(function() {
            $(lis[i]).find("a").first().addClass("nav_active")
            $(lis[i]).find("div").show();

            $(lis[i]).mouseleave(function() {
                $(lis[i]).find("a").first().removeClass("nav_active")
                $(lis[i]).find("div").hide();
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

    setInterval(() => {
        if ($(window).scrollTop() > 200) {
            $('.nav_active').append("<style>.nav_active::after{top:12px}</style>");
        } else {
            $('.nav_active').append("<style>.nav_active::after{top:9px}</style>");
        }
    }, 1)

})