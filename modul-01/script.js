//Задание 1

let name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
price = 2000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

//Задание 2

const total = 100;
const ordered = 50;
if (total < ordered) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

//Задание 3

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
message = prompt("Введіть пароль!");
if (message === null) {
  alert("Отменено пользователем!");
} else if (message === ADMIN_PASSWORD) {
  let message = `Добро пожаловать!`;
  alert(message);
} else if (message !== ADMIN_PASSWORD) {
  let message = "Доступ запрещен, неверный пароль!";
  alert(message);
}
alert(message);

//Задание 4

const credits = 23580;
const pricePerDroid = 3000;

let message = prompt("Количество дроидов которые пользователь хочет купить");
  let totalPrice =  message * pricePerDroid;
if (message === null) {
  alert("Отменено пользователем!");
} if else (totalPrice > credits){
  console.log('Недостаточно средств на счету!');
} else {
   alert(`Выбран ${message} дроидов, на счету осталось ${credits - totalPrice} кредитов`);

}

//Задание 5

const CHINA = 100;
const CHILY = 250;
const AUSTRALIA = 170;
const INDIA = 80;
const JAMAICA = 120;
const promptLable = `Выбери країну ${CHINA} - Китай, ${CHILY} - Чілі, ${AUSTRALIA} - Австралія, ${INDIA} - Індія, ${JAMAICA} - Ямайка`;
const userChoice = prompt(promptLable);
switch (userChoice) {
  case CHINA:
    alert(`Доставка в Японію будет стоить ${CHINA} кредитов`);
    break;

  case CHILY:
    alert(`Доставка в Японію будет стоить ${CHILY} кредитов`);
    break;

  case AUSTRALIA:
    alert(`Доставка в Японію будет стоить ${AUSTRALIA} кредитов`);
    break;

  case INDIA:
    alert(`Доставка в Японію будет стоить ${INDIA} кредитов`);
    break;

  case JAMAICA:
    alert(`Доставка в Японію будет стоить ${JAMAICA} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

//Задание 6

let sum = 0;
while (true) {
  let value = +prompt("Введіть число", "");
  if (!value) break;
  sum += value;
}
alert("Сума: " + sum);
