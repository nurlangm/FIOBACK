$(document).ready(function () {
    let myCart = document.querySelectorAll(".myCart")
    myCart.forEach(mCart => {
        mCart.onclick = function () {
            let dataId = mCart.getAttribute("data-id")
            myCart.forEach(mc => {
                mc.classList.remove("tabActive")
            })
            let tab = document.getElementById(dataId)

            let tabs = document.querySelectorAll(".tab")
            tabs.forEach(t => {
                t.classList.add("d-none")
            })
            mCart.classList.add("tabActive")
            tab.classList.remove("d-none")
        }
    })

    let myCartRight = document.querySelectorAll(".myCartRight")
    myCartRight.forEach(mCartRight => {
        mCartRight.onclick = function () {
            let dataId = mCartRight.getAttribute("data-id")
            myCartRight.forEach(mcRight => {
                mcRight.classList.remove("tabActiveRight")
            })
            let tabRight = document.getElementById(dataId)
            let tabsRight = document.querySelectorAll(".tabRight")
            tabsRight.forEach(tRight => {
                tRight.classList.add("d-none")
            })
            mCartRight.classList.add("tabActiveRight")
            tabRight.classList.remove("d-none")
        }
    })
    let myCartCenter = document.querySelectorAll(".myCartCenter")
    myCartCenter.forEach(mCart => {
        mCart.onclick = function () {
            let dataId = mCart.getAttribute("data-id")
            myCartCenter.forEach(mc => {
                mc.classList.remove("tabActiveCenter")
            })
            let tab = document.getElementById(dataId)

            let tabs = document.querySelectorAll(".tabCenter")
            tabs.forEach(t => {
                t.classList.add("d-none")
            })
            mCart.classList.add("tabActiveCenter")
            tab.classList.remove("d-none")
        }
    })

    let myCartBottom = document.querySelectorAll(".myCartBottom")
    myCartBottom.forEach(mCart => {
        mCart.onclick = function () {
            let dataId = mCart.getAttribute("data-id")
            myCartBottom.forEach(mc => {
                mc.classList.remove("tabActiveBottom")
            })
            let tab = document.getElementById(dataId)

            let tabs = document.querySelectorAll(".tabBottom")
            tabs.forEach(t => {
                t.classList.add("d-none")
            })
            mCart.classList.add("tabActiveBottom")
            tab.classList.remove("d-none")
        }
    })
})