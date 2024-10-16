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

    
//lọc mặt hàng
   document.querySelector('.filter-select').addEventListener('change', function() {
    var selectedValue = this.value;
    var rows = document.querySelectorAll('.product-table tbody tr');

    rows.forEach(function(row) {
        // Lấy tên mặt hàng từ cột thứ 2 của bảng
        var productName = row.querySelector('td:nth-child(2)').innerText.toLowerCase();

        // Kiểm tra nếu chọn "food" (Thức ăn)
        if (selectedValue === 'food') {
            if (productName.includes('xôi')) {
                row.style.display = ''; // Hiển thị mặt hàng thức ăn
            } else {
                row.style.display = 'none'; // Ẩn các mặt hàng không phải thức ăn
            }
        } 
        // Kiểm tra nếu chọn "beverages" (Nước uống)
        else if (selectedValue === 'beverages') {
            if (!productName.includes('xôi')) {
                row.style.display = ''; // Hiển thị mặt hàng nước uống
            } else {
                row.style.display = 'none'; // Ẩn các mặt hàng không phải nước uống
            }
        } 
        // Hiển thị tất cả nếu không chọn gì
        else {
            row.style.display = ''; 
        }
    });
});



//tìm kiếm mặt hàng
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
