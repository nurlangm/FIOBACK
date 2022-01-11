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

    
    let plMinus = document.querySelector("#plMinus")
    let plPlus = document.querySelector("#plPlus")
    let plproductCount = document.querySelector("#plproductCount")
    plPlus.addEventListener("click", () => {
        plproductCount.innerText = Number(plproductCount.innerText) + 1;
    })
    plMinus.addEventListener("click", () => {
        if (plproductCount.innerText > 0) {
            plproductCount.innerText = Number(plproductCount.innerText) - 1;
        }
        else{
            alert("Number of the products can't be lower than zero")
        }

    })

})