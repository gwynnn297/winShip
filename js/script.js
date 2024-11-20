// login logout
document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));
    const loginBtn = document.querySelector(".login .login-btn");
    const dropdownMenu = document.querySelector(".login .dropdown-menu");
    const logoutBtn = document.querySelector(".logout-btn");
    const ordersBtn = document.querySelector(".orders-btn");

    function toggleDropdown(event) {
        event.preventDefault(); // Ngăn không cho chuyển hướng
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    }

    function setupLoggedOutState() {
        // Thiết lập trạng thái cho người dùng chưa đăng nhập
        loginBtn.textContent = "Đăng Nhập";
        loginBtn.href = "register_login/login.html"; // Chuyển hướng tới trang đăng nhập
        loginBtn.removeEventListener("click", toggleDropdown); // Loại bỏ sự kiện dropdown
        dropdownMenu.style.display = "none"; // Đảm bảo menu bị ẩn
    }

    if (user && user.userName) {
        // Người dùng đã đăng nhập
        loginBtn.textContent = user.userName;
        loginBtn.href = "#"; // Ngăn chuyển hướng
        loginBtn.addEventListener("click", toggleDropdown);

        // Xử lý đăng xuất
        logoutBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
            if (confirmLogout) {
                localStorage.removeItem("user"); // Xóa thông tin người dùng
                setupLoggedOutState(); // Chuyển về trạng thái chưa đăng nhập
            }
        });

        // Xử lý chuyển hướng tới đơn hàng
        ordersBtn.addEventListener("click", function () {
            window.location.href = "delivery.html"; // Chuyển hướng tới trang đơn hàng
        });
    } else {
        // Người dùng chưa đăng nhập
        setupLoggedOutState();
    }

    // Đóng menu khi click bên ngoài
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".login")) {
            dropdownMenu.style.display = "none";
        }
    });
});


// end login logout


// xử tìm kiếm nếu chưa đăng nhập
document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const locationInput = document.getElementById("location-input_Q");
    const submitBtn = document.querySelector(".submitBtn_Q");
    const loginBtn = document.querySelector(".login .login-btn");

    if (!user) {
        // Nếu người dùng chưa đăng nhập, vô hiệu hóa trường nhập và nút tìm kiếm
        locationInput.disabled = true;
        submitBtn.addEventListener("click", function() {
            alert("Vui lòng đăng nhập để nhập địa chỉ tìm kiếm!");
        });
    } else {
        // Nếu người dùng đã đăng nhập, kích hoạt trường nhập
        locationInput.disabled = false;
    }
});


// slectec cart

document.addEventListener('DOMContentLoaded', function () {
    let cartt = JSON.parse(localStorage.getItem('cart')) || []; // Lấy dữ liệu giỏ hàng từ localStorage

    function renderCart() {
        const cartTable = document.querySelector("tbody");
        cartTable.innerHTML = ""; // Xóa nội dung cũ trước khi render
        cartt.forEach((item, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td style="display: flex; text-align: left; align-items: center;">
                    <img src="${item.img}" alt=""> 
                    <span class="item-text">${item.name}</span>
                </td>
                <td>
                    <p><span class="mony-cart">${item.price}</span><sup style="font-size: 2rem;">đ</sup></p>
                </td>
                <td>
                    <input class="value-number" style="width: 30px; outline: none; font-size: 2rem;" value="${item.quantity}" min="1">
                </td>
                <td>
                    <span class="delete-xoa" data-index="${index}">Xóa</span>
                </td>`;
            cartTable.append(tr);
        });
        carttotall();
        deleteCart();
        inputchange();
    }

    function carttotall() {
        let sum = 0;
        const cartItem = document.querySelectorAll("tbody tr");
        cartItem.forEach((item, index) => {
            const itemValue = parseInt(item.querySelector(".mony-cart").textContent.replace(/\D/g, ''));
            const itemQuantity = parseInt(item.querySelector(".value-number").value);
            if (!isNaN(itemValue) && !isNaN(itemQuantity)) {
                sum += itemValue * itemQuantity;
                cartt[index].quantity = itemQuantity; // Cập nhật số lượng vào giỏ hàng trong localStorage
            }
        });
        localStorage.setItem('cart', JSON.stringify(cartt)); // Cập nhật giỏ hàng vào localStorage
        const totalDiv = document.querySelector(".total");
        if (totalDiv) {
            totalDiv.textContent = "Tổng cộng: " + sum.toLocaleString('vi-VN') + " đ";
        }
    }

    function deleteCart() {
        const deleteButtons = document.querySelectorAll(".delete-xoa");
        deleteButtons.forEach((btn) => {
            btn.addEventListener("click", function (event) {
                const index = event.target.getAttribute("data-index");
                cartt.splice(index, 1); // Xóa sản phẩm từ giỏ hàng
                localStorage.setItem('cart', JSON.stringify(cartt)); // Cập nhật localStorage
                renderCart(); // Render lại giỏ hàng
            });
        });
    }

    function inputchange() {
        const cartItems = document.querySelectorAll(".value-number");
        cartItems.forEach((input, index) => {
            input.addEventListener("change", function () {
                carttotall();
            });
        });
    }

    function addItemToCart(item) {
        const existingItem = cartt.find((cartItem) => cartItem.name === item.name);
        if (existingItem) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng");
        } else {
            cartt.push(item); // Thêm sản phẩm vào giỏ hàng
            localStorage.setItem('cart', JSON.stringify(cartt)); // Cập nhật localStorage
            renderCart();
        }
    }

    // Thêm sản phẩm vào giỏ hàng và hiển thị giỏ hàng
    const bnt = document.querySelectorAll(".btn-xoi");
    const cart = document.querySelector(".cart");
    const overlay = document.querySelector(".overlay");

    bnt.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const btnItem = event.target;
            const product = btnItem.parentElement;
            const productImg = product.querySelector("img").src;
            const productName = product.querySelector(".first-p").innerText;
            const productPrice = product.querySelector(".money-p").innerText.replace(/\D/g, '');
            const item = {
                img: productImg,
                name: productName,
                price: productPrice,
                quantity: 1,
            };
            addItemToCart(item);

            // Hiển thị giỏ hàng và overlay
            cart.classList.add("active");
            overlay.classList.add("active");
        });
    });

    // Hiển thị giỏ hàng khi nhấn vào biểu tượng giỏ hàng
    const cartshow2 = document.querySelector('.fa-shopping-cart');
    cartshow2.addEventListener('click', function () {
        cart.classList.add("active");
        overlay.classList.add("active");
        renderCart(); // Render giỏ hàng mỗi khi mở
    });

    // Đóng giỏ hàng
    const cartbtn = document.querySelector(".fa-circle-xmark");
    overlay.addEventListener("click", closeCart);
    cartbtn.addEventListener("click", closeCart);

    function closeCart() {
        cart.classList.remove("active");
        overlay.classList.remove("active");
    }

    // Khởi tạo giỏ hàng khi load trang
    renderCart();
});

//end slect cart

    


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



// hiển thị t
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


document.addEventListener('DOMContentLoaded', function () {
    // Lấy giỏ hàng từ localStorage
    let cartt = JSON.parse(localStorage.getItem('cart')) || [];

    // Hàm tính tổng tiền của các món ăn trong giỏ hàng
    function calculateTotal() {
        let total = 0;

        // Tính tổng tiền hàng (tính theo giá và số lượng của các món)
        cartt.forEach(item => {
            const itemPrice = parseInt(item.price.replace(/\D/g, '')); // Lấy giá trị số từ chuỗi (ví dụ: "25.000 đ" -> 25000)
            total += itemPrice * item.quantity; // Tổng tiền của món ăn = giá * số lượng
        });

        // Hiển thị tổng tiền vào phần "Tổng tiền hàng"
        const totalItemsElement = document.querySelector("#total-items");
        if (totalItemsElement) {
            totalItemsElement.textContent = total.toLocaleString('vi-VN'); // Hiển thị dưới dạng có dấu phân cách hàng nghìn
        }

        // Cập nhật phần "Tổng tiền" trong phần Order-placed-delivery
        const totalMoneyElement = document.querySelector('.total_c');
        if (totalMoneyElement) {
            totalMoneyElement.textContent = `Thành tiền: ₫${total.toLocaleString('vi-VN')}`;
        }
    }

    // Hàm để hiển thị các món ăn trong phần Order-placed-delivery
    function renderOrderDetails() {
        const orderPlacedDelivery = document.querySelector(".Order-placed-delivery");
        orderPlacedDelivery.innerHTML = ""; // Xóa nội dung cũ trước khi thêm món mới

        cartt.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("order-item");

            div.innerHTML = `
                <div class="order-item-img">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="order-item-details">
                    <span class="order-item-name">${item.name}</span>
                    <span class="order-item-price">₫ ${item.price}</span>
                    <h6 class="order-item-quantity">Số lượng: ${item.quantity}</h6>
                </div>
            `;
            orderPlacedDelivery.appendChild(div);
        });

        // Tính tổng tiền sau khi hiển thị các món ăn
        calculateTotal();
    }

    // Gọi hàm để hiển thị các món ăn ngay khi trang được load
    renderOrderDetails();
});







