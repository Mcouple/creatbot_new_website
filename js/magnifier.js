/**
 * 图片放大镜
 */

$(function($) {
    $.fn.magnifier = function(attributes) {

        var $element = this;
        if (!$element.is("img")) {
            console.log("不是img元素");
            return;
        }

        var $IMAGE_URL = $element.attr("src");
        var NATIVE_IMG = new Image();
        NATIVE_IMG.src = $element.attr("src");

        // 默认配置
        var defaults = {
            round: true,
            width: 200,
            height: 200,
            background: "#FFF",
            shadow: "0 8px 17px 0 rgba(0, 0, 0, 0.2)",
            border: "6px solid #FFF",
            cursor: true,
            zIndex: 999999,
            scale: 1,
            customClasses: ""
        }

        var $options = $.extend(defaults, attributes);

        $element.on('dragstart', function(e) { e.preventDefault(); });
        $element.css("cursor", $options.cursor ? "crosshair" : "none");

        var lens = document.createElement("div");
        lens.id = "BlowupLens";
        $("body").append(lens);

        $blowupLens = $("#BlowupLens");

        $blowupLens.css({
            "position": "absolute",
            "display": "none",
            "pointer-events": "none",
            "zIndex": $options.zIndex,
            "width": $options.width,
            "height": $options.height,
            "border": $options.border,
            "background": $options.background,
            "border-radius": $options.round ? $options.round : "none",
            "box-shadow": $options.shadow,
            "background-repeat": "no-repeat",
        });

        $blowupLens.addClass($options.customClasses);

        $element.mouseenter(function() {
            $blowupLens.css("display", "block");
        })

        $element.mousemove(function(e) {
            var lensX = e.pageX - $options.width / 2;
            var lensY = e.pageY - $options.height / 2;

            var relX = e.pageX - $(this).offset().left;
            var relY = e.pageY - $(this).offset().top;

            var zoomX = -Math.floor(relX / $element.width() * (NATIVE_IMG.width * $options.scale) - $options.width / 2);
            var zoomY = -Math.floor(relY / $element.height() * (NATIVE_IMG.height * $options.scale) - $options.height / 2);

            var backPos = zoomX + "px " + zoomY + "px";
            var backgroundSize = NATIVE_IMG.width * $options.scale + "px " + NATIVE_IMG.height * $options.scale + "px";

            $blowupLens.css({
                left: lensX,
                top: lensY,
                "background-image": "url(" + encodeURI($IMAGE_URL) + ")",
                "background-size": backgroundSize,
                "background-position": backPos
            });
        })

        $element.mouseleave(function() {
            $blowupLens.css("display", "none");
        });
    }
})