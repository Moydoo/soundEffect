// FUNCTIONS
function playSound(e) {
    const lowerKey = e.key.toLocaleLowerCase(),
        audio = document.querySelector(`audio[data-key="${lowerKey}"]`),
        key = document.querySelector(`.key[data-key="${lowerKey}"]`)

    if (!audio) return

    //so we do not have to wait for it to end
    audio.currentTime = 0;
    key.classList.add('playing')
    audio.play()
}

function removeTransition(e) {
    if (e.propertyName !== 'scale') return //skip it
    this.classList.remove('playing')
    console.log(e.propertyName, this);
}

// VARIABLES
const keys = document.querySelectorAll('.key')

// EventListeners
keys.forEach(key => key.addEventListener('click', e => {
    const selector = e.target.closest('.key'),
        audio = document.querySelector(`audio[data-key="${selector.dataset.key}"]`)

    audio.currentTime = 0;
    selector.classList.add('playing')
    audio.play()
}))

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)