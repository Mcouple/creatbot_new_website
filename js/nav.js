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
        if ($(window).scrollTop() > 20) {
            $("#container_nav").addClass("f_active")
            $(".nav_t").addClass("s")
            $("#container_nav").css("height", "60px")
            $("#nav_navbar").css("top", "-22px")
            $(".p_ul").children("li").css("paddingBottom", "0px")
            $(".flod_container").css("top", "83px")
            $(".nav_svg").css("marginTop", "0.1rem")
        } else {
            $("#container_nav").removeClass("f_active")
            $(".nav_t").removeClass("s")
            $("#nav_navbar").css("top", "0px")
            $(".p_ul").children("li").css("paddingBottom", "11px")
            $(".flod_container").css("top", "95px")
            $(".nav_svg").css("marginTop", "-1rem")
            $("#container_nav").css("height", "100px")
        }
    });

    let num = 0;
    $(".navbar_text_a").click(function(e) {
        e.preventDefault();
        if (num == 0) {
            $(".nav_bar_change").css("visibility", "visible");
            ++num;
            return
        }
        if (num == 1) {
            $(".nav_bar_change").css("visibility", "hidden");
            num = 0
        }
    });
})