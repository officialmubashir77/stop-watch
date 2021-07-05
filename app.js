let hourHeading = document.getElementById('hour');
let minHeading = document.getElementById('min');
let secHeading = document.getElementById('sec');
let msecHeading = document.getElementById('msec');
let interval;
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
// console.log(hour.innerHTML);
// console.log(min.innerHTML);
// console.log(sec.innerHTML);
// console.log(msec.innerHTML);

let hour = 00, min = 00, sec = 00, msec = 00;
function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec == "100") {
        sec++;
        secHeading.innerHTML = sec;
        msec = "00";
    }
    if (sec == "60") {
        min++;
        minHeading.innerHTML = min;
        sec = "00";
    }
    if (min == "60") {
        hour++;
        hourHeading.innerHTML = hour;
        min = "00";
    }
}


function start() {
    interval = setInterval(timer, 10);
    // console.log(start);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
}

function stop() {
    clearInterval(interval);
    // console.log(stop);
    stopBtn.disabled = true;
    startBtn.disabled = false;
   
}

function reset() {
    clearInterval(interval);
    // console.log(reset);
    hourHeading.innerHTML = "00"
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    hour = 00, min = 00, sec = 00, msec = 00;
    startBtn.disabled = false;
    stopBtn.disabled = false;
   
}