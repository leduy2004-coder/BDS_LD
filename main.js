let icon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');
let modal = document.querySelector('.modal');
let menuList = document.querySelectorAll('.menu li');
let modalInput = document.querySelector('.modal-input');
let formLogin = document.querySelector('.form-login');
let formRegister = document.querySelector('.form-register');
let formBtnBack = document.querySelectorAll('.back');
let registerBtn = document.querySelector('.register-btn');
let loginBtn = document.querySelector('.login-btn');
let openLogin = document.querySelector('.open-login');
let openRegister = document.querySelector('.open-register');

icon.addEventListener("click", function(e) {
    modal.classList.add("open");
    menu.classList.add("active");
});

modal.addEventListener("click", function(e) {
    if (e.target == e.currentTarget) {
        modal.classList.remove("open");
        menu.classList.remove("active");
    }
})

menuList.forEach((item) => {
    item.addEventListener("click", function() {
        modal.classList.remove("open");
        menu.classList.remove("active");
    })
});


let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let list = document.querySelector('.out-wrapper');
const widthItem = document.querySelector('.product-arrow-item').offsetWidth;


next.addEventListener("click", function() {
    list.scrollLeft += widthItem;
})
prev.addEventListener("click", function() {
    list.scrollLeft -= widthItem;
})



loginBtn.addEventListener("click", function() {
    modalInput.classList.add("block");
    formLogin.classList.add("block");
})

registerBtn.addEventListener("click", function() {
    formRegister.classList.add("block");
    modalInput.classList.add("block");
})


modalInput.addEventListener("click", function(e) {
    if (e.target == e.currentTarget) {
        modalInput.classList.remove("block");
        formRegister.classList.remove("block");
        formLogin.classList.remove("block");
    }
})

formBtnBack.forEach((item) => {
    item.addEventListener("click", function() {
        modalInput.classList.remove("block");
       formRegister.classList.remove("block");
       formLogin.classList.remove("block");
    })
});

openLogin.addEventListener("click", function() {
    formLogin.classList.add("block");
    formRegister.classList.remove("block");
    modalInput.classList.add("block");
})

openRegister.addEventListener("click", function() {
    formRegister.classList.add("block");
    formLogin.classList.remove("block");
    modalInput.classList.add("block");
})