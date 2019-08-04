//Задание 6

function checkForSpam(str) {
  let stringToArrey = str.toLowerCase().split(" ");
  for (let i = 0; i < stringToArrey.length; i++) {
    let word = stringToArrey[i];
    if (word == "spam" || word == "sale" || word == "[spam]") {
      return true;
    }
  }
  return false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
