// Задание 4.
// Записать в переменную случайное целое число в диапазоне[0; 100].Используйте объект Math.

let rand = Math.random();
// console.log(rand);

rand = rand * 101;
// console.log(rand);

rand = `Cлучайное целое число в диапазоне[0; 100]: ${Math.floor(rand)}`;
console.log(rand);