function openInvoiceTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("invoice-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("invoice-tab");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.invoice-tab');

  tabs.forEach(tab => {
      tab.addEventListener('click', function () {
          // Xóa lớp 'active' khỏi tất cả các tab
          tabs.forEach(t => t.classList.remove('active'));
          // Thêm lớp 'active' vào tab được chọn
          this.classList.add('active');
      });
  });
});
function openTab(event, tabName) {
  // Ẩn tất cả các nội dung tab
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
      tabContent[i].classList.remove("active");
  }

  // Xóa lớp active khỏi tất cả các tab
  var tabLinks = document.getElementsByClassName("tab");
  for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
  }

  // Hiển thị nội dung của tab được chọn
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");

  // Thêm lớp active vào tab hiện tại
  event.currentTarget.classList.add("active");
}

// Ẩn tất cả các tab khi tải trang
window.onload = function() {
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('revenueCharttt').getContext('2d');

// Tạo dữ liệu từ ngày 1 đến ngày 31
const data = {
  labels: Array.from({length: 31}, (_, i) => i + 1), // Nhãn trục x từ 1 đến 31
  datasets: [{
    label: 'Doanh thu gồm thuế',
    data: Array.from({length: 31}, () => (Math.random() * 2 - 1).toFixed(2)), // Tạo dữ liệu ngẫu nhiên từ -1 đến 1
    backgroundColor: 'rgba(74, 144, 226, 0.2)',
    borderColor: 'rgba(74, 144, 226, 1)',
    borderWidth: 2,
    fill: true,
  }]
};




// Thiết lập biểu đồ

    
});

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('revenueChartt').getContext('2d');

  const data = {
    labels: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", 
      "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", 
      "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", 
      "21:00", "22:00", "23:00"
    ],
    datasets: [{
      label: 'Doanh thu gồm thuế',
      data: [
        0.1, 0.3, 0.5, 0.7, 0.2, 0.4, 0.6, 0.8, 0.3, 0.5, 0.2, 0.7, 
        0.1, 0.9, 0.4, 0.6, 0.8, 0.3, 0.7, 0.5, 0.2, 0.9, 0.4, 0.6
      ], // Dữ liệu giả trong khoảng từ 0 đến 1
      backgroundColor: '#4a90e2',
      borderColor: '#4a90e2',
      borderWidth: 1,
    }]
  };
  
  const config = {
    type: 'bar', // Đổi thành 'bar' để tạo biểu đồ cột
    data: data,
    options: {
      scales: {
        x: {
          ticks: {
            maxRotation: 0, // Xoay nhãn về nằm ngang
            minRotation: 0,
          }
        },
        y: {
          min: 0,      // Giá trị nhỏ nhất của trục Y
          max: 1,      // Giá trị lớn nhất của trục Y
          ticks: {
            stepSize: 0.2,    // Khoảng cách giữa các điểm trên trục Y
            callback: function(value) {
              return value + ' đ'; // Hiển thị đơn vị tiền tệ
            }
          },
          grid: {
            drawBorder: true, // Hiển thị đường viền ngoài cùng của trục Y
            color: function(context) {
              if (context.tick.value === 0) {
                return '#333'; // Làm đậm đường ngang tại giá trị 0
              } else {
                return '#e0e0e0'; // Màu nhẹ cho các đường ngang khác
              }
            },
            borderColor: '#333', // Màu đậm cho trục Oy để phân biệt
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  };
  
  const revenueChart = new Chart(ctx, config);
    
});


document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('revenueChart').getContext('2d');
const labels = [
  "01/10", "02/10", "03/10", "04/10", "05/10", "06/10", "07/10", "08/10",
  "09/10", "10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10",
  "17/10", "18/10", "19/10", "20/10", "21/10", "22/10", "23/10", "24/10",
  "25/10", "26/10", "27/10", "28/10", "29/10", "30/10", "31/10"
];

// Dữ liệu giả (đơn vị triệu đồng)
const revenueData = [
  5, 12, 8, 18, 15, 22, 17, 30, 25, 20, 32, 28, 34, 27, 40, 35, 42, 33, 45, 38,
  50, 43, 48, 41, 53, 46, 55, 47, 58, 52, 60
];


// Cấu hình dữ liệu
const data = {
  labels: labels,
  datasets: [{
    data: revenueData,
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    label: 'Tổng doanh thu gồm thuế (triệu đồng)',
  }]
};

// Cấu hình biểu đồ
const config = {
  type: 'bar', // Đổi sang 'bar' để tạo biểu đồ cột
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,  // Khoảng cách mỗi giá trị trên trục y là 10 triệu đồng
          callback: function(value) {
            return value + ' triệu';
          }
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.raw + ' triệu';
          }
        }
      }
    }
  }
};

// Khởi tạo biểu đồ
new Chart(ctx, config);


  
 });
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
   // Chọn phần tử "Mặt hàng" và menu con
const reportToggleMathang = document.getElementById("report-toggle-mathang");
const subMenuMathang = document.querySelector(".subnav-mathang .sub-menu");

// Thêm sự kiện click vào mục "Mặt hàng"
reportToggleMathang.addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>

    // Chuyển đổi giữa hiển thị và ẩn menu con
    if (subMenuMathang.style.display === "block") {
        subMenuMathang.style.display = "none";
    } else {
        subMenuMathang.style.display = "block";
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













//bắt đầu JS thực đơn mới

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





 // Get necessary elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const productTableRows = document.querySelectorAll(".product-table tbody tr");
const savedItems = document.getElementById("savedItems");
const selectedItemsContainer = document.getElementById("selected-items"); // Display selected items

// Array to store selected items
let selectedFoods = [];

// Initialize page - hide all items and show savedItems by default
function initializePage() {
    productTableRows.forEach(row => {
        row.style.display = "none"; // Hide each food item
    });
    savedItems.style.display = "block"; // Show savedItems on page load
    selectedItemsContainer.innerHTML = ''; // Clear selected items list on page load
    updateSavedItemsVisibility();  // Ensure savedItems visibility on page load
}

// Update savedItems visibility based on the presence of selected items
function updateSavedItemsVisibility() {
    // Check if selected-items container has any child nodes (selected items)
    if (selectedItemsContainer.children.length === 0) {
        savedItems.style.display = "block"; // Show savedItems if no food selected
    } else {
        savedItems.style.display = "none"; // Hide savedItems if there’s a selected item
    }
}

// Search function to filter food items based on input
function searchFood(showAlert = false) {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let found = false;

    if (searchTerm === "") {
        productTableRows.forEach(row => {
            row.style.display = "none";
        });
        savedItems.style.display = "block";
        return;
    }

    productTableRows.forEach(row => {
        const foodName = row.querySelector("td").textContent.toLowerCase();

        if (foodName.includes(searchTerm)) {
            row.style.display = ""; // Show matching item
            found = true;
            row.addEventListener('click', () => addToSelectedItems(row)); // Allow re-selection after removal
        } else {
            row.style.display = "none";
        }
    });

    // Display savedItems if no match is found, otherwise hide it
    savedItems.style.display = found ? "none" : "block";

    if (!found && showAlert) {
        alert("Món ăn không tồn tại.");
    }
}

// Add selected item to the selected-items container with full styling
function addToSelectedItems(row) {
    const foodName = row.querySelector("td").textContent;

    // Check if the item is already selected
    if (selectedFoods.includes(foodName)) {
        alert("Món ăn đã được chọn."); // Alert if already selected
        return;
    }

    // Clone the row element to keep original styling
    const clonedRow = row.cloneNode(true);
    clonedRow.classList.add("product-table-row");

    // Create a delete button
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "×";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = () => removeFromSelectedItems(foodName, clonedRow);

    // Append the delete button to the last cell (price cell)
    const priceCell = clonedRow.querySelector("td:last-child"); // Assuming price is in the last cell
    priceCell.appendChild(deleteButton);

    // Append the cloned row to the selected items container
    selectedItemsContainer.appendChild(clonedRow);

    // Add to selectedFoods to track selected items
    selectedFoods.push(foodName);

    // Update savedItems visibility based on selection
    updateSavedItemsVisibility();
}

// Function to remove an item from selected items
function removeFromSelectedItems(foodName, rowElement) {
    // Remove item from selectedFoods array
    selectedFoods = selectedFoods.filter(item => item !== foodName);

    // Remove the row from the selected-items container
    selectedItemsContainer.removeChild(rowElement);

    // Update visibility of savedItems
    updateSavedItemsVisibility();
}

// Add event listener to search button
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchFood(true);
});

// Initialize the page on load
initializePage();

}

//kết hục js thực đơn mới