const random = Math.random();
console.log(`Random Created:  ${random}`);

console.log(`Between 0-10:  ${Math.round(random * 10)}`);
console.log(`Between 0-100:  ${Math.round(random * 100)}`);
console.log(`Between 0-10000:  ${Math.round(random * 1000)}`);

console.log('\n\n');

const rand = Math.random();
console.log(`Random Created:  ${rand}`);

console.log(`Between 0-10:  ${Math.floor(rand * 10)}`);
console.log(`Between 0-100:  ${Math.floor(rand * 100)}`);
console.log(`Between 0-10000:  ${Math.floor(rand * 1000)}`);

console.log(`Between 0-10:  ${Math.ceil(rand * 10)}`);
console.log(`Between 0-100:  ${Math.ceil(rand * 100)}`);
console.log(`Between 0-10000:  ${Math.ceil(rand * 1000)}`);


console.log('\n\n');

let number = 81;
console.log(`Root of ${number} is ${Math.sqrt(number)}`);
console.log(`Root of ${number = 25} is ${Math.sqrt(number)}`);
console.log(`Root of ${number = 49} is ${Math.sqrt(number)}`);

console.log('\n\n');

console.log(`Power of ${base = 2} in ${power = 3} is ${Math.pow(base, power)}`);



console.log('\n\n');

const min = Math.min(50, 47, 36, 18, 22, 180, 95);
console.log(`Minimum in set is: ${min}`);
const max = Math.max(50, 47, 36, 18, 22, 180, 95);
console.log(`Maximum in set is: ${max}`);

console.log('\n\n');
console.log(`PI is: ${Math.PI}`);
console.log(`Nepere is: ${Math.E}`);

console.log('\n\n');

const radius = 7;

const around = radius * 2 * Math.PI;
const roundedAround = Math.round(around);

const surface = Math.pow(radius, 2) * Math.PI;
const roundedSurface = Math.round(surface);

console.log(`Around is:  ${around}`);
console.log(`Rounded Around is:  ${roundedAround}`);
console.log(`Surface is:  ${surface}`);
console.log(`Rounded Surface is:  ${roundedSurface}`);