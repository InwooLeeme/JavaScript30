
function handleKeyDown(event){
    const currentKeyCode = event.keyCode;
    const kit = document.querySelector(`div[data-key="${currentKeyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${currentKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    
}

function init(){
    window.addEventListener('keydown',handleKeyDown);
}

init();