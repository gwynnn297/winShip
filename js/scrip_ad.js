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

    