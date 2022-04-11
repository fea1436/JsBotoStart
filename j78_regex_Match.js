const anyText = "Hi I am Ehsan and I am 24 years old";

// without any flag
// because here has not Global(g) flag 
// return array only contain "Ehsan" and not "years"
const regexZero = /\w{5}/;
console.log(anyText.match(regexZero));


// global flag
// here has Global(g) flag 
// return array only contain "Ehsan" and "years"
const regexOne = /\w{5}/g;
console.log(anyText.match(regexOne));


// global flag   &    case insensitive flag 
// case-insensitive thus return array contain "Ehsan"
const regexTwo = /ehsan/gi;
console.log(anyText.match(regexTwo));