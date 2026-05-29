const products = {

    1: {
        name: "Người thầy",
        image: "images/sachnguoithay.png",
        supplier: "NXB Kim Đồng",
        author: "Nguyễn Nhật Ánh",
        publisher: "Kim Đồng",
        cover: "Bìa mềm",
        price: "240.000đ"
    },

    2: {
        name: "Điệu nhảy Moon Walk",
        image: "images/sachdieunhay.png",
        supplier: "NXB Trẻ",
        author: "Michael Jackson",
        publisher: "NXB Trẻ",
        cover: "Bìa mềm",
        price: "100.000đ"
    },

    3: {
        name: "Hồ điệp và kình ngư",
        image: "images/sachhodiep.png",
        supplier: "NXB Văn Học",
        author: "Unknown",
        publisher: "NXB Văn Học",
        cover: "Bìa cứng",
        price: "110.000đ"
    },

    4: {
        name: "Atlat Địa Lí Việt Nam",
        image: "images/sachatlat.png",
        supplier: "NXB Giáo Dục",
        author: "Bộ GD",
        publisher: "NXB Giáo Dục",
        cover: "Bìa mềm",
        price: "24.000đ"
    }

};

/* LẤY ID */
const params =
new URLSearchParams(window.location.search);

const id = params.get("id");

/* PRODUCT */
const product = products[id];

/* KIỂM TRA */
if(product){

    document.getElementById("product-title")
    .innerHTML = product.name;

    document.getElementById("breadcrumb-name")
    .innerHTML = product.name;

    document.getElementById("product-image")
    .src = product.image;

    document.getElementById("product-supplier")
    .innerHTML = product.supplier;

    document.getElementById("product-author")
    .innerHTML = product.author;

    document.getElementById("product-publisher")
    .innerHTML = product.publisher;

    document.getElementById("product-cover")
    .innerHTML = product.cover;

    document.getElementById("product-price")
    .innerHTML = product.price;

}


/* THANH TOÁN */
document.getElementById("buy-link")
.onclick = function(){

    localStorage.setItem(
        "paymentProduct",
        JSON.stringify(product)
    );

    window.location.href =
    "thanhtoan.html";

}

/* GIỎ HÀNG */
function addToCart(){

    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );



    /* CHUYỂN TRANG */
    window.location.href =
    "giohang.html";

}