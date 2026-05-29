const products = {

    nguoithay: {
        name: "Người thầy",
        image: "images/sachnguoithay.png",
        supplier: "NXB Kim Đồng",
        author: "Nguyễn Nhật Ánh",
        publisher: "Kim Đồng",
        cover: "Bìa mềm",
        price: "240.000đ"
    },

    dieunhaymoonwalk: {
        name: "Điệu nhảy Moon Walk",
        image: "images/sachdieunhay.png",
        supplier: "Nhà Xuất Bản Kim Đồng",
        author: "Michael Jackson",
        publisher: "Kim Đồng",
        cover: "Bìa mềm",
        price: "100.000đ"
    },

    hodiepvakinhngu: {
        name: "Hồ điệp và kình ngư",
        image: "images/sachhodiep.png",
        supplier: "Đinh Tị",
        author: "Tuế Kiến",
        publisher: "Văn Học",
        cover: "Bìa mềm",
        price: "110.000đ"
    },

    atlat: {
        name: "Atlat Địa Lí Việt Nam",
        image: "images/sachatlat.png",
        supplier: "NXB Giáo Dục",
        author: "Bộ GD",
        publisher: "NXB Giáo Dục",
        cover: "Bìa mềm",
        price: "24.000đ"
    },
    dandadan: {
        name: "Dan Da Dan - Tập 3",
        image: "images/sachdandadan.png",
        supplier: "Nhà Xuất Bản Kim Đồng",
        author: "Yukinobu Tatsu",
        publisher: "Kim Đồng",
        cover: "Bìa mềm",
        price: "40.000đ"
    },
    luffy: {
        name: "One Piece - Tập 110",
        image: "images/sachonpice.png",
        supplier: "Nhà Xuất Bản Kim Đồng",
        author: "Eiichiro Oda",
        publisher: "Kim Đồng",
        cover: "Bìa mềm",
        price: "30.000đ"
    },
    taykhong: {
        name: "Tay Không Gây Dựng Cơ Đồ (Tái Bản)",
        image: "images/sachtaykhong.png",
        supplier: "FIRST NEWS",
        author: "Vikrom Kromadit",
        publisher: "Kim Đồng",
        cover: "Bìa mềm",
        price: "75.000đ"
    },
    benxe: {
        name: "Bến Xe (Tái Bản 2020)",
        image: "images/sachbenxe.png",
        supplier: "Đinh Tị",
        author: "Thương Thái Vi",
        publisher: "Kim Đồng",
        cover: "Bìa mềm",
        price: "55.000đ"
    },
    tiengviet: {
        name: "Tiếng Việt 2 - Tập 1",
        image: "images/sachtiengviet.png",
        supplier: "Giáo Dục Việt Nam",
        author: "Nhiều Tác Giả",
        cover: "Bìa mềm",
        price: "20.000đ"
    },
    hoabinh: {
        name: "Hành Trình Vì Hòa Bình",
        image: "images/sachtiengviet.png",
        supplier: "Alpha Books",
        author: "TT Nguyễn Chí Vịnh",
        publisher:"Quân Đội Nhân Dân",
        cover: "Bìa mềm",
        price: "200.000đ"
    },
    chancung: {
        name: "Chân Cứng Đá Mềm",
        image: "images/sachchancung.png",
        supplier: "NXB Tổng Hợp TPHCM",
        author: "Xuân Phượng",
        publisher:"Tổng Hợp Thành Phố Hồ Chí Minh",
        cover: "Bìa mềm",
        price: "150.000đ"
    },


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