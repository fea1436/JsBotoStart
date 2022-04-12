// replace any 5 letter phrase with another
const text = "Hi I am Ehsan";
const regex = /[A-Za-z]{5}/;
const newText = text.replace(regex, 'Ali');
console.log(newText);