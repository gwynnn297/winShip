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