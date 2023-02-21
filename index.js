let timerInterval;
let timer = false;
let miliSecElement = document.getElementById("mili-second");
let secElement = document.getElementById("second");
let minElement = document.getElementById("min");

function runTimer() {
  let miliSec = parseInt(miliSecElement.innerText, 10);
  let sec = parseInt(secElement.innerText, 10);
  let min = parseInt(minElement.innerText, 10);
  miliSecElement.innerText = (miliSec + 1).toString().padStart(2, "0");

  if (miliSec === 10) {
    secElement.innerText = (sec + 1).toString().padStart(2, "0");
    miliSecElement.innerText = "00";
  }
  if (sec === 59) {
    minElement.innerText = (min + 1).toString().padStart(2, "0");
    secElement.innerText = "00";
  }
}

function startTimer() {
  if (!timer) {
    timerInterval = setInterval(runTimer, 100);
    timer = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timer = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  miliSecElement.innerText = "00";
  secElement.innerText = "00";
  minElement.innerText = "00";
  timer = false;
}
