// ------------------------------------------
//  If data returned successfully (RESOLVE)
// ------------------------------------------

console.log("strat resolve version");

const promiseResolveVersion = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hi, I am a RESOLVE part");
        resolve({name: "Karlos"});
    }, 3000);
});


promiseResolveVersion.then(user => console.log(user));

console.log("end resolve version");