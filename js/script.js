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
    

// function inputchange(){
//     var cartItem = document.querySelectorAll("tbody tr")
//     for( var i = 0 ; i < cartItem.length ; i++){
//         var inputValue = cartItem[i].querySelector(".value-number")
//         inputValue.addEventListener("change" , function(){
//             carttotall()
//         })
//     }
    
//     }
//     function deleteCart(){
//         var cartItem = document.querySelectorAll("tbody tr");
           
//         for (var i = 0; i < cartItem.length; i++){
//             var productT = document.querySelectorAll(".delete-xoa")
//            productT[i].addEventListener("click",function(event){
//             var cartDelete =event.target
//             var cartItemR = cartDelete.parentElement.parentElement
//             cartItemR.remove()
//             carttotall()
//            })
           
//     }
//     }
    
//     function carttotall() {
//         // Lấy tất cả các hàng (tr) trong tbody
//         var cartItem = document.querySelectorAll("tbody tr");
    
//         var sum = 0;
//         for (var i = 0; i < cartItem.length; i++) {
//             // Lấy giá trị từ cột mony-cart và value-number trong mỗi hàng
//             var itemValue = parseInt(cartItem[i].querySelector(".mony-cart").textContent || cartItem[i].querySelector(".mony-cart").innerText);
//             var itemQuantity = parseInt(cartItem[i].querySelector(".value-number").value || cartItem[i].querySelector(".value-number").textContent);
    
//             // Kiểm tra nếu cả giá trị tiền và số lượng là số (không phải NaN)
//             if (!isNaN(itemValue) && !isNaN(itemQuantity)) {
//                 sum += itemValue * itemQuantity; // Cộng dồn giá trị tiền * số lượng
//             }
//         }
    
//         // Cập nhật tổng cộng trong thẻ .total
//         var totalDiv = document.querySelector(".total");
//         if (totalDiv) {
//             totalDiv.textContent = "Tổng cộng: " + (sum * 1000).toLocaleString('vi-VN') + " đ"; // Hiển thị tổng số tiền
//             inputchange()
        
//         }
//     }
    
    
//     // bắt đau chọn giỏ hàng
//     const bnt = document.querySelectorAll(".btn-xoi");
//     //console.log(bnt);
    
//     bnt.forEach(function (button, index) {
//         button.addEventListener('click', function (event) {
//             {
//                 var btnItem = event.target
//                 var product = btnItem.parentElement
//                 var productImg = product.querySelector("img").src
//                 var productName = product.querySelector(".first-p").innerText
//                 var productPrice = product.querySelector(".money-p").innerText
//                 //    console.log(productImg,productName,productPrice)
//                 addcart(productImg, productName, productPrice)
//             }
//         })
//     })
//     function addcart(productImg, productName, productPrice) {
//         var addtr = document.createElement("tr")
//         var cartItem = document.querySelectorAll("tbody tr");
//         for (var i = 0; i < cartItem.length; i++){
//             var productT = document.querySelectorAll(".item-text")
//             if(productT[i].innerHTML== productName){
    
//                 alert("Sản phảm của bạn đã có trong giỏ hàng")
//                 return
//             }
//         }
//         var trcontent = ' <tr><td style="display: flex; text-align: left;  align-items: center;"><img  src="' + productImg + '" alt="">  <span class="item-text">' + productName + '</span></td> <td><p><span class = "mony-cart" >' + productPrice + '</span><sup style="font-size: 2rem;">đ</sup></p></td> <td><input class = "value-number"style="width: 30px; outline: none; font-size: 2rem ; " value="1" min="1"></td>  <td><span class ="delete-xoa">Xóa</span></td></tr>'
//         addtr.innerHTML = trcontent
//         var cartTable = document.querySelector("tbody")
//         //console.log(cartTable);
//         cartTable.append(addtr)
    
//         carttotall()
//         deleteCart()
//     }
    
//     const cartbtn = document.querySelector(".fa-circle-xmark");
//     const cartshow = document.querySelectorAll(".btn-xoi");
//     const cart = document.querySelector(".cart");
//     const overlay = document.querySelector(".overlay");
    
//     // Lặp qua tất cả các phần tử nút "btn-xoi" và thêm sự kiện click cho mỗi nút
//     cartshow.forEach(function(btn) {
//         btn.addEventListener("click", function() {
//             cart.classList.add("active"); // Thêm lớp active để hiển thị giỏ hàng
//         });
//     });
    
//     cartbtn.addEventListener("click", function() {
//         cart.classList.remove("active"); // Xóa lớp active để ẩn giỏ hàng
//     });
    
//     cartshow.forEach(function(btn) {
//         btn.addEventListener("click", function() {
//             cart.classList.add("active"); // Hiển thị giỏ hàng
//             overlay.classList.add("active"); // Hiển thị overlay
//         });
//     });
    
//     // Đóng giỏ hàng và overlay khi nhấn nút đóng
//     cartbtn.addEventListener("click", function() {
//         cart.classList.remove("active");
//         overlay.classList.remove("active");
//     });
    
//     // Đóng giỏ hàng và overlay khi nhấn vào overlay
//     overlay.addEventListener("click", function() {
//         cart.classList.remove("active");
//         overlay.classList.remove("active");
//     });




    


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

// select cart
