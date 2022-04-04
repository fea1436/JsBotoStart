// Map

const myMap = new Map();
myMap.set({a : 1}, "Amir");
myMap.set([1, 2], "Ali");
myMap.set("age", "47");

console.log(myMap.get("age"));
console.log(myMap.size);
console.log(myMap);
// myMap.delete("age");
// console.log(myMap);
// myMap.clear();

console.log(myMap.has("age"));
console.log(myMap.has("age2"));