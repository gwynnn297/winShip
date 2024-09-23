
    // Kiểm tra xem #menu-bars và .navbar có tồn tại không
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        // Xử lý sự kiện khi nhấp vào biểu tượng menu
        menu.onclick = () => {
            console.log('Menu clicked!');
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };
    } else {
        console.error("Element '#menu-bars' or '.navbar' not found");
    }


    var swiperContainer = document.querySelector('.house-slider');
    if (swiperContainer) {
        var swiper = new Swiper(".house-slider", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
        });
    } else {
        console.error("Element '.house-slider' not found");
    }

    // Lựa chọn phần tử Swiper
var swiperContainer = document.querySelector('.house-slider'); // Tìm phần tử đầu tiên có lớp 'house-slider'

// Kiểm tra sự tồn tại của phần tử
if (swiperContainer) { // Nếu phần tử tồn tại
    // Khởi tạo Swiper
    var swiper = new Swiper(".house-slider", { // Tạo một instance mới của Swiper cho phần tử 'house-slider'
        spaceBetween: 30, // Đặt khoảng cách giữa các slide là 30 pixel
        centeredSlides: true, // Căn giữa slide hiện tại trong view
        autoplay: { // Bật tính năng tự động phát
            delay: 7500, // Thời gian giữa các slide là 7500 milliseconds (7.5 giây)
            disableOnInteraction: false, // Tiếp tục autoplay khi người dùng tương tác
        },
        pagination: { // Cấu hình cho phần hiển thị phân trang
            el: ".swiper-pagination", // Chỉ định phần tử cho phân trang
            clickable: true, // Cho phép nhấp vào các điểm phân trang
        },
        loop: true, // Cho phép slider quay vòng
    });
} else {
    console.error("Element '.house-slider' not found"); // In thông báo lỗi nếu phần tử không tồn tại
}




    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
    document.querySelector('#search-icon').onclick = () =>{
        document.querySelector('#search-form').classList.toggle('active');

    }
    document.querySelector('#close').onclick = () =>{
        document.querySelector('#search-form').classList.remove('active');

    }
    



