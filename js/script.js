let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log('Menu clicked!');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}