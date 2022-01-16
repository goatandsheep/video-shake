function videoShake(elements='.video-shake-receiver') {
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
        duration: 100,
        iterations: 10
    }
    for (let i = 0, len = els.length; i < len; i++) {
        els[i].animate(keyframes, timing)
    }
}