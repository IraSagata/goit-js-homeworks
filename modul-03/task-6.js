//Задание 6

// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов
// и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const appp = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];
function calculateTotalPrice(arr, productName) {
  for (const product of arr) {
    if (product.name === productName) {
      let total = product.price * product.quantity;
      return total;
    }
  }
}
console.log(calculateTotalPrice(appp, "Радар")); // 5200

console.log(calculateTotalPrice(appp, "Дроид")); // 2800
