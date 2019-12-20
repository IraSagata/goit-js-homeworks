"use strict";
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов
//используй document.createElement().
console.log("task-2");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ul = document.querySelector("#ingredients");

const createLi = text => {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
};

const arrayIngredients = [];

const createIngredients = ingredients.forEach(item => {
  arrayIngredients.push(createLi(item));
});

ul.prepend(...arrayIngredients);
