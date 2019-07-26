//Задание 6

let sum = 0;
while (true) {
  let value = +prompt("Введіть число", "");
  if (!value) break;
  sum += value;
}
alert("Сума: " + sum);
