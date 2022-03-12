//  ------------------------------------------------------
//  ---------------  single selectors  -------------------
//  ------------------------------------------------------

// select h1 ==> incorrect
// console.log(document.all[8]);

// const header = document.getElementById("header");
// header.innerHTML = "<i>Ehsan</i>"
// header.innerText= "Ehsan"
// console.log(header);


// query selector can give "ID name" or "Class name" or "tag name" 
// query selector gve first element that satysfing our condition

// you should specify class by (.)
//                    id by (#)
//                    tag by dont specify anything
// const header = document.querySelector("h1");
// const header = document.querySelector("#header");
// const header = document.querySelector(".text");

// const header = document.querySelector("h1");
// header.innerHTML = "<i>Raha</i>"
// header.innerText= "Raha"
// console.log(header);





//  ------------------------------------------------------
//  ---------------  multi selectors  -------------------
//  ------------------------------------------------------

const selected = document.getElementsByClassName("text");
console.log(selected);

const selectedTag = document.getElementsByTagName("h1");
console.log(selectedTag);


const seletedAll = document.querySelectorAll("h1");
console.log(seletedAll);

