const hourBar = document.querySelector('.hours');
const minuteBar = document.querySelector('.minutes');
const secondBar = document.querySelector('.seconds');


// Get Current Time function
function getCurrentTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
}

function init(){
    setInterval(getCurrentTime, 1000);
}

init();