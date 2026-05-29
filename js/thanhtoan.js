const product =
JSON.parse(
    localStorage.getItem("paymentProduct")
);

/* KIỂM TRA */
if(product){

    document.getElementById("payment-image")
    .src = product.image;

    document.getElementById("payment-name")
    .innerHTML = product.name;

    document.getElementById("payment-price")
    .innerHTML = product.price;

    document.getElementById("payment-total")
    .innerHTML = product.price;

}