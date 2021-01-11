
const spaceController = document.getElementById('spacing');
const blurController = document.getElementById('blur');
const colorController = document.getElementById('base');

function handleSpace(){
    const currentSpace = spaceController.value;
    console.log(currentSpace);
}

function init(){
    spaceController.addEventListener('change', handleSpace);
}

init();