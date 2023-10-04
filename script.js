const startButton = document.querySelector(".start")
const timeMinute = document.querySelector(".minute-time")
const timeSecond = document.querySelector(".time-second")
const timeMillisecond = document.querySelector(".time-millisecond")
const stopButton = document.querySelector (".stop")
const resetButton = document.querySelector(".reset")
const recordButton = document.querySelector(".engraved-number")


let minute = 0
let second = 0
let millisecond = 0
let tempo = 0
// Teste Gravar
let marks = [] ;

let cron

//Função de start
function startCounting() {
    stop();
    cron = setInterval(() => { timer(); }, 10);
  }
  
//Função stop
function stop(){
    clearInterval(cron)
}

//Função reset
function reset() {
    minute = 0;
    second = 0;
    millisecond = 0;
    document.querySelector('.minute-time').innerText = '00';
    document.querySelector('.time-second').innerText = '00';
    document.querySelector('.time-millisecond').innerText = '00';
  }

//Função gravar



//Função de arredondar o tempo
  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }

    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 60;
    }
    
    document.querySelector('.minute-time').innerText = returnData(minute);
    document.querySelector('.time-second').innerText = returnData(second);
    document.querySelector('.time-millisecond').innerText = returnData(millisecond);
  }
  
  //Função de adicionar o 0
  function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }


resetButton.addEventListener("click", reset)
stopButton.addEventListener("click", stop)
startButton.addEventListener("click", startCounting)
