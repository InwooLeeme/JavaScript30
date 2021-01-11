
const spaceController = document.getElementById('spacing');
const blurController = document.getElementById('blur');
const colorController = document.getElementById('base');
const image = document.querySelector('img');

// Handling Spacing
function handleSpace(){
    const currentSpace = spaceController.value;
    console.log(currentSpace);
    image.style.margin = `${parseInt(currentSpace)}px`;
}

// Handling Image Blur
function handleBlurStyle(){
    const currentInputValue = blurController.value;
    image.style.filter = `blur(${parseInt(currentInputValue)}px)`;
}

function init(){
    spaceController.addEventListener('input', handleSpace);
    blurController.addEventListener('input',handleBlurStyle);
}

init();