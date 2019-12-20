"use strict";
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
console.log("task-1");
const categoriesList = document.querySelector("#categories");
const listItem = document.querySelectorAll(".item");
let elementCount = listItem.childElementCount;
console.log(`There are ${elementCount} items in a list`);
for (let i = 0; i < listItem.length; i += 1) {
  console.log(
    `Category: ${listItem[i].children[0].textContent}, number of items: ${listItem[i].children[1].childElementCount}`
  );
}
