//Задание 6

function checkForSpam(str) {
  let stringToLowerCase = str.toLowerCase();
  let a =
    stringToLowerCase.includes("spam") || stringToLowerCase.includes("sale");
  return a;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
