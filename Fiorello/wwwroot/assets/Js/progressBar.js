$(document).ready(function () {
    $({
        countNum: $(".allBars .bar1 .firstBar p").html()
    }).animate({
        countNum: 95
    }, {
        duration: 3200,
        easing: "linear",
        step: function () {
            $(".allBars .bar1 .firstBar p").html(Math.floor(this.countNum) + "%");
            $(".allBars .bar1 .firstBar .barContent .loadingBar").css("width", Math.floor(this.countNum) + "%");
        },
        complete: function () {
            $(".bar1 .firstBar p").html(this.countNum + "%");
            $(".allBars .bar1 .firstBar .barContent .loadingBar").css("width", this.countNum + "%");
        }
    });

    $({
        countNum: $(".allBars .bar2 .secondBar p").html()
    }).animate({
        countNum: 80
    }, {
        duration: 3200,
        easing: "linear",
        step: function () {
            $(".allBars .bar2 .secondBar p").html(Math.floor(this.countNum) + "%");
            $(".allBars .bar2 .secondBar .barContent .loadingBar").css("width", Math.floor(this.countNum) + "%");
        },
        complete: function () {
            $(".bar2 .secondBar p").html(this.countNum + "%");
            $(".allBars .bar2 .secondBar .barContent .loadingBar").css("width", this.countNum + "%");
        }
    });
    $({
        countNum: $(".allBars .bar3 .thirdBar p").html()
    }).animate({
        countNum: 55
    }, {
        duration: 3200,
        easing: "linear",
        step: function () {
            $(".allBars .bar3 .thirdBar p").html(Math.floor(this.countNum) + "%");
            $(".allBars .bar3 .thirdBar .barContent .loadingBar").css("width", Math.floor(this.countNum) + "%");
        },
        complete: function () {
            $(".bar3 .thirdBar p").html(this.countNum + "%");
            $(".allBars .bar3 .thirdBar .barContent .loadingBar").css("width", this.countNum + "%");
        }
    });
})
$(document).ready(function () {
    $({
        countNum: $(".allBarsFooter .bar1Footer .firstBar p").html()
    }).animate({
        countNum: 95
    }, {
        duration: 3000,
        easing: "linear",
        step: function () {
            $(".allBarsFooter .bar1Footer .firstBar p").html(Math.floor(this.countNum) + "%");
            $(".allBarsFooter .bar1Footer .firstBar .barContent .loadingBar").css("width", Math.floor(this.countNum) + "%");
        },
        complete: function () {
            $(".bar1Footer .firstBar p").html(this.countNum + "%");
            $(".allBarsFooter .bar1Footer .firstBar .barContent .loadingBar").css("width", this.countNum + "%");
        }
    });

    $({
        countNum: $(".allBarsFooter .bar2Footer .secondBar p").html()
    }).animate({
        countNum: 80
    }, {
        duration: 3000,
        easing: "linear",
        step: function () {
            $(".allBarsFooter .bar2Footer .secondBar p").html(Math.floor(this.countNum) + "%");
            $(".allBarsFooter .bar2Footer .secondBar .barContent .loadingBar").css("width", Math.floor(this.countNum) + "%");
        },
        complete: function () {
            $(".bar2Footer .secondBar p").html(this.countNum + "%");
            $(".allBarsFooter .bar2Footer .secondBar .barContent .loadingBar").css("width", this.countNum + "%");
        }
    });
    $({
        countNum: $(".allBarsFooter .bar3Footer .thirdBar p").html()
    }).animate({
        countNum: 55
    }, {
        duration: 3000,
        easing: "linear",
        step: function () {
            $(".allBarsFooter .bar3Footer .thirdBar p").html(Math.floor(this.countNum) + "%");
            $(".allBarsFooter .bar3Footer .thirdBar .barContent .loadingBar").css("width", Math.floor(this.countNum) + "%");
        },
        complete: function () {
            $(".bar3Footer .thirdBar p").html(this.countNum + "%");
            $(".allBarsFooter .bar3Footer .thirdBar .barContent .loadingBar").css("width", this.countNum + "%");
        }
    });
})