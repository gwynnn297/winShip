
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






//bat dau thanh toan

// Khởi tạo giá trị số lượng ban đầu
let quantity = 1;
const unitPrice = 99000; // Đặt giá đơn vị

// Lấy các phần tử HTML
const quantityDisplay = document.getElementById('quantity');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const priceDisplay = document.getElementById('price'); // Lấy giá hiển thị
const totalPriceDisplay = document.getElementById('total-price'); // Lấy tổng giá hiển thị
const finalTotalDisplay = document.getElementById('final-total-pay'); // Hiển thị tổng cộng trong footer

let promoApplied = false; // Biến để theo dõi trạng thái áp dụng mã khuyến mãi
let originalTotal = 0; // Biến để lưu trữ tổng ban đầu

// Hàm cập nhật hiển thị số lượng
function updateQuantity() {
    quantityDisplay.textContent = quantity;

    // Tính toán giá dựa trên số lượng
    const totalPrice = unitPrice * quantity; // Tính tổng giá
    const shippingFee = 29000; // Phí vận chuyển
    const finalTotal = totalPrice + shippingFee; // Tổng tiền bao gồm phí vận chuyển

    // Cập nhật hiển thị
    if (quantity === 0) {
        priceDisplay.innerHTML = '<button id="remove-button" class="remove-button">Remove</button>'; // Thay đổi thành nút 'Remove'
        document.getElementById('remove-button').addEventListener('click', removeItem); // Thêm sự kiện cho nút
        totalPriceDisplay.textContent = '0'; // Đặt tạm tính về 0
    } else {
        priceDisplay.textContent = totalPrice.toLocaleString(); // Hiển thị giá với dấu phân cách ngàn
        totalPriceDisplay.textContent = finalTotal.toLocaleString(); // Cập nhật tổng tạm tính

        // Cập nhật giá trị tổng cộng trong footer
        if (promoApplied) {
            const discount = 7000; // Giảm giá nếu có mã khuyến mãi
            const discountedTotal = finalTotal - discount; // Tính tổng sau khi giảm giá
            finalTotalDisplay.textContent = discountedTotal.toLocaleString(); // Cập nhật tổng cộng
        } else {
            finalTotalDisplay.textContent = finalTotal.toLocaleString(); // Cập nhật tổng cộng
        }

        // Lưu tổng ban đầu
        originalTotal = finalTotal;
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
    if (quantity < 30) { // Đảm bảo số lượng không lớn hơn 30
        quantity++;
        updateQuantity();
    }
});

// Hiển thị số lượng ban đầu
updateQuantity();

document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo mã chỉ chạy sau khi toàn bộ tài liệu HTML đã được tải.
    const promoCodeTextarea = document.getElementById('promo-code'); // Chọn phần tử textarea để nhập mã khuyến mãi
    const applyButton = document.getElementById('apply-button'); // Chọn nút "Apply"
    const applyButton2 = document.getElementById('apply-button2'); // Chọn nút thứ hai (Apply/Remove)
    const promoCodeText = document.getElementById('promo-code-text').innerText; // Lấy nội dung mã khuyến mãi từ một phần tử

    // Thêm sự kiện lắng nghe cho textarea để kiểm tra khi có nhập liệu
    promoCodeTextarea.addEventListener('input', function() {
        // Nếu textarea không trống, thêm lớp 'active' vào nút apply
        if (promoCodeTextarea.value.trim() !== '') {
            applyButton.classList.add('active');
        } else {
            // Nếu textarea trống, loại bỏ lớp 'active' khỏi nút apply
            applyButton.classList.remove('active');
        }
    });

    // Thêm sự kiện lắng nghe cho nút Apply
    applyButton.addEventListener('click', function() {
        // Kiểm tra xem mã khuyến mãi có đúng không
        if (promoCodeTextarea.value.trim() === promoCodeText) {
            promoApplied = true; // Đánh dấu là mã khuyến mãi đã được áp dụng
            updateQuantity(); // Cập nhật lại số lượng và tổng tiền
            alert("Mã khuyến mãi đã được áp dụng!");
        } else {
            alert("Mã khuyến mãi không hợp lệ.");
        }
    });

    // Thêm sự kiện lắng nghe cho nút thứ hai để xử lý sự kiện click
    applyButton2.addEventListener('click', function() {
        // Nếu văn bản của nút là 'APPLY', điền mã khuyến mãi vào textarea và đổi văn bản nút thành 'REMOVE'
        if (applyButton2.innerText === 'APPLY') {
            promoCodeTextarea.value = promoCodeText; // Điền mã khuyến mãi vào textarea
            applyButton.classList.add('active'); // Thêm lớp 'active' vào nút apply
            applyButton2.innerText = 'REMOVE'; // Đổi văn bản của nút thành 'REMOVE'
        } else {
            // Nếu văn bản của nút là 'REMOVE', xóa nội dung textarea và đổi văn bản nút thành 'APPLY'
            promoCodeTextarea.value = ''; // Xóa nội dung của textarea
            applyButton.classList.remove('active'); // Loại bỏ lớp 'active' khỏi nút apply
            applyButton2.innerText = 'APPLY'; // Đổi văn bản của nút thành 'APPLY'
            promoApplied = false; // Đánh dấu là mã khuyến mãi đã bị gỡ bỏ
            updateQuantity(); // Cập nhật lại số lượng và tổng tiền về giá trị ban đầu
        }
    });
});






//ket thuc thanh toan

