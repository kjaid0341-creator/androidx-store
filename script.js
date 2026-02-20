const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(toggle){
    toggle.addEventListener("click", ()=>{
        nav.classList.toggle("active");
    });
}

function addToCart(name, price){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}


function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    if(!container) return;

    container.innerHTML="";
    let total=0;

    cart.forEach(item=>{
        total+=item.price;
        container.innerHTML+=`
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </div>`;
    });

    totalElement.innerText=total;
}

function paymentSuccess(e){
    e.preventDefault();
    alert("Payment Successful! 🎉");
    localStorage.removeItem("cart");
    window.location.href="index.html";
}

displayCart();