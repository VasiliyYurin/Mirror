/*
========================================
Mirror 2.0
Camera
========================================
*/

const video = document.getElementById("camera");
const loading = document.getElementById("loading");

async function startCamera() {

    try {

        // Небольшая пауза для эффекта
        await new Promise(resolve => setTimeout(resolve, 700));

        const stream = await navigator.mediaDevices.getUserMedia({

            audio: false,

            video: {

                facingMode: "user",

                width: { ideal: 1920 },

                height: { ideal: 1080 }

            }

        });

        video.srcObject = stream;

        await video.play();

        // Показываем камеру
        video.classList.add("camera-visible");

        // Убираем черный экран
        loading.classList.add("loading-hidden");

    }

    catch (error) {

        console.error(error);

        showError(
            "Чтобы увидеть человека, который способен изменить твою жизнь, разрешите доступ к камере."
        );

    }

}
