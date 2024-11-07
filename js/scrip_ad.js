   // Chọn phần tử "Báo cáo" và menu con
   const reportToggle = document.getElementById("report-toggle");
   const subMenu = document.querySelector(".report-item .sub-menu");

   // Thêm sự kiện click vào mục "Báo cáo"
   reportToggle.addEventListener("click", function() {
       // Chuyển đổi giữa hiển thị và ẩn menu con
       if (subMenu.style.display === "block") {
           subMenu.style.display = "none";
       } else {
           subMenu.style.display = "block";
       }
   });



//bắt đầu Giao diện danh sách mặt hàng
//bắt đầu lọc mặt hàng
   // Định nghĩa hàm lọc mặt hàng
function initFilter() {
    // Lấy phần tử .filter-select và kiểm tra nếu tồn tại
    const filterSelect = document.querySelector('.filter-select');
    if (!filterSelect) return; // Thoát sớm nếu không tìm thấy filter-select

    // Gán sự kiện khi thay đổi lựa chọn trong dropdown
    filterSelect.addEventListener('change', function() {
        const selectedValue = this.value;
        const rows = document.querySelectorAll('.product-table tbody tr');

        rows.forEach(function(row) {
            // Lấy tên mặt hàng từ cột thứ 2 của bảng
            const productName = row.querySelector('td:nth-child(2)').innerText.toLowerCase();

            // Kiểm tra và lọc mặt hàng theo danh mục
            if (selectedValue === 'food') {
                // Hiển thị mặt hàng thức ăn nếu chứa "xôi", ẩn nếu không phải thức ăn
                row.style.display = productName.includes('xôi') ? '' : 'none';
            } else if (selectedValue === 'beverages') {
                // Hiển thị mặt hàng nước uống nếu không chứa "xôi", ẩn nếu là thức ăn
                row.style.display = !productName.includes('xôi') ? '' : 'none';
            } else {
                // Hiển thị tất cả mặt hàng nếu không chọn gì
                row.style.display = '';
            }
        });
    });
}

// Gọi hàm initFilter sau khi DOM được tải
document.addEventListener('DOMContentLoaded', initFilter);

//kết thúc lọc mặt hàng



// //bắt đầu tìm kiếm mặt hàng
document.querySelector('.search-input').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase().trim();  // Lấy giá trị tìm kiếm và chuẩn hóa
    var rows = document.querySelectorAll('.product-table tbody tr'); // Lấy tất cả hàng trong bảng
    var found = false;  // Đặt biến kiểm tra có tìm thấy sản phẩm hay không

    rows.forEach(function(row) {
        var productName = row.querySelector('td:nth-child(2)').innerText.toLowerCase();  // Lấy tên mặt hàng

        if (productName.includes(searchValue)) {  // Kiểm tra tên mặt hàng có chứa từ khóa tìm kiếm
            row.style.display = '';  // Hiển thị hàng nếu khớp
            found = true;  // Đánh dấu tìm thấy mặt hàng khớp
        } else {
            row.style.display = 'none';  // Ẩn hàng nếu không khớp
        }
    });

    // Hiển thị thông báo "Không có mặt hàng" nếu không tìm thấy mặt hàng
    if (!found) {
        document.getElementById('no-results').style.display = 'block';
    } else {
        document.getElementById('no-results').style.display = 'none';
    }
});
// //kết thúc tìm kiếm mặt hàng


//kết thúc Giao diện danh sách mặt hàng




//bắt đầu JS mang đi//

// Lấy các phần tử cần xử lý sự kiện
const deleteDiv = document.querySelector('.delete');
const cancelDiv = document.querySelector('.cancel');
const saveDiv = document.querySelector('.save');

// Thêm sự kiện click vào phần tử "Xóa thực đơn"
deleteDiv.addEventListener('click', function() {
    alert('Đã xóa thực đơn');
});

// Thêm sự kiện click vào phần tử "Hủy"
cancelDiv.addEventListener('click', function() {
    alert('Đã hủy');
});

// Thêm sự kiện click vào phần tử "Lưu"
saveDiv.addEventListener('click', function() {
    alert('Đã lưu');
});




//kết thúc Js mang đi??

function initFilter() {

// Lấy tất cả các phần tử với class "icons"
const icons = document.querySelectorAll('.icons');

// Duyệt qua tất cả các phần tử "icons"
icons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Kiểm tra nếu icon hiện tại đã có class 'active'
        if (!this.classList.contains('active')) {
            // Xóa class 'active' (màu vàng) khỏi tất cả các icon
            icons.forEach(icon => {
                icon.classList.remove('active');
            });
            // Thêm class 'active' vào icon vừa được nhấn
            this.classList.add('active');
        }
    });
});





    // Lưu bảng sản phẩm và phần tử savedItems vào biến
    const productTable = document.querySelector('.new_menu_content .product-table');
    const savedItems = document.getElementById('savedItems');

    // Ẩn bảng khi tải trang
    window.addEventListener('load', function() {
        productTable.style.display = 'none'; // Ẩn bảng sản phẩm khi trang tải xong
        savedItems.style.display = 'block'; // Hiển thị phần savedItems khi bảng ẩn
    });

    // Lắng nghe sự kiện click trên nút "Tìm kiếm"
    document.getElementById('search-button').addEventListener('click', function() {
        // Kiểm tra trạng thái hiển thị của bảng và thay đổi giữa hiển thị và ẩn
        if (productTable.style.display === 'none') {
            productTable.style.display = 'table';  // Hiển thị bảng khi nút được nhấn
            savedItems.style.display = 'none'; // Ẩn savedItems khi bảng được hiển thị
        } else {
            productTable.style.display = 'none';  // Ẩn bảng khi nút được nhấn
            savedItems.style.display = 'block'; // Hiển thị savedItems khi bảng bị ẩn
        }
    });

}


