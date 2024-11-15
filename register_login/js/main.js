function register(e){
    // Ngừng hành vi mặc định khi gửi form
    e.preventDefault(); // Sử dụng tham số 'e' cho sự kiện
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("re-pass").value;
    
    if(userName == "" || email == "" || password == "" || confirmPassword == ""){
        alert("Vui lòng nhập thông tin đầy đủ.");
    } else {
        const registerData = {
            userName,         // Khớp với backend schema Joi
            email,
            password,
            confirmPassword, // Khớp với backend schema Joi
        };
        
        fetch("http://localhost:8000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerData)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("Đăng ký thành công");
            window.location.href = "login.html";
        })
        .catch((error) => console.log(error.message));
    }
}


const formRegister = document.getElementById("register-form");
if(formRegister){
    formRegister.addEventListener("submit", register);
}
    
function login(e){
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("your_pass").value;
    
    if(email == "" || password == ""){
        alert("vui lòng nhập tên tài khoản và mật khẩu");
    }
    else{
        const loginData = {
            email,
            password
        };
        fetch("http://localhost:8000/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then((response) => {
            console.log(response); // Kiểm tra phản hồi từ backend
            if (!response.ok) {
                return response.json().then((error) => {
                    console.log("Error message from backend:", error.message); // Kiểm tra nội dung lỗi
                    throw new Error(error.message);
                });
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                alert(data.message); // Đăng nhập thành công
                window.location.href = "../../../winShip/home.html";
            }
        })
        .catch((error) => {
            console.log("Caught error:", error.message); // Kiểm tra thông báo lỗi trong console
            alert(error.message); // Hiển thị thông báo lỗi từ backend
        });
    }
}
const formLogin = document.getElementById('login-form');
        if(formLogin){
            formLogin.addEventListener("submit",login);
        }