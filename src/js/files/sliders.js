import Swiper, { Navigation } from "swiper";
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".main__swiper")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".main__swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,

            loop: true,

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".main .main__nav_prev",
                nextEl: ".main .main__nav_next",
            },
        });
    }

    if (document.querySelector(".testi__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".testi__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            speed: 800,

            loop: true,

            // Кнопки "влево/вправо"
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
