// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

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
};
