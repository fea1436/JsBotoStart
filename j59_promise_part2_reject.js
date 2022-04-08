
// --------------------------------------
//  If data returned by error (REJECT)
// --------------------------------------

console.log("strat reject version");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hi, I am a REJECT part");
        reject("There was an error occured!");
    }, 3000);
});


promise.then(user => console.log(user))
       .catch(err => console.log(err));

console.log("end reject version");

// ------------------------------------------