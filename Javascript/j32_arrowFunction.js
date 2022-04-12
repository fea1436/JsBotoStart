
// Method #1 ----- definition of a function
const sumMethodUsual = function (a, b) {
    return a + b;
}
console.log(`Usual Function Result: ${sumMethodUsual(1, 2)}`);


// Method #2 ----- definition of an arrow function
const sumMethodArrow = (a, b) => a + b;
console.log(`Arrow Function Result: ${sumMethodArrow(1, 2)}`);

const sumMethodArrowExample2 = a => a + 5;
console.log(`Arrow Function Result: ${sumMethodArrowExample2(1)}`);

const sumMethodArrowExample3 = () => 5;
console.log(`Arrow Function Result: ${sumMethodArrowExample3()}`);