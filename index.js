let secTimer;
let timer = false;
let secElement = document.getElementById("second");
let minElement = document.getElementById("min");

function runTimer() {
  let sec = parseInt(secElement.innerText, 10);
  secElement.innerText = (sec + 1).toString().padStart(2, "0");
  if (sec === 59) {
    let min = parseInt(minElement.innerText, 10);
    minElement.innerText = (min + 1).toString().padStart(2, "0");
    secElement.innerText = "00";
  }
}

function startTimer() {
  if (!timer) {
    secTimer = setInterval(runTimer, 1000);
    timer = true;
  }
}

function stopTimer() {
  clearInterval(secTimer);
  timer = false;
}

function resetTimer() {
  clearInterval(secTimer);
  secElement.innerText = "00";
  minElement.innerText = "00";
  timer = false;
}
