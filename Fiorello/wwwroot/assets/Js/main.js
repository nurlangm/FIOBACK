$(document).ready(function () {
    $(".menu-icon i").click(function () {
        $(".menu").css("display", "block")
        $(".menu").addClass("animate__fadeInRight")
        $(".menu").removeClass("animate__fadeOutRight")
    })
    $(".closeX i").click(function () {
        $(".menu").removeClass("animate__fadeInRight")
        $(".menu").addClass("animate__fadeOutRight")
    })
    $(".menuHomeLi a").click(function () {
        $(".menuHome").slideToggle();
        $(".menuHomeLi i").toggleClass("myRotate")
    })

    $(".menuPagesLi a").click(function () {
        $(".menuPages").slideToggle();
        $(".menuPagesLi i").toggleClass("myRotate");
    })
    $(".menuShopLi a").click(function () {
        $(".menuShop").slideToggle();
        $(".menuShopLi i").toggleClass("myRotate");
    })
    $(".pth4").click(function () {
        $(".pt").slideToggle();
        $(".pth4 i").toggleClass("myRotate");
    })
    $(".sph4").click(function () {
        $(".sp").slideToggle();
        $(".sph4 i").toggleClass("myRotate");
    })
    $(".sth4").click(function () {
        $(".st").slideToggle();
        $(".sth4 i").toggleClass("myRotate");
    })
    $(".slh4").click(function () {
        $(".sl").slideToggle();
        $(".slh4 i").toggleClass("myRotate");
    })
    $(".menuPortfolioLi a").click(function () {
        $(".menuPortfolio").slideToggle();
        $(".menuPortfolioLi i").toggleClass("myRotate");
    })
    $(".menuPortfolioLayoutsLi a").click(function () {
        $(".menuPortfolio-inner-layouts").slideToggle();
        $(".menuPortfolioLayoutsLi i").toggleClass("myRotate");
    })
    $(".menuPortfolioSingleLi a").click(function () {
        $(".menuPortfolio-inner-single").slideToggle();
        $(".menuPortfolioSingleLi i").toggleClass("myRotate");
    })
    $(".menuBlogLi a").click(function () {
        $(".menuBlog").slideToggle();
        $(".menuBlogLi i").toggleClass("myRotate");
    })
    $(".menuBlogPostLi a").click(function () {
        $(".menuBlog-inner-post").slideDown();
        $(".menuBlogPostLi i").toggleClass("myRotate");
    })
    $(".menuElementsLi a").click(function (){
        $(".menuElements").slideToggle();
        $(".menuElementsLi i").toggleClass("myRotate");
    })

    ///////////goToTop///////////
    $(window).scroll(function () {
        if (window.scrollY >= 650) {
            $(".goUp").removeClass("d-none")
        }
        if (window.scrollY <= 650) {
            $(".goUp").addClass("d-none")
        }
    })
    $(".goUp").click(function () {
        $(window).scrollTop(0);
    })
    ///////////goToTop////////////

    ////////Basket////////

   $("#stickyHeader").hide()
    $(window).scroll(function () {
        if (window.scrollY >= 300) {
            $("#stickyHeader").show()
            $("#stickyHeader").css({
                "position":"sticky",
                "top":"0px",
                "z-index": "1000000000",
                "background-color":"white"
            })
        }
        if (window.scrollY <= 299) {
           $("#stickyHeader").hide()
        }
    })
})