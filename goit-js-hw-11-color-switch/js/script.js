"use strict";
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
let timer;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function stopChangeColor() {
  startButton.removeAttribute("disabled");
  clearInterval(timer);
}
function changeColor() {
  startButton.setAttribute("disabled", "");
  timer = setInterval(e => {
    const color = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[color];
    //console.log(color);
  }, 1000);
}
startButton.addEventListener("click", changeColor);
stopButton.addEventListener("click", stopChangeColor);
