// Closure function is a function that contain another function
// and call that function

// Closure function powerfull points
//  - maintain data security
//  - maintain data consistency

function closureFunc() {
    let iterator = 0;

    function counter() {
        iterator++;
        return iterator;
    }

    return counter;
}

const firstCounter = closureFunc();
console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());


const secondCounter = closureFunc();
console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());