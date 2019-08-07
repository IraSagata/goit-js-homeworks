//Задание 1

// Удалить первый элемент массива
const users = ["Mango", "Poly", "Ajax", "Chelsey"];
users.shift();
console.log(users);

// Удалить последний элемент массива
users.pop();
console.log(users);

// Добавить в начало массива пользователя "Lux"
users.unshift("Lux");
console.log(users);

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push("Jay", "Kiwi");
console.log(users);

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = users.splice(2, 1);
console.log(userToDelete);
console.log(users);

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore
const userToInsert = "Kong";
const insertBefore = "Jay";
users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users);
