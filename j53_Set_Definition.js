// Set like python is a collection without repeated element
// if you add an element to set that already added
// Set ignored that element

const mySet = new Set();

// ADD a new element
mySet.add(1); // mySet is {1}
mySet.add(2); // mySet is {1, 2}
mySet.add(3); // mySet is {1, 2, 3}
mySet.add(4); // mySet is {1, 2, 3, 4}
mySet.add(1); // mySet is {1, 2, 3, 4}
mySet.add(2); // mySet is {1, 2, 3, 4}
mySet.add(5); // mySet is {1, 2, 3, 4}
console.log(mySet);

// get SIZE of Set
console.log(`There are ${mySet.size} element in mySet`);


// LOOP in Set
mySet.forEach(element => {
    console.log(element);
});


// REMOVE an element
mySet.delete(4);
console.log(mySet);


// QUERY about an element
let result = mySet.has(2);
console.log(`2 is in set: ${result}`);
result = mySet.has(5);
console.log(`5 is in set: ${result}`);

// REMOVE all elements in a set
mySet.clear();
console.log(mySet);