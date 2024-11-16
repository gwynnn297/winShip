document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const loginBtn = document.querySelector(".login .login-btn");

    if (user && user.userName) {
        // Nếu người dùng đã đăng nhập, hiển thị tên người dùng trên nút
        loginBtn.textContent = user.userName;
        loginBtn.href = "#"; // Ngăn chuyển hướng khi nhấp vào tên người dùng

        // Thêm sự kiện đăng xuất khi nhấp vào tên người dùng
        const handleLogout = function(event) {
            event.preventDefault(); // Ngăn không cho trang tải lại hoặc chuyển hướng
            const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất?");
            if (confirmLogout) {
                localStorage.removeItem("user"); // Xóa thông tin người dùng

                // Đổi lại nút thành "Đăng Nhập" sau khi đăng xuất
                loginBtn.textContent = "Đăng Nhập";
                loginBtn.removeAttribute("href"); // Loại bỏ liên kết hiện tại để không chuyển hướng

                // Xóa sự kiện đăng xuất sau khi người dùng đã đăng xuất
                loginBtn.removeEventListener("click", handleLogout);

                // Thêm sự kiện mới cho nút để khi nhấp sẽ chuyển hướng đến trang đăng nhập
                loginBtn.addEventListener("click", function() {
                    window.location.href = "register_login/login.html"; // Chuyển hướng đến trang đăng nhập khi nhấp vào nút
                }, { once: true }); // Sử dụng { once: true } để sự kiện chỉ xảy ra 1 lần
            }
        };

        // Gán sự kiện đăng xuất ban đầu cho nút
        loginBtn.addEventListener("click", handleLogout);
    } else {
        // Nếu người dùng chưa đăng nhập, nút sẽ luôn là "Đăng Nhập" và chuyển hướng đến trang đăng nhập
        loginBtn.textContent = "Đăng Nhập";
        loginBtn.href = "register_login/login.html"; // Liên kết đến trang đăng nhập
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const locationInput = document.getElementById("location-input_Q");
    const submitBtn = document.querySelector(".submitBtn_Q");

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

    // Thêm sản phẩm vào giỏ hàng
    const bnt = document.querySelectorAll(".btn-xoi");
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
        });
    });

    // Hiển thị giỏ hàng khi nhấn icon
    function viewCartt() {
        document.querySelector('.cart').style.right = '0';
        document.querySelector('.cart').classList.add('active'); // Hiển thị giỏ hàng
        document.querySelector('.overlay').classList.add('active'); // Hiển thị overlay
        renderCart(); // Render giỏ hàng mỗi khi mở
    }

    const cartshow2 = document.querySelector('.fa-shopping-cart');
    cartshow2.addEventListener('click', viewCartt);

    // Đóng giỏ hàng
    const cartbtn = document.querySelector(".fa-circle-xmark");
    const overlay = document.querySelector(".overlay");

    function closeCart() {
        document.querySelector(".cart").classList.remove("active");
        document.querySelector(".cart").style.right = "-100%"; // Ẩn giỏ hàng
        overlay.classList.remove("active");
    }

    cartbtn.addEventListener("click", closeCart);
    overlay.addEventListener("click", closeCart);

    // Khởi tạo giỏ hàng khi load trang
    renderCart();
});

//end slect cart




document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login-btn");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        // Thay nút đăng nhập bằng tên người dùng
        loginBtn.textContent = loggedInUser;
        loginBtn.href = "#"; // Ngăn chặn chuyển trang
        loginBtn.classList.add("logged-in");

        // Tùy chọn: Thêm chức năng đăng xuất
        loginBtn.addEventListener("click", function() {
            if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
                localStorage.removeItem("loggedInUser"); // Xóa tên người dùng đã đăng nhập
                location.reload(); // Tải lại trang
            }
        });
    }
});
    
    


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

    // Nếu số lượng là 0, đặt tổng tiền là 0
    if (quantity === 0) {
        priceDisplay.textContent = '0'; // Đặt giá về 0
        totalPriceDisplay.textContent = '0'; // Đặt tạm tính về 0
        finalTotalDisplay.textContent = '0'; // Đặt tổng cộng về 0
        return; // Kết thúc hàm nếu không có hàng
    }

    const finalTotal = totalPrice + shippingFee; // Tổng tiền bao gồm phí vận chuyển

    // Cập nhật hiển thị
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

// Hàm để xử lý việc xóa món hàng
function removeItem() {
    alert("Món hàng đã được xóa!"); // Thực hiện hành động xóa
    quantity = 0; // Đặt lại số lượng về 0
    promoApplied = false; // Đánh dấu là mã khuyến mãi đã bị gỡ bỏ
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


