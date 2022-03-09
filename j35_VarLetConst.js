//  You can not change value that defined by CONST
//  Except  OBJECT  or  ARRAY

const person = { name: "Ehsan", mobile: "0939***3366"};
console.log(`Person Name:     ${person.name}`);
console.log(`Person Mobile:   ${person.mobile}`);
person.name = "Ali";
person.mobile = "0939***6633";
console.log(`Person Name:     ${person.name}`);
console.log(`Person Mobile:   ${person.mobile}`);

const array = [10, 12, 18, 11, 20, 14];
console.log(`Array[2] Value: ${array[2]}`);
array[2] = 17;
console.log(`Array[2] Value: ${array[2]}`);
console.log(`Array[4] Value: ${array[4]}`);
array[4] = 18;
console.log(`Array[4] Value: ${array[4]}`);
console.log(`Array[0] Value: ${array[0]}`);
array[0] = 11;
console.log(`Array[0] Value: ${array[0]}`);
