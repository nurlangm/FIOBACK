   $(document).ready(function () {


       $('.parallax-window').parallax({
           imageSrc: '../assets/images/parallaxImg.jpg'
       });
       let image = document.getElementById('loop')

       let images = ['../assets/images/h3-slider-background.jpg', '../assets/images/h3-slider-background-3.jpg', '../assets/images/h3-slider-background-2.jpg']

       $(image).css("opacity", "100")

       setInterval(function () {
           let random = Math.floor(Math.random() * 3);
           image.src = images[random]
       }, 3000);
       $(".clickright").click(function () {
           let random = Math.floor(Math.random() * 3);
           image.src = images[random]
       })
       $(".clickleft").click(function () {
           let random = Math.floor(Math.random() * 3);
           image.src = images[random]
       })
       $('.owl-carousel').owlCarousel({
           loop: true,
           margin: 10,
           dots: false,
           nav: true,
           responsive: {
               0: {
                   items: 1
               },
               600: {
                   items: 1
               },
               1000: {
                   items: 1
               }
           }
       })

       $("#productList .title-filter .productTitle #productListCategory").click(function () {
           $("#productList .title-filter .productTitle #dropDownCategory").slideToggle();
       })

       /////productFilter/////


       let types = document.querySelectorAll(".types")
       let products = document.querySelectorAll(".products .product")
       types.forEach(type => {
           type.onclick = function (e) {
               let dataId = type.getAttribute("data-id")
               e.preventDefault();
               let existedProduct = Array.from(document.getElementsByClassName(dataId))
                products.forEach(prod=>{
                    $(prod).css("display","none")
                })
               existedProduct.forEach(existedProduct =>{
                   $(existedProduct).css("display","block")
                   $(".products").css("justify-content","space-around")
               })
           }
       })
   })


   let addToCards = document.querySelectorAll("#productList .products .product .text")
   let products = document.querySelector(".basketProducts")

   addToCards.forEach(addToCard => {
       addToCard.onclick = function () {
           let Id = this.parentNode.parentNode.parentNode.getAttribute("data-id")
           let img = this.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.getAttribute("src")
           let name = this.parentNode.parentNode.parentNode.children[1].innerText;
           let price = this.parentNode.children[1].firstElementChild.innerText

           if (localStorage.getItem("basket") == null) {
               localStorage.setItem("basket", JSON.stringify([]))
           }
           let basket = JSON.parse(localStorage.getItem("basket"))

           let isExcistedProduct = basket.find((b) => b.id == Id);

           if (isExcistedProduct === undefined) {
               let product = {
                   id: Id,
                   image: img,
                   name: name,
                   price: price,
                   count: 1,
               };
               basket.push(product);
               getBasketProductBody(product)

           } else {
               let count = document.getElementById(`${isExcistedProduct.id}`); +
               count.innerHTML++;
               isExcistedProduct.count++;
           }
           localStorage.setItem("basket", JSON.stringify(basket));
           countCalculator();
           totalPrice();
       };
   });
   countCalculator();

   function countCalculator() {
       if (localStorage.getItem("basket") == null) {
           localStorage.setItem("basket", JSON.stringify([]))
       }
       let elementCount = document.querySelector(".basketProductCount")
       let basket = JSON.parse(localStorage.getItem("basket"));
       if (basket.length == null) {
           basket = localStorage.setItem("basket", JSON.stringify([]))
       }
       elementCount.innerHTML = basket.length;
   }
   totalPrice();

   function totalPrice() {
       let basketTotalPrice = document.querySelectorAll(".basketTotalPrice");
       let basket = JSON.parse(localStorage.getItem("basket"));
       let basketTotal = basket.reduce((basketTotal, bt) => {
           return (basketTotal += +bt.price * bt.count);
       }, 0);
       basketTotalPrice.forEach(b => {
           b.innerHTML = basketTotal;
       })
   }
   getProduct();

   function getProduct() {
       let basket = JSON.parse(localStorage.getItem("basket"))
       basket.forEach(b => {
           getBasketProductBody(b);
       })
   }

   function getBasketProductBody(product) {
       products.innerHTML += `<li data-id="${product.id}">
                  <div class="basketImage">
                <img src="${product.image}" alt="">
            </div>
            <div class="name-price">
                <p>${product.name}</p>
                <span id="${product.id}">${product.count}</span><span class="x">x</span>
                <span >${product.price}<span>$</span></span>
            </div>
            <i class="remove fas fa-times" onClick="removeProduct(this)"></i>
        </li>`
   }

   function removeItem(id) {
       let basket = JSON.parse(localStorage.getItem("basket"))
       const newItemsSet = basket.filter(i => i.id !== id)
       localStorage.setItem("basket", JSON.stringify(newItemsSet))

   }

   function removeProduct(pr) {
       removeItem(pr.parentNode.getAttribute("data-id"))
       pr.parentElement.remove();
       countCalculator();
       totalPrice();
   }