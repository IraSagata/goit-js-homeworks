"use strict";
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане
// должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
console.log("task-5");
const newInput = document.querySelector("#name-input");
const newOutput = document.querySelector("#name-output");
newInput.addEventListener("input", function(event) {
  if (event.target.value === "") {
    newOutput.textContent = "незнакомец";
  } else {
    newOutput.textContent = event.target.value;
  }
});
