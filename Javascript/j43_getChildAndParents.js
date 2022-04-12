const tag = document.querySelector(".container");
console.log(tag);
console.log(tag.children);


console.log("-----------------");
const nextTag = tag.nextElementSibling;
console.log(nextTag);

console.log("-----------------");
const prevTag = nextTag.previousElementSibling;
console.log(prevTag);


console.log("-----------------");
const listTag = document.querySelector("ul");
console.log(listTag);
console.log(listTag.children);
console.log(listTag.firstElementChild.innerText);
console.log(listTag.lastElementChild.innerText);


console.log("-----------------");
const pTag = document.querySelector(".paragraph");
console.log(pTag.parentElement);
console.log(pTag.parentElement.parentElement);
console.log(pTag.parentElement.parentElement.parentElement);

