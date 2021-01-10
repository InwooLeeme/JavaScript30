const hourBar = document.querySelector('.hours');
const minuteBar = document.querySelector('.minutes');
const secondBar = document.querySelector('.seconds');


// Get Current Time function
function getCurrentTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const tranHourDeg = (hour * 30) + 90;
    const transMinDeg = (minute * 6) + 90;
    const transSecDeg = (seconds * 6) + 90;
    hourBar.style.transform = `rotate(${tranHourDeg}deg)`;
    minuteBar.style.transform = `rotate(${transMinDeg}deg)`;
    secondBar.style.transform = `rotate(${transSecDeg}deg)`;
}

function init(){
    setInterval(getCurrentTime, 1000);
}

init();