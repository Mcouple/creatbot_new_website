$(document).ready(function() {
<<<<<<< HEAD
    var lis = $("li[id='li_main']"),
        divs = $("div[id='nav_bar']");
    for (var i = 0; i < lis.length; i++) {
        (function(j) {
            $(lis[j]).mouseenter(function() {
                $(divs[j]).slideDown(100)
                $(lis[j]).addClass("nav_active")
                $(lis[j]).mouseleave(function() {
                    $(divs[j]).slideUp(100)
                    $(lis[j]).removeClass("nav_active")
                })
            })
        })(i)

=======

    let lis = $("#nav").find("li")
    for (let i = 0; i < lis.length; i++) {
        $(lis[i]).mouseenter(function() {
            $(lis[i]).addClass("nav_active")
            $(lis[i]).find("div").slideDown(100);

            $(lis[i]).mouseleave(function() {
                $(lis[i]).removeClass("nav_active")
                $(lis[i]).find("div").slideUp(100);
            })
        })
>>>>>>> 0daff70e78dc527cb4e5177f3a9613bc4e1b0232
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
<<<<<<< HEAD
=======



>>>>>>> 0daff70e78dc527cb4e5177f3a9613bc4e1b0232
})