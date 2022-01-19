$(document).ready(function() {
    let arr = [
            "../images/filaments/PLA.png",
            "../images/filaments/PLA-CF.png",
            "../images/filaments/PETG.png",
            "../images/filaments/TPU95A.png",
            "../images/filaments/PC.png",
            "../images/filaments/TPU.png",
            "../images/filaments/OBC.png",
            "../images/filaments/ABS.png",
            "../images/filaments/ASA.png",
            "../images/filaments/PVDF.png",
            "../images/filaments/UltraPA.png",
            "../images/filaments/UltraPA-CF.png",
            "../images/filaments/UltraPA-GF.png",
            "../images/filaments/PEEK.png",
            "../images/filaments/PEEK-CF.png",
            "../images/filaments/PEEK-GF.png",
            "../images/filaments/PEI1010.png",
            "../images/filaments/PEI9085.png",
            "../images/filaments/PVA.png",
            "../images/filaments/blue.png",
            "../images/filaments/purple.png",
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