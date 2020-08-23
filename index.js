function videoShake() {
    const els = document.getElementsByClassName('video-shake-receiver');
    for (let i = 0, len = els.length; i < len; i++) {
        els[i].classList.add('video-shake-active')
        setTimeout(function() {
            els[i].classList.remove('video-shake-active')
        }, 200)
    }
}