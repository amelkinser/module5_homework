// Задание 1.
// Напишите программу, которая работала бы следующим образом: в prompt вводится значение.С помощью унарного плюса(арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// * NaN, хоть и относится к типу Number, числом не является.Добавьте отдельную проверку для этого значения.

let inputVal = prompt("Пожалуйста, введите числовое значение")

let resultVal = +inputVal;
// console.log(resultVal);

let typeVal = typeof resultVal;
// console.log(typeVal);

let isNane = isNaN(resultVal);
// console.log(isNane);

if (isNane === true) {
  console.log("Упс, кажется, вы ошиблись")
}
else {
  if (typeVal === "number") {
    if (resultVal === 0) console.log("Было введено нулевое значение")
    else {
      let result = resultVal % 2;
      if (result === 0) console.log("Было введено чётное значение")
      else console.log("Было введено нечётное значение")
    }
  }
}