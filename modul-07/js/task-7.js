"use strict";
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании
//  ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const validInput = document.querySelector("#font-size-control");
const validText = document.querySelector("#text");

validInput.value = 14;

validInput.addEventListener("input", function() {
  validText.style.fontSize = `${validInput.value}px `;
});
