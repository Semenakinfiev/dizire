let r_menu = document.querySelector(".rightside-menu");
let close = document.querySelector(".rightside-menu__close");
let headerBtn = document.querySelector(".header__btn");

close.addEventListener("click", function() {
    r_menu.classList.toggle("disable");
})

headerBtn.addEventListener("click", function() {
    r_menu.classList.toggle("disable");
});

let header__btnMenu = document.querySelector(".header__btn-menu");
let menu = document.querySelectorAll(".menu");

header__btnMenu.addEventListener("click", function() {
    for(let elem of menu) {
       elem.classList.toggle("menu--open");
    }
});


let sliders = document.querySelectorAll(".top__slider-item");
let top__slider = document.querySelector(".top__slider");
let left = document.querySelector(".top__inner-switch-left");
let right = document.querySelector(".top__inner-switch-right");
let current = 0;

function slide() {
    for(let i=0; i<sliders.length; i++) {
        sliders[i].classList.add("opacity0");
    }
    sliders[current].classList.remove("opacity0");
}
slide();
left.addEventListener("click", function() {
    if(current - 1 == -1) {
        current = sliders.length-1;
    } else {
        current--;
    }
    slide();
});

right.addEventListener("click", function() {
    if(current + 1 == sliders.length) {
        current = 0;
    } else {
        current++;
    }
    slide();
});

let gallery__menu_item = document.querySelectorAll(".gallery__menu-item");
let gallery__content = document.querySelectorAll(".gallery__content");

function switchGallery() {
    for(let i=0; i<gallery__menu_item.length; i++) {
        gallery__menu_item[i].addEventListener("click", function() {
            for(let elem of gallery__menu_item) {
                elem.classList.remove("active-gallery");
            }
            this.classList.add("active-gallery");
           for(let i=0; i<gallery__content.length; i++) {
            if(gallery__content[i].classList.contains("disabled") == false) {
                 gallery__content[i].classList.add("opacity7");
               let id = setInterval(function() {
                    gallery__content[i].classList.add("disabled");
                    gallery__content[i].classList.remove("opacity7");
                    clearInterval(id);
                }, 700);
            }
           }
           let id1 = setInterval(function() {
            gallery__content[i].classList.remove("disabled");
            clearInterval(id1);
        }, 700);
        });
    }
}
switchGallery();

