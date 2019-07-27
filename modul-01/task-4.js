//Задание 4

let credits = 23580;
const pricePerDroid = 3000;
let message = prompt("Количество дроидов которые пользователь хочет купить");
let totalPrice = message * pricePerDroid;
if (message === null) {
  alert("ОПА");
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else if (Number.isNaN(+message)) {
  alert("Введіть число!");
} else if (totalPrice <= credits) {
  alert(
    `Вы купили ${message} дроидов, на счету осталось ${credits -
      totalPrice} кредитов!`
  );
}
