import sum, { name, sayHi } from "./j65_import_export_source.js"


// Import by NAMED method
console.log(name);
sayHi();


// Import by DEFAULT method
// in the default method you can import ONLY ONE ITEM 
// (One Property    or   One Method)
// Without curley brackets 

console.log(sum(4, 5));