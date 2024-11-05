function register(e){
    event.preventDefault();
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    if(username =="" && email == "" && password == "" ){
        alert("vui lòng nhập thông tin");
    }
    else{
        var user = {
            username : username,
            email :email,
            password : password
        }
        var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("đăng ký thành công")
    window.location.href="login.html"
    }
    
}
function login(e){
    event.preventDefault();
    var username = document.getElementById("your_name").value;
    var password = document.getElementById("your_pass").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("vui lòng nhập tên tài khoản và mật khẩu");
    }
    else if(username == data.username && password == data.password){
        alert("đăng nhập thành công")
        localStorage.setItem("loggedInUser", username);
        window.location.href="../home.html"
    }
    else{
        alert("đăng nhập thất bại");
    }


}