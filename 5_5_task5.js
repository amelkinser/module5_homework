// Задание 5.
// Дан произвольный массив.Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let array = [23, '678dd', undefined, 34, 1, 90, 'ff', 14];

console.log('Массив: ', array);

console.log('Kоличество элементов массива: ', array.length);

console.log('Элементы массива: ');
for (let i = 0; i < array.length; i++) console.log(`${i} -> ${array[i]}`);