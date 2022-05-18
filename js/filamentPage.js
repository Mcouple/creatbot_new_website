$(document).ready(function() {
    //导航耗材跳转事件
    function navFilament(filament, video, transx, videoMain) {
        let filamentsFour = filament;
        let filamentsLenFour = filamentsFour.length

        for (let i = 0; i < filamentsLenFour; i++) {
            $(filamentsFour[i]).click(function() {
                $(video[i]).click()
            })
        }
        let lenFour = transx.length,
            keyFour = 100;
        for (let i = 0; i < lenFour; i++) {
            $(video[i]).click(function(e) {
                e.preventDefault();
                $(video).removeClass("line_active");
                $(video[i]).addClass("line_active");
                keyFour *= -i;
                keyFour += "vw"
                $(transx).css("transform", "translate(" + keyFour + ",0px)")
                $(videoMain[i]).css("transform", "scale(1.0)")
                keyFour = 100
            });
        }
    }
    navFilament($(".filament_li_four"), $(".video_t_ul_four>li"), $(".transX_four"), $(".video_main_left_four"))
    navFilament($(".filament_li_three"), $(".video_t_ul_three>li"), $(".transX_three"), $(".video_main_left_three"))
    navFilament($(".filament_li_two"), $(".video_t_ul_two>li"), $(".transX_two"), $(".video_main_left_two"))
    navFilament($(".filament_li_one"), $(".video_t_ul_one>li"), $(".transX_one"), $(".video_main_left_one"))

    //第二版耗材跳转
    navFilament($(".filament_second_one"), $(".video_t_ul_second_one>li"), $(".video_t_ul_second_one"), $(".video_second_left_one"))
    navFilament($(".filament_second_two"), $(".video_t_ul_second_two>li"), $(".video_t_ul_second_two"), $(".video_second_left_two"))
    navFilament($(".filament_second_three"), $(".video_t_ul_second_three>li"), $(".video_t_ul_second_three"), $(".video_second_left_three"))
    navFilament($(".filament_second_four"), $(".video_t_ul_second_four>li"), $(".video_t_ul_second_four"), $(".video_second_left_four"))
})