$(document).ready(function(e) {

    $(window).resize(function(e) {
        if ($(window).width() > 1200) {
            $(".navbar-phone").css("width", "0");
        }

    })

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
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 20) {
            $("#container_nav").addClass("f_active")
            $(".nav_t").addClass("s")
            $("#container_nav").css("height", "60px")
            if ($(window).width() > 1200) {
                $("#nav_navbar").css("top", "-22px")
            } else if ($(window).width() < 1200) {
                $("#nav_navbar").css("top", "-5px")
            }

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

    $(".container-close").click(function() {
        $(".navbar-phone").css("width", "0");
    })
    $(".navbar-toggler").click(function(e) {
        e.preventDefault();
        if (e.clientX < 1200) {
            $(".navbar-phone").css("width", "90vw");
        }
    });


    let navlen = $(".navbar-phone-main").length
    let navs = $(".navbar-phone-main");
    let texts = $(".navbar-phone-text")
    for (let i = 0; i < navlen; i++) {
        $(navs[i]).mouseenter(function(e) {
            $(texts[i]).stop(true).slideDown(200)

            $(navs[i]).mouseleave(function(e) {
                e.preventDefault()
                $(texts[i]).stop(true).slideUp(200)
            })

        })
    }
    //材料页二级导航
    let filaments = $(".navbar-phone-filament");
    let filamentSText = $(".filament-main-text")
    for (let i = 0; i < filaments.length; i++) {
        $(filaments[i]).mouseenter(function() {

            $(filamentSText[i]).css("height", "auto")
            $(filaments[i]).mouseleave(function() {
                $(filamentSText[i]).css("height", "0")
            })
        })
    }

})