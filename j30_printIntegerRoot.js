// const num = 10;
const num = prompt("Enter an integer number");

for (let i = 1; i <= num; i++) {
    // console.log(`Root of ${i} is ${Math.sqrt(i)}`);
    const root = Math.sqrt(i);
    if (parseInt(root) === root) {
        console.log(i);
    }
}