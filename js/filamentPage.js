$(document).ready(function() {
    //导航材料实现点击事件one
    let filamentsOne = $(".filament_li_one");
    let filamentsLenOne = filamentsOne.length
    for (let i = 0; i < filamentsLenOne; i++) {
        $(filamentsOne[i]).click(function() {
            $($(".video_t_ul_one>li")[i]).click()
        })
    }
    let lenOne = $(".transX_one").length,
        keyOne = 99.5;
    for (let i = 0; i < lenOne; i++) {
        $($(".video_t_ul_one>li")[i]).click(function(e) {
            e.preventDefault();
            $($(".video_t_ul_one>li")).removeClass("line_active");
            $($(".video_t_ul_one>li")[i]).addClass("line_active");
            keyOne *= -i;
            keyOne += "vw"
            $($(".transX_one")).css("transform", "translate(" + keyOne + ",0px)")
            $($(".video_main_left_one")[i]).css("transform", "scale(1.0)")
            keyOne = 99.5
        });
    }

    //导航材料实现点击事件two
    let filamentsTwo = $(".filament_li_two");
    let filamentsLenTwo = filamentsTwo.length

    for (let i = 0; i < filamentsLenTwo; i++) {
        $(filamentsTwo[i]).click(function() {
            $($(".video_t_ul_two>li")[i]).click()
        })
    }
    let lenTwo = $(".transX_two").length,
        keyTwo = 99.5;
    for (let i = 0; i < lenTwo; i++) {
        $($(".video_t_ul_two>li")[i]).click(function(e) {
            e.preventDefault();
            $($(".video_t_ul_two>li")).removeClass("line_active");
            $($(".video_t_ul_two>li")[i]).addClass("line_active");
            keyTwo *= -i;
            keyTwo += "vw"
            $($(".transX_two")).css("transform", "translate(" + keyTwo + ",0px)")
            $($(".video_main_left_two")[i]).css("transform", "scale(1.0)")
            keyTwo = 99.5
        });
    }

    //导航材料实现点击事件three
    let filamentsThree = $(".filament_li_three");
    let filamentsLenThree = filamentsThree.length

    for (let i = 0; i < filamentsLenThree; i++) {
        $(filamentsThree[i]).click(function() {
            $($(".video_t_ul_three>li")[i]).click()
        })
    }
    let lenThree = $(".transX_three").length,
        keyThree = 99.5;
    for (let i = 0; i < lenThree; i++) {
        $($(".video_t_ul_three>li")[i]).click(function(e) {
            e.preventDefault();
            $($(".video_t_ul_three>li")).removeClass("line_active");
            $($(".video_t_ul_three>li")[i]).addClass("line_active");
            keyThree *= -i;
            keyThree += "vw"
            $($(".transX_three")).css("transform", "translate(" + keyThree + ",0px)")
            $($(".video_main_left_three")[i]).css("transform", "scale(1.0)")
            keyThree = 99.5
        });
    }

    //导航材料实现点击事件four
    let filamentsFour = $(".filament_li_four");
    let filamentsLenFour = filamentsFour.length

    for (let i = 0; i < filamentsLenFour; i++) {
        $(filamentsFour[i]).click(function() {
            $($(".video_t_ul_four>li")[i]).click()
        })
    }
    let lenFour = $(".transX_four").length,
        keyFour = 99.5;
    for (let i = 0; i < lenFour; i++) {
        $($(".video_t_ul_four>li")[i]).click(function(e) {
            e.preventDefault();
            $($(".video_t_ul_four>li")).removeClass("line_active");
            $($(".video_t_ul_four>li")[i]).addClass("line_active");
            keyFour *= -i;
            keyFour += "vw"
            $($(".transX_four")).css("transform", "translate(" + keyFour + ",0px)")
            $($(".video_main_left_four")[i]).css("transform", "scale(1.0)")
            keyFour = 99.5
        });
    }
})