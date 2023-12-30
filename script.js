"use strict";

const timer_element = document.getElementById("timer");
const btn_start = document.getElementById("start");
const btn_pause = document.getElementById("pause");
const btn_reset = document.getElementById("reset");

// Initialization
const init = function () {
  timer_element.textContent = "00:00:00";
};

init();

// timer value variables
let [seconds, minutes, hours] = [0, 0, 0];
let timer_time = null;

// stop watch increment function
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

// function that starts the timer
const watch_start = function () {
  if (timer_time !== null) {
    clearInterval(timer_time);
  }
  timer_time = setInterval(stopwatch, 1000);
};

const watch_pause = function () {
  clearInterval(timer_time);
};

const watch_reset = function () {
  clearInterval(timer_time);
  [seconds, minutes, hours] = [0, 0, 0];
  timer_element.innerHTML = "00:00:00";
};

btn_start.addEventListener("click", watch_start);
btn_pause.addEventListener("click", watch_pause);
btn_reset.addEventListener("click", watch_reset);
