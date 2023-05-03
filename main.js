let icon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');
let modal = document.querySelector('.modal');
let menuList = document.querySelectorAll('.menu li');

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


