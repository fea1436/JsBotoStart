const anchor = document.getElementById("anchor");
console.log(anchor.id);
console.log(anchor.className);
console.log(anchor.classList);
console.log(anchor.href);
console.log(anchor.innerText);

anchor.href = "https://bki.ir";
anchor.id = "bkiId";

console.log(anchor.id);
console.log(anchor.href);




// When you select an element by class
// because of return value is a LIST
// you should select an element from array
// compare output of method#1 and method#2

// Method #1   ===>  Return value is "Undefined"
const p1 = document.getElementsByClassName("paragraph");
console.log(`Method#1 output:  ${p1.className}`);
console.log(`Method#1 output:  ${p1.innerHTML}`);
console.log(`Method#1 output:  ${p1.innerText}`);

// Method #1   ===>  Return value is "An Element"
const p2 = document.getElementsByClassName("paragraph");
console.log(`Method#2 output:  ${p2[0].className}`);
console.log(`Method#2 output:  ${p2[0].innerHTML}`);


const p3 = document.getElementById("testPWithSpan");
console.log(p3.innerHTML);
console.log(p3.innerText);

p3.innerText = "Milad";         // Only change text
p3.innerHTML = "<i>Milad</i>";  // apply italic style and change text


const header = document.getElementsByClassName("header");
console.log(header[0].innerText);
console.log(header[1].innerText);
console.log(header[2].innerText);

header[0].style.color = "#ff00ff";
header[0].style.background = "silver";
header[0].style.fontSize = "3rem";

header[1].style.color = "#ff0f00";
header[2].style.color = "#ef00b0";