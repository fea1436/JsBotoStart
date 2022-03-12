const userData = [
    { name: "Iman", marks: [11, 8, 7, 6, 9]},
    { name: "Reza", marks: [19, 17, 18, 20, 19]},
    { name: "Sara", marks: [14, 13, 16, 15, 11]},
    { name: "Nazi", marks: [4, 11, 7, 3, 5]},
    { name: "Lili", marks: [17, 14, 15, 11, 11]},
    { name: "Raha", marks: [20, 18, 20, 20, 19]},
];

// ------------------------------------------------
// ------------------  Method #1 ------------------
// ------------------------------------------------

// let userDataChangedMethodOne = [];
// let i = 0;
// userData.forEach(element => {    
//     const result = element.marks.reduce((acc, cur) => acc + cur, 0);
//     const rate = result / element.marks.length;
//     const name = element.name;
//     console.log(`Rate of ${element.name} is ${rate}`);

//     if (rate >= 10){
//         const newObject = new Object();
//         newObject.name = name;
//         newObject.marks = element.marks;
//         newObject.rate = rate;
    
//         userDataChangedMethodOne[i] = newObject;
//         i++;
//     }    
// });



// ------------------------------------------------
// ------------------  Method #2 ------------------
// ------------------------------------------------

let userDataChangedMethodTwo = userData.map(item => {
    const result = item.marks.reduce((acc, cur) => acc + cur, 0);
    const rate = result / item.marks.length;
    console.log(`Rate of ${item.name} is ${rate}`);

    item.rate = rate;
    return item;
});

console.log(userDataChangedMethodTwo);

const userDataChangedMethodTwoFiltered = userDataChangedMethodTwo.filter(item => item.rate >= 10);
console.log(userDataChangedMethodTwoFiltered);