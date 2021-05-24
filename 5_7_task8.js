// Задание 8.
// Создайте произвольный массив Map.Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let map = new Map();

console.log(map);

map.set("10", "string");
map.set(56, "number");
map.set(false, "boolean");

for (let key of map.keys()) {
  console.log(`Ключ - ${key}, значение - ${map.get(key)}`);
}
