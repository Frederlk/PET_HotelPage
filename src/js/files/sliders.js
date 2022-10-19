import Swiper, { Navigation } from "swiper";
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    if (document.querySelector(".main__swiper")) {
        new Swiper(".main__swiper", {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,

            loop: true,

            navigation: {
                prevEl: ".main .main__nav_prev",
                nextEl: ".main .main__nav_next",
            },
        });
    }

    if (document.querySelector(".testi__slider")) {
        new Swiper(".testi__slider", {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,

            loop: true,

            navigation: {
                prevEl: ".testi .testi__nav_prev",
                nextEl: ".testi .testi__nav_next",
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
