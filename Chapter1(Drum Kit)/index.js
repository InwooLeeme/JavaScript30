
function handleKeyDown(event){
    const currentKeyCode = event.keyCode;
    const kit = document.querySelector(`div[data-key="${currentKeyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${currentKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    kit.classList.add('playing');
    setTimeout(() => {
        kit.classList.remove('playing');
    }, 3000);
}

function init(){
    window.addEventListener('keydown',handleKeyDown);
}

init();