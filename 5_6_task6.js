// Задание 6.
// Дан массив.Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.Проверить, все ли элементы в массиве одинаковые.

let array = [23, 23, '23', 23, '23'];

console.log('Массив: ', array);

let firstElement = array[0];

let result = true;

for (let i = 0; i < array.length; i++) {
  if (array[i] !== firstElement) result = false;
}

if (result === true) console.log('Все элементы массива одинаковы')
else console.log('Элементы массива не одинаковы')