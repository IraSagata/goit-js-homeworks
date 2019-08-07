//Задание 5

function formatString(string) {
  let lenghtOfString = string.length;
  if (lenghtOfString > 40) {
    let makeNewString = string.slice(0, 40);
    string = makeNewString + "...";
  }
  return string;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
