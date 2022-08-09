
let seconds = 0;
let interval = null;

//global variables
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const second = document.getElementById('seconds');

// creating var in javascript for start, stop, reset through their ID's
var startTimer = document.getElementById('start-timer');
var stopTimer = document.getElementById('stop-timer');
var resetTimer = document.getElementById('reset-timer');

//function that starts the stopwatch
function startWatch(){
  //seonds will keep adding each time the function is run
 seconds++;

  let hourCode = Math.floor(seconds/3600);
  let minuteCode = Math.floor((seconds - (hourCode *3600)) / 60);
  let secondCode = Math.floor(seconds % 60);

  //if hours, minutes and seconds are below ten then add a zero in front of it.
  hours.innerText = hourCode < 10 ? "0" + hourCode : hourCode;
  minutes.innerText = minuteCode < 10 ? "0" + minuteCode : minuteCode;
  second.innerText = secondCode < 10 ? "0" + secondCode : secondCode;
}

//event listeners
startTimer.addEventListener('click', start);
stopTimer.addEventListener('click', stop);
resetTimer.addEventListener('click', resetAll);

//function to start the stop watch
function start(){
  //return interval if its already running if not running it uses the code below interval == setInterval(startWatch, 1000)
  if (interval){
    return;
  }
  //the function startwatch will repeat every 1000 millisecond which is one second
  interval = setInterval(startWatch, 1000);
}

//function to puase or stop the stopwatch
function stop(){
  clearInterval(interval);
  interval = null
}

//function to reset the stopwatch to 00 00 00
function resetAll(){
  stop();
  seconds = 0;
  hours.innerText = '00';
  minutes.innerText = '00';
  second.innerText = '00';
}












