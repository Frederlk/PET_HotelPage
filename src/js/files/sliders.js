import Swiper, { Navigation } from "swiper";
import "../../scss/base/swiper.scss";

//main-slider
//========================================================================================================================================================
// $(".main-page__slider-inner").slick({
//     nextArrow: $(".main-page .main-page__nav_next"),
//     prevArrow: $(".main-page .main-page__nav_prev"),
//     zIndex: 10,
//     speed: 800,
//     fade: true,
//     infinity: true,
// });
// $(".testi-page__slider").slick({
//     nextArrow: $(".testi-page .testi-page__nav_next"),
//     prevArrow: $(".testi-page .testi-page__nav_prev"),
//     zIndex: 10,
//     speed: 800,
//     infinity: true,
// });

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".swiper")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

            // Пагинация
            /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

            // Скроллбар
            /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },

            // Брейкпоинты
            /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
            // События
            on: {},
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
