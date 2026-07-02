/*
========================================
Mirror 2.0
Application
========================================
*/

window.addEventListener("load", async () => {

    await startCamera();

    if (!APP_CONFIG.text) return;

    setTimeout(() => {

        showMessage(APP_CONFIG.text);

        setTimeout(() => {

            hideMessage();

        }, APP_CONFIG.duration);

    }, APP_CONFIG.delay);

});
