
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










// function start() {
//     stop();
//     timerInterval = setInterval(function() {
//       timer += 1/60;
//       hourVal = Math.floor(timer/3600);
//       secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
//       minuteVal = Math.floor(timer/60);
//       msVal =  Math.floor((timer - Math.floor(timer))*100);;
//       seconds.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
//       minutes.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
//       hours.innerHTML = hourVal < 10 ? "0" + hourVal.toString() : hourVal;
//       ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
//     }, 1000/60);

//   }


// function stop() {
//     clearInterval(timerInterval);
//   }

// function resetAll(){
//   hours = 0;
//   minutes = 0;
//   seconds = 0;
//   ms = 0;
//  clearTimeout(timerInterval);
// }

