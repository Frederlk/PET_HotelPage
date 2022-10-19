// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";

window.onload = function () {
    if (window.innerWidth < 992 && isMobile.any() && document.querySelector(".middle-header__search-form")) {
        const search = document.querySelector(".middle-header__search-form");
        document.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("middle-header__icon-search")) {
                search.classList.toggle("_active");
            } else if (
                !target.closest(".middle-header__search-form") &&
                search.classList.contains("_active")
            ) {
                search.classList.remove("_active");
            }
        });
    }
};
