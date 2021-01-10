const hourBar = document.querySelector('.hours');
const minuteBar = document.querySelector('.minutes');
const secondBar = document.querySelector('.seconds');


// Get Current Time function
function getCurrentTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const transSecDeg = (seconds * 6) + 90;
    secondBar.style.transform = `rotate(${transSecDeg}deg)`;
}

function init(){
    setInterval(getCurrentTime, 1000);
}

init();