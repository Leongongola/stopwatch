var timer = 0;
var timerInterval;

var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var ms = document.getElementById('ms');


function start() {
    stop();
    timerInterval = setInterval(function() {
      timer += 1/60;
      hourVal = Math.floor(timer/3600);
      secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
      minuteVal = Math.floor(timer/60);
      msVal =  Math.floor((timer - Math.floor(timer))*100);;
      seconds.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
      minutes.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
      hours.innerHTML = hourVal < 60 ? "0" + hourVal.toString() : hourVal;
      ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
    }, 1000/60);

    if (minutes.innerHTML = "60"){
      minutes.innerHTML = "0"
    }
  }


function stop() {
    clearInterval(timerInterval);
  }

function resetAll(){
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  ms.innerHTML = "00";
}

