const cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const cartList =
document.getElementById("cart-list");

const totalPrice =
document.getElementById("total-price");

/* TỔNG */
let total = 0;

/* HIỂN THỊ */
function renderCart(){

    cartList.innerHTML = "";

    total = 0;

    cart.forEach((product,index) => {

        /* CHUYỂN GIÁ */
        const price =
        parseInt(
            product.price.replace(/\./g,"")
            .replace("đ","")
        );

        total += price;

        cartList.innerHTML += `

            <div class="cart-item">

                <img src="${product.image}">

                <div class="cart-info">

                    <h2>${product.name}</h2>

                    <h3>${product.price}</h3>

                </div>

                <button class="delete-btn"
                    onclick="deleteItem(${index})">

                    Xóa

                </button>

            </div>

        `;

    });

    totalPrice.innerHTML =
    total.toLocaleString("vi-VN") + "đ";

}

/* XÓA */
function deleteItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}

renderCart();