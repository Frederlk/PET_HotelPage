// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(document).ready(function () {
    window.onload = function () {
        document.addEventListener("click", documentActions);
        // Actions (Делегирование событий Click)
        if (window.innerWidth > 768 && isMobile.any()) {
            function documentActions(e) {
                const targetElement = e.target;
                if (targetElement.classList.contains("middle-header__icon-search")) {
                    document.querySelector(".middle-header__search-form").classList.toggle("_active");
                } else if (
                    !targetElement.closest(".middle-header__search-form") &&
                    document.querySelector(".middle-header__search-form._active")
                ) {
                    document.querySelector(".middle-header__search-form").classList.remove("_active");
                }
            }
        }
        if ($(".newsletter-page__image")) {
            var rellax = new Rellax(".newsletter-page__image", {
                center: true,
            });
        }
        //main-slider
        //========================================================================================================================================================
        $(".main-page__slider-inner").slick({
            nextArrow: $(".main-page .main-page__nav_next"),
            prevArrow: $(".main-page .main-page__nav_prev"),
            zIndex: 10,
            speed: 800,
            fade: true,
            infinity: true,
        });
    };
    $(".testi-page__slider").slick({
        nextArrow: $(".testi-page .testi-page__nav_next"),
        prevArrow: $(".testi-page .testi-page__nav_prev"),
        zIndex: 10,
        speed: 800,
        infinity: true,
    });
});
