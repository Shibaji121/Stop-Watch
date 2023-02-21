let timerInterval; //Timer variable to use set and clear interval
let timer = false; // a boolean to check timer is running or not

// Declaring all the time elements
let miliSecElement = document.getElementById("mili-second");
let secElement = document.getElementById("second");
let minElement = document.getElementById("min");

// function to run the timer
function runTimer() {
  let miliSec = parseInt(miliSecElement.innerText, 10);
  let sec = parseInt(secElement.innerText, 10);
  let min = parseInt(minElement.innerText, 10);
  miliSecElement.innerText = (miliSec + 1).toString().padStart(2, "0");

  if (miliSec === 99) {
    if (sec !== 59) {
      secElement.innerText = (sec + 1).toString().padStart(2, "0");
    }
    miliSecElement.innerText = "00";
  }
  if (sec === 59 && miliSec === 99) {
    minElement.innerText = (min + 1).toString().padStart(2, "0");
    secElement.innerText = "00";
  }
}

// Function will execute after clicking Start button
function startTimer() {
  if (!timer) {
    timerInterval = setInterval(runTimer, 10);
    timer = true;
  }
}

// Function to be executed after clicking the stop button
function stopTimer() {
  clearInterval(timerInterval);
  timer = false;
}

// Function to be executed after clicking the reset button
function resetTimer() {
  clearInterval(timerInterval);
  miliSecElement.innerText = "00";
  secElement.innerText = "00";
  minElement.innerText = "00";
  timer = false;
}
