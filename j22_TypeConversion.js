const number = 5;
const stringNumber = String(number);
console.log(stringNumber);
console.log(typeof stringNumber);
console.log("\n");

const truth = true;
const stringTruth = String(truth);
console.log(stringTruth);
console.log(typeof stringTruth);
console.log("\n");

const nullable = null;
const stringNullable = String(nullable);
console.log(stringNullable);
console.log(typeof stringNullable);
console.log("\n");

const arrayVal = [2, 3, "Ehsan"];
const stringArray = String(arrayVal);
console.log(stringArray);
console.log(typeof stringArray);
console.log("\n");

const objectVal = { name: "Ehsan", email: "fea@iran.ir", age: 38 };
const stringObject = String(objectVal);
console.log(stringObject);
console.log(typeof stringObject);
console.log("\n");

const value = "5";
const numValue = Number(value);
console.log(numValue);
console.log(typeof numValue);
console.log("\n");

const val = "5";
const numValueUnary = +val;
console.log(numValueUnary);
console.log(typeof numValueUnary);
console.log("\n");

const val1 = false;
const numValueUnaryVal1 = +val1;
console.log(numValueUnaryVal1);
console.log(typeof numValueUnaryVal1);
console.log("\n");

const val2 = true;
const numValueUnaryVal2 = +val2;
console.log(numValueUnaryVal2);
console.log(typeof numValueUnaryVal2);
console.log("\n");

const val3 = null;
const numValueUnaryVal3 = +val3;
console.log(numValueUnaryVal3);
console.log(typeof numValueUnaryVal3);
console.log("\n");

const val4 = "55.67";
const numValueUnaryVal4 = +val4;
const numValueUnaryVal5 = parseInt(val4);
const numValueUnaryVal6 = parseFloat(val4);
console.log(numValueUnaryVal4);
console.log(numValueUnaryVal5);
console.log(numValueUnaryVal6);
console.log(typeof numValueUnaryVal4);
console.log(typeof numValueUnaryVal5);
console.log(typeof numValueUnaryVal6);
console.log("\n");

// toFixed() => conver a Number to String
const val7 = "55.47";
const numValueUnaryVal7 = +val7;
const val7ToFixed = numValueUnaryVal7.toFixed();
console.log(numValueUnaryVal7);
console.log(typeof numValueUnaryVal7);
console.log(val7ToFixed);
console.log(typeof val7ToFixed);
console.log("\n");

const val8 = "55.67";
const numValueUnaryVal8 = +val8;
const val8ToFixed = numValueUnaryVal8.toFixed();
console.log(numValueUnaryVal8);
console.log(typeof numValueUnaryVal8);
console.log(val8ToFixed);
console.log(typeof val8ToFixed);
console.log("\n");

const valValue = 55.6475192;
let fixedValue = valValue.toFixed(1);
console.log(fixedValue);
fixedValue = valValue.toFixed(2);
console.log(fixedValue);
fixedValue = valValue.toFixed(3);
console.log(fixedValue);
fixedValue = valValue.toFixed(4);
console.log(fixedValue);
fixedValue = valValue.toFixed(5);
console.log(fixedValue);