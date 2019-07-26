//Задание 5

const CHINA = 100;
const CHILY = 250;
const AUSTRALIA = 170;
const INDIA = 80;
const JAMAICA = 120;
const promptLable = `Выбери країну ${CHINA} - Китай, ${CHILY} - Чілі, ${AUSTRALIA} - Австралія, ${INDIA} - Індія, ${JAMAICA} - Ямайка`;
let userChoice = prompt(promptLable);
if (userChoice === null) {
  alert("ОПА");
} else {
  userChoice = Number(userChoice);
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
}
