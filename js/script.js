
// Kiểm tra xem #menu-bars và .navbar có tồn tại không
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    // Xử lý sự kiện khi nhấp vào biểu tượng menu
    menu.onclick = () => {
        console.log('Menu clicked!');

        navbar.classList.toggle('active');
    };
}


var swiper = new Swiper(".review-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});



// Lựa chọn phần tử Swiper
var swiperContainer = document.querySelector('.house-slider'); // Tìm phần tử đầu tiên có lớp 'house-slider'

// Kiểm tra sự tồn tại của phần tử
if (swiperContainer) { // Nếu phần tử tồn tại
    // Khởi tạo Swiper
    var swiper = new Swiper(".house-slider", { // Tạo một instance mới của Swiper cho phần tử 'house-slider'
        spaceBetween: 30, // Đặt khoảng cách giữa các slide là 30 pixel
        centeredSlides: true, // Căn giữa slide hiện tại trong view
        autoplay: { // Bật tính năng tự động phát
            delay: 3500, // Thời gian giữa các slide là 7500 milliseconds (7.5 giây)
            disableOnInteraction: false, // Tiếp tục autoplay khi người dùng tương tác
        },
        pagination: { // Cấu hình cho phần hiển thị phân trang
            el: ".swiper-pagination", // Chỉ định phần tử cho phân trang
            clickable: true, // Cho phép nhấp vào các điểm phân trang
        },
        loop: true, // Cho phép slider quay vòng
    });
}




window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');

}


// Khởi tạo giá trị số lượng ban đầu
let quantity = 1;
const unitPrice = 99000; // Đặt giá đơn vị

// Lấy các phần tử HTML
const quantityDisplay = document.getElementById('quantity');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const priceDisplay = document.getElementById('price'); // Lấy giá hiển thị
const totalPriceDisplay = document.getElementById('total-price'); // Lấy tổng giá hiển thị

// Hàm cập nhật hiển thị số lượng
function updateQuantity() {
    quantityDisplay.textContent = quantity;

    // Tính toán giá dựa trên số lượng
    const totalPrice = unitPrice * quantity; // Tính tổng giá
    const shippingFee = 0; // Phí vận chuyển
    const finalTotal = totalPrice + shippingFee; // Tổng tiền bao gồm phí vận chuyển

    // Cập nhật hiển thị
    if (quantity === 0) {
        priceDisplay.innerHTML = '<button id="remove-button" class="remove-button">Remove</button>'; // Thay đổi thành nút 'Remove'
        document.getElementById('remove-button').addEventListener('click', removeItem); // Thêm sự kiện cho nút
        totalPriceDisplay.textContent = '0'; // Đặt tạm tính về 0
    } else {
        priceDisplay.textContent = totalPrice.toLocaleString(); // Hiển thị giá với dấu phân cách ngàn
        totalPriceDisplay.textContent = finalTotal.toLocaleString(); // Cập nhật tổng tạm tính
    }
}

// Hàm để xử lý việc xóa món hàng
function removeItem() {
    alert("Món hàng đã được xóa!"); // Thực hiện hành động xóa
    quantity = 0; // Đặt lại số lượng về 0
    updateQuantity(); // Cập nhật giao diện
}

// Sự kiện khi bấm nút trừ
decreaseButton.addEventListener('click', function () {
    if (quantity > 0) { // Đảm bảo số lượng không nhỏ hơn 0
        quantity--;
        updateQuantity();
    }
});

// Sự kiện khi bấm nút cộng
increaseButton.addEventListener('click', function () {
    if (quantity < 30) { // Đảm bảo số lượng không lớn hơn 10
        quantity++;
        updateQuantity();
    }
});

// Hiển thị số lượng ban đầu
updateQuantity();
