// Synchronous  vs   Asynchronous

// -----------------------------
// Part #1 --- Synchronous Data
// -----------------------------
// console.log("Start");
// for(let i=0; i<10; i++) {
//     console.log(i);
// }
// console.log("End");


// ----------------------------------------------------------------
// Part #2 --- Synchronous Data --- But returned data as UNDEFINED
// ----------------------------------------------------------------
// console.log("Start");

// function getUserData() {
//     setTimeout(() => {
//         console.log("User Data Now Returned.")
//         return {
//             name: "Karlos",
//             email: "katoshi@yahoo.com"
//         }
//     }, 3000);
// }

// const data = getUserData();
// console.log(data);

// console.log("End");


// ----------------------------------------------------------------
// Part #3 --- Asynchronous Data --- returned data Successfully
// ----------------------------------------------------------------

console.log("Start");

function getUserData(callback) {
    setTimeout(() => {
        callback ({
            name: "Karlos",
            email: "katoshi@yahoo.com"
        });
    }, 3000);
}

function getUserAge(name, callback) {
    setTimeout(() => {
        callback ({
            age: 24
        });
    }, 2000);
}

const data = getUserData(data => {
    console.log(data);
    const age = getUserAge(data.name, age => {
        console.log(age);
    });
});

console.log("End");