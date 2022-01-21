$(document).ready(function() {
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
                // $($(".video_main_left:not(.video_main_left:nth-child(i)")).css("transform", "scale(0.1)")
        });
    }
})