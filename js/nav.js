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
})