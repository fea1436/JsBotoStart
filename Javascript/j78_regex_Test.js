const regex = /\w{5}/g;
const testText = "Hi I am Ehsan and I am 24 years old";

console.log(`Regex validation on "${testText}" is ${regex.test(testText)}`);