//Задание 3

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
message = prompt("Введіть пароль!");
if (message === null) {
  alert("Отменено пользователем!");
} else if (message === ADMIN_PASSWORD) {
  let message = `Добро пожаловать!`;
  alert(message);
} else {
  let message = "Доступ запрещен, неверный пароль!";
  alert(message);
}
alert(message);
