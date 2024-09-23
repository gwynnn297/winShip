
    // Kiểm tra xem #menu-bars và .navbar có tồn tại không
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        // Xử lý sự kiện khi nhấp vào biểu tượng menu
        menu.onclick = () => {
            console.log('Menu clicked!');
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };
    } else {
        console.error("Element '#menu-bars' or '.navbar' not found");
    }

    var swiperContainer = document.querySelector('.house-slider');
    if (swiperContainer) {
        var swiper = new Swiper(".house-slider", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
        });
    } else {
        console.error("Element '.house-slider' not found");
    }


    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
    document.querySelector('#search-icon').onclick = () =>{
        document.querySelector('#search-form').classList.toggle('active');

    }
    document.querySelector('#close').onclick = () =>{
        document.querySelector('#search-form').classList.remove('active');

    }
    



