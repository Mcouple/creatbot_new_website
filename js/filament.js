$(document).ready(function() {
    let arr = [
            "../images/filaments/1.jpg",
            "../images/filaments/6.jpg",
            "../images/filaments/5.jpg",
            "../images/filaments/4.jpg",
            "../images/filaments/5.jpg",
            "../images/filaments/6.jpg",
            "../images/filaments/7.jpg",
            "../images/filaments/8.jpg",
            "../images/filaments/1.jpg",
            "../images/filaments/5.jpg",
            "../images/filaments/1.jpg",
            "../images/filaments/6.jpg",
            "../images/filaments/5.jpg",
            "../images/filaments/4.jpg",
            "../images/filaments/5.jpg",
            "../images/filaments/6.jpg",
            "../images/filaments/7.jpg",
            "../images/filaments/8.jpg",
            "../images/filaments/1.jpg",
            "../images/filaments/5.jpg",
            "../images/filaments/6.jpg",
        ],
        lis = [];
    lis.push($(".filament_li"))
    for (const item of lis) {
        for (let i = 0; i < item.length; i++) {
            $(item[i]).mouseenter(function(e) {
                e.preventDefault();
                $(".filament_img").attr("src", arr[i])
            });
        }
    }
})