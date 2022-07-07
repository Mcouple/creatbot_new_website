function setEcharts(dom, title, data = [], color) {
    var key = true,
        echartWidth = 278,
        echartHeight = 228;
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        key = false;
        echartWidth = 180;
        echartHeight = 196;

    }
    var resizeContainer = function () {
        dom.style.width = window.innerWidth + "px";
        dom.style.height = window.innerHeight / 2.2 + "px";
    }
    resizeContainer()
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: title + "材料表现",
            top: "2%",
            left: "10%"
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(255,255,255,0.9)',
            textStyle: {
                color: "black",
            }
        },
        series: [{
            name: title,
            type: 'pie',
            radius: [36, 150],
            center: ['52%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "rgb(255,255,255)"
            },
            label: {
                fontWeight: 'bold'
            },
            labelLine: {
                show: key,
                length: 8,
                length2: 12
            },
            data,
        },
        {
            name: '内圆',
            type: 'pie',
            labelLine: {
                show: false,
            },
            radius: ['15%', '0%'], //边框大小
            center: ['52%', '50%'], //边框位置
            tooltip: {
                show: false
            },
            silent: true,
            labelLayout: function () {
                return {
                    x: myChart.getWidth() - echartWidth, //label字体平移
                    y: myChart.getHeight() - echartHeight,
                };
            },
            label: {
                fontSize: 20,
                fontWeight: "bolder"
            },
            data: [{
                value: 1,
                name: title,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)', //背景颜色
                    }
                }
            }]
        },
        ],
        color
    };

    option && myChart.setOption(option);
    return myChart
}
