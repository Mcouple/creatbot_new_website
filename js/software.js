$(document).ready(function() {
    //软件页面视频轮播
    let filaments = $(".filament_li");
    let filamentsLen = filaments.length

    for (let i = 0; i < filamentsLen; i++) {
        $(filaments[i]).click(function() {
            $($(".video_t_ul>li")[i]).click()
        })
    }
    let len = $(".transX").length,
        key = 100;
    for (let i = 0; i < len; i++) {
        $($(".video_t_ul>li")[i]).click(function(e) {
            e.preventDefault();
            $($(".video_t_ul>li")).removeClass("line_active");
            $($(".video_t_ul>li")[i]).addClass("line_active");
            key *= -i;
            key += "vw"
            $($(".transX")).css("transform", "translate(" + key + ",0px)")
            $($(".video_main_left")[i]).css("transform", "scale(1.0)")
            key = 100
        });
    }
})