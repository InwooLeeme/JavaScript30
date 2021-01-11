
const spaceController = document.getElementById('spacing');
const blurController = document.getElementById('blur');
const colorController = document.getElementById('base');
const jsSymbol = document.querySelector('.hl');
const image = document.querySelector('img');

// Handling Spacing
function handleSpace(){
    const currentSpace = spaceController.value;
    image.style.margin = `${parseInt(currentSpace)}px`;
}

// Handling Image Blur
function handleBlurStyle(){
    const currentInputValue = blurController.value;
    image.style.filter = `blur(${parseInt(currentInputValue)}px)`;
}

// Handling Image Space Color
function hanldeSpaceColor(){
    const currentColor = colorController.value;
    image.style.border = `1rem solid ${currentColor}`;
    jsSymbol.style.color = `${currentColor}`;
}

function init(){
    spaceController.addEventListener('input', handleSpace);
    blurController.addEventListener('input',handleBlurStyle);
    colorController.addEventListener('input',hanldeSpaceColor);
}

init();