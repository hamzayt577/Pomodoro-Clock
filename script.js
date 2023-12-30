"use strict";

const timer_element = document.getElementById("timer");
const btn_start = document.getElementById("start");
const btn_pause = document.getElementById("pause");
const btn_reset = document.getElementById("reset");

// Initialization
const init = function () {
  timer_element.textContent = "00:00";
};

init();

let [seconds, minutes, hours] = [0, 0, 0];
let timer_time = null;

const stopwatch = function () {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? `0${hours}` : `${hours}`;
  let m = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let s = seconds < 10 ? `0${seconds}` : `${seconds}`;

  timer_element.innerHTML = `${h}:${m}:${s}`;
};

const watch_start = function () {
  if (timer_time !== null) {
    clearInterval(timer);
  }
  setInterval(stopwatch, 1000);
};

btn_start.addEventListener("click", watch_start);
