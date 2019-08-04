//Задание 7

let input;
let numbers = [];
let total = 0;
for (let i = 0; i <= numbers.length; i += 1) {
  input = +prompt("Введи число");
  numbers.push(Number(input));
  total += numbers[i];
  if (input === null) {
    console.log(`Загальна сума: ${total}`);
    break;
  }
}
