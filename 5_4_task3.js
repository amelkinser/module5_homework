
// Задание 3.
// Дана строка.Необходимо вывести в консоль перевёрнутый вариант.Например, "Hello" -> "olleH".

let str = "Hello";

let array = str.split(""); // строка разбита на массив символов
// console.log(array);

let arrayRev = array.reverse(); // элементы массива поменялись местами
// console.log(arrayRev);

let strResult = `Перевёрнутая строка: ${arrayRev.join("")}`;
console.log(strResult);
