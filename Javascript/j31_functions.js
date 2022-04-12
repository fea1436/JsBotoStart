function SayHello(name) {
    console.log(`Hi! My name is ${name}`);
}

function getSum(num1, num2 = 20, num3) {
    const sum = num1 + num2 + num3;
    return sum;
}

SayHello("Ehsan");
console.log(`Sum of numbers is ${getSum(10, 20, 30)}`);
console.log(`Sum of numbers is ${getSum(10, 30)}`);

console.log(FaurenhiteToCentigrad(90));


function FaurenhiteToCentigrad(farenhiteDegree) {
    const result = (5 / 9) * (farenhiteDegree - 32);
    return result;
}