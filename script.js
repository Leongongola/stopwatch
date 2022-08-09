
let seconds = 0;
let interval = null;

//global variables
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const second = document.getElementById('seconds');


var startTimer = document.getElementById('start-timer');
var stopTimer = document.getElementById('stop-timer');
var resetTimer = document.getElementById('reset-timer');

function startWatch(){
 seconds++;

  let hourCode = Math.floor(seconds/3600);
  let minuteCode = Math.floor((seconds - (hourCode *3600)) / 60);
  let secondCode = Math.floor(seconds % 60);

  hours.innerText = hourCode < 10 ? "0" + hourCode : hourCode;
  minutes.innerText = minuteCode < 10 ? "0" + minuteCode : minuteCode;
  second.innerText = secondCode < 10 ? "0" + secondCode : secondCode;
}

//event listeners
startTimer.addEventListener('click', start);
stopTimer.addEventListener('click', stop);
resetTimer.addEventListener('click', resetAll);


function start(){
  if (interval){
    return;
  }
  interval = setInterval(startWatch, 1000);
}

function stop(){
  clearInterval(interval);
  interval = null
}
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

