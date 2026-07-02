/*
========================================
Mirror 2.0
UI
========================================
*/

const message = document.getElementById("message");
const overlay = document.getElementById("overlay");

/**
 * Показать сообщение
 */
function showMessage(text) {

    if (!text) return;

    message.textContent = text;

    overlay.classList.add("overlay-visible");

    message.classList.remove("hide-message");
    message.classList.add("show-message");

}

/**
 * Скрыть сообщение
 */
function hideMessage() {

    message.classList.remove("show-message");
    message.classList.add("hide-message");

    overlay.classList.remove("overlay-visible");

}

/**
 * Ошибка
 */
function showError(text) {

    message.innerHTML = `
        <div class="error">
            ${text}
        </div>
    `;

    overlay.classList.add("overlay-visible");

    message.classList.add("show-message");

}
