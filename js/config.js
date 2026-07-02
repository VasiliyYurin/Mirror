/*
========================================
Mirror 2.0
Configuration
========================================
*/

const DEFAULT_MODE = "motivation";

const MODES = {

    motivation: {

        text: "Этот человек способен изменить твою жизнь.",

        delay: 1000,

        duration: 3000

    },

    clean: {

        text: "",

        delay: 0,

        duration: 0

    }

};

/*
========================================
Read URL parameters
========================================
*/

const params = new URLSearchParams(window.location.search);

const modeName = params.get("mode") || DEFAULT_MODE;

const mode = MODES[modeName] || MODES[DEFAULT_MODE];

window.APP_CONFIG = {

    text:
        params.get("text") || mode.text,

    delay:
        Number(params.get("delay")) || mode.delay,

    duration:
        Number(params.get("duration")) || mode.duration

};
