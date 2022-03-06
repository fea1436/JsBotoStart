let names = [["Amir", "Ehsan", "Iman"], ["Hesam", "Hamid"]];

//Concatenate two arrays
// console.log(names.concat(numbers));

// let childsSeriesOne = names.shift();
// console.log(childsSeriesOne);

// let childsSeriesTwo = names.shift();
// console.log(childsSeriesTwo);


// Concatenate Arrays With "CONCAT"
// let childsAll = childsSeriesOne.concat(childsSeriesTwo);
// console.log(childsAll);





let childsSeriesOne = names.pop();
console.log(childsSeriesOne);

let childsSeriesTwo = names.pop();
console.log(childsSeriesTwo);

// Concatenate Arrays With "SPREAD"
let childsAll = [...childsSeriesOne, ...childsSeriesTwo];
console.log(childsAll);

console.log(childsAll.sort());

console.log(`Hi ${childsAll[1]}`);