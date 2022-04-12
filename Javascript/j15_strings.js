const string = "Ehsan";
console.log(`Your string length is: ${string.length}`);

console.log(`Character in position '0' is: ${string[0]}`);
console.log(`Character in position '1' is: ${string[1]}`);
console.log(`Character in position '2' is: ${string[2]}`);
console.log(`Character in position '3' is: ${string[3]}`);
console.log(`Character in position '4' is: ${string[4]}`);
console.log('\n\n');

console.log(`Your name in Lower Case: "${string.toLowerCase()}"`);
console.log(`Your name in Upper Case: "${string.toUpperCase()}"`);
console.log('\n\n');

console.log(`Index of "e" in your string is: ${string.toUpperCase().indexOf(string[0].toUpperCase())}`);
console.log(`Index of "h" in your string is: ${string.toUpperCase().indexOf(string[1].toUpperCase())}`);
console.log(`Index of "s" in your string is: ${string.toUpperCase().indexOf(string[2].toUpperCase())}`);
console.log(`Index of "a" in your string is: ${string.toUpperCase().indexOf(string[3].toUpperCase())}`);
console.log(`Index of "n" in your string is: ${string.toUpperCase().indexOf(string[4].toUpperCase())}`);
console.log(`Index of "k" in your string is: ${string.indexOf('k')}`);
console.log('\n\n');

console.log(`1st character in your name is:  ${string.charAt(0)}`);
console.log(`2nd character in your name is:  ${string.charAt(1)}`);
console.log(`3rd character in your name is:  ${string.charAt(2)}`);
console.log(`4th character in your name is:  ${string.charAt(3)}`);
console.log(`5th character in your name is:  ${string.charAt(4)}`);
console.log('\n\n');

console.log(`Substring from 2 to end is: ${string.substring(2)}`);
console.log(`Substring from 2 to 3 is: ${string.substring(2, 4)}`);
console.log('\n\n');

const newString = string.split("");
console.log(`Splitting string is ${newString}`);
console.log(newString);
const newNewString = string.split("a");
console.log(`Splitting string is ${newNewString}`);
console.log(newNewString);
console.log('\n\n');

const replacedString = string.replace("Ehs", "Asc");
console.log(replacedString);
console.log('\n\n');


let searchString = "an";
console.log(string.includes(searchString));
searchString = "ka";
console.log(string.includes(searchString));
console.log('\n\n');