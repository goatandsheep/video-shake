/**
 * @param {DOMString} [element='video']
 */
/*
function videoShake(elements='video') {
    const els = document.querySelectorAll(elements);

    const keyframes = [
        {
            transform: "rotate(0deg)"
        },
        {
            transform: "rotate(2deg)",
            offset: 0.25
        },
        {
            transform: "rotate(0deg)",
            offset: 0.5
        },
        {
            transform: "rotate(-2deg)",
            offset: 0.75
        },
        {
            transform: "rotate(0deg)",
            offset: 1
        },
    ]
    const timing = {
        duration: 75,
        iterations: 2
    }
    for (let i = 0, len = els.length; i < len; i++) {
        els[i].animate(keyframes, timing)
    }
}
*/
const keyframes = [
    {
        transform: "rotate(0deg)"
    },
    {
        transform: "rotate(2deg)",
        offset: 0.25
    },
    {
        transform: "rotate(0deg)",
        offset: 0.5
    },
    {
        transform: "rotate(-2deg)",
        offset: 0.75
    },
    {
        transform: "rotate(0deg)",
        offset: 1
    },
]
class DomJitter {
    /**
     * 
     * @param {String} [videoElementsSelector='video']
     * @param {Number} [duration=75] milliseconds per loop
     */
    constructor(videoElementsSelector, duration=75) {
        this.videoElementsList = document.querySelectorAll(videoElementsSelector);
        this.length = this.videoElementsList.length;
        
        let rand = Math.random()*16777215
        let hex = Math.floor(rand).toString(16);
        this.identifier = 'dom-jitter-' + hex;

        var style = document.createElement('style');
        style.innerHTML = `
        .${this.identifier} {
            animation: rotation ${duration/1000}s infinite linear;
        }
        
        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(2deg);
            }
            50% {
                transform: rotate(0deg);
            }
            75% {
                transform: rotate(-2deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    /**
     * Starts an infinite jitter loop
     */
    start() {
        for (let i = 0; i < this.length; i++) {
            // TODO: add class
            this.videoElementsList[i].classList.add(this.identifier);
        }
    }
    /**
     * Stops infinite jitter loop
     */
    stop() {
        for (let i = 0; i < this.length; i++) {
            // TODO: remove class
            this.videoElementsList[i].classList.remove(this.identifier);
        }
    }
    /**
     * timed pulse where pulse time is iterations * duration
     * @param {Number} [duration=this.duration] duration of each loop iteration in milliseconds, i.e. the lower the value, the faster the shake
     * @param {Number} [iterations=2] iterations
     */
    pulse(duration=this.duration, iterations=2) {
        const timing = {
            duration: duration,
            iterations: iterations
        }
        for (let i = 0, len = els.length; i < len; i++) {
            els[i].animate(keyframes, timing)
        }
    }
}

module.exports = DomJitter