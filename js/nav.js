$(document).ready(function() {
    var lis = $("li[id='li_main']"),
        divs = $("div[id='nav_bar']");
    for (var i = 0; i < lis.length; i++) {
        (function(j) {
            $(lis[j]).mouseenter(function(e) {
                e.preventDefault();
                $(divs[j]).stop(true).slideDown(150)
                $(lis[j]).addClass("nav_active")


                $(lis[j]).mouseleave(function(e) {
                    e.preventDefault();
                    $(divs[j]).stop(true).slideUp(150)
                    $(lis[j]).removeClass("nav_active")
                })
            })
        })(i)
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