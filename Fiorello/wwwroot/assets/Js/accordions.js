$(document).ready(function () {
    $(".title-icon").click(function () {
        $(".accordionDesc").not($(this).next()).slideUp();
        $(this).next().slideToggle();

        if ($(this).hasClass("accordionActive")) {
            $(this).removeClass("accordionActive")
        } else {
            $(this).toggleClass("accordionActive");
        }
        $(this).parent().siblings().children(this).removeClass("accordionActive")
        $(this).parent().siblings().children(this).children(".icon").children("i").removeClass("fa-minus").addClass("fa-plus")
        $(this).children(".icon").children("i").toggleClass("fa-minus").toggleClass("fa-plus")

    })

    $(".title-iconRight").click(function () {
        $(".accordionDescRight").not($(this).next()).slideUp();
        $(this).next().slideToggle();
        if ($(this).hasClass("accordionActiveRight")) {
            $(this).removeClass("accordionActiveRight")
        } else {
            $(this).toggleClass("accordionActiveRight");
        }
        $(this).parent().siblings().children(this).removeClass("accordionActiveRight")
        $(this).parent().siblings().children(this).children(".iconRight").children("i").removeClass("fa-minus").addClass("fa-plus")
        $(this).children(".iconRight").children("i").toggleClass("fa-minus").toggleClass("fa-plus")
    })

    $(".bottomTitle-icon").click(function () {
        $(".bottomAccordionDesc").not($(this).next()).slideUp();
        $(this).next().slideToggle();
        if ($(this).hasClass("bottomAccordionActive")) {
            $(this).removeClass("bottomAccordionActive")
        } else {
            $(this).toggleClass("bottomAccordionActive");
        }
        $(this).parent().siblings().children(".bottomTitle-icon").removeClass("bottomAccordionActive")

        $(this).parent().siblings().children(this).children(".icon").children("i").removeClass("fa-minus").addClass("fa-plus")
        $(this).children(".icon").children("i").toggleClass("fa-minus").toggleClass("fa-plus")
    })

    $(".bottomTitle-iconRight").click(function () {
        $(".bottomAccordionDescRight").not($(this).next()).slideUp();
        $(this).next().slideToggle();
        if ($(this).hasClass("bottomAccordionActiveRight")) {
            $(this).removeClass("bottomAccordionActiveRight")
        } else {
            $(this).toggleClass("bottomAccordionActiveRight");
        }
        $(this).parent().siblings().children(".bottomTitle-iconRight").removeClass("bottomAccordionActiveRight")

        $(this).parent().siblings().children(this).children(".iconRight").children("i").removeClass("fa-minus").addClass("fa-plus")
        $(this).children(".iconRight").children("i").toggleClass("fa-minus").toggleClass("fa-plus")
    })
})