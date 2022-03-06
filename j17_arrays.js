let names = ["Amir", "Thomas", "Ali"];
console.log(names[0]);
console.log(names);

names.push("Peaky");
console.log(names);

names.unshift("Katrin");
console.log(names);


// Pop removes from End
console.log(names.pop());
console.log(names);
console.log(names.pop());
console.log(names);

// Shift removes from Begining
console.log(names.shift());
console.log(names);
console.log(names.shift());
console.log(names);

// Restart Array with elements
names = ["Amir", "Thomas", "Ali"];
names.push("Peaky");
names.unshift("Katrin");
console.log(names);


// Remove elements by INITIAL_ELEMENT and STEPS
console.log(names.splice(2, 2));
console.log(names);
console.log('\n\n');

// Sort Array
// SORT doesn't work for numbers!!!
// and
// Only works for letters
const numbers = [24, 17, 37, 6, 46, 13];
console.log(numbers.sort());
console.log('\n\n');


// Reverese
console.log(numbers.reverse());
console.log('\n\n');

// Concatenate two arrays
console.log(names.concat(numbers));


let arrayNames = ["Amir", "Ehsan", "Iman"];
let arrayNumbers = [1359, 1362, 1368];
let arrayAges = [41, 38, 32];

// Spread Operator
// concatenate multiple arrays and attach new values
let newArray = [...arrayNames, ...arrayNumbers, ...arrayAges, "Hi To All"];
console.log(newArray);

