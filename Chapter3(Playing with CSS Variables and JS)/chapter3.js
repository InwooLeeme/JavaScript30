
const spaceController = document.getElementById('spacing');
const blurController = document.getElementById('blur');
const colorController = document.getElementById('base');
const image = document.querySelector('img');


function handleSpace(){
    const currentSpace = spaceController.value;
    console.log(currentSpace);
    image.style.margin = `${parseInt(currentSpace)}px`;
}

function init(){
    spaceController.addEventListener('change', handleSpace);
}

init();