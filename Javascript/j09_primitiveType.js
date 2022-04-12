//Prmitive Types:   String, Number, Boolean, Undefined, Null
//Prmitive Type Compared by Values

const name1 = "Ehsan";
const name2 = "Ehsan";
console.log(name1 == name2);





//Reference Type:    Array, Object
//Reference Type Compared by Memory Address

const array1 = ["Ehsan", 39];
const array2 = ["Ehsan", 39];
console.log(array1 == array2);

const Person1 = { name: "Jaafar", age: 71 };
const Person2 = { name: "Jaafar", age: 71 };
console.log(Person1 == Person2);

const AnotherPerson1 = { name: "Jaafar", age: 71 };
const AnotherPerson2 = AnotherPerson1;
console.log(AnotherPerson1 == AnotherPerson2);