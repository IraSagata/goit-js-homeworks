"use strict";
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
console.log("task-4");
const counterValue = document.getElementById("value");
const newDecrement = document.querySelector('[data-action="decrement"]');
const newIncrement = document.querySelector('[data-action="increment"]');
let newCounterValue = 0;
const plusOne = function() {
  newCounterValue += 1;
  counterValue.textContent = newCounterValue;
};
const minusOne = function() {
  newCounterValue -= 1;
  counterValue.textContent = newCounterValue;
};
newIncrement.addEventListener("click", plusOne);
newDecrement.addEventListener("click", minusOne);
