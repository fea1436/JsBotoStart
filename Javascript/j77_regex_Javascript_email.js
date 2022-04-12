
const regex = /^[a-zA-Z0-9._]{3,25}[@]\w{2,6}\.[a-z]{2,3}$/;

const emailFirst = "raha.khazaei@gmail@.com";
const emailSecnd = "raha.khazaei@yahoo.com";
const emailThird = "babak1362.14khazaei@yahoo.com";
const emailForth = "ehsanas1lkhazaei@yahoo.co";
const emailFifth = "1_kavan-khazaei@y124.c";
const emailSixth = "mahMoood.khAzaEi@yahoo.comm";

console.log(`Regex validation on "${emailFirst}" is ${regex.test(emailFirst)}`);
console.log(`Regex validation on "${emailSecnd}" is ${regex.test(emailSecnd)}`);
console.log(`Regex validation on "${emailThird}" is ${regex.test(emailThird)}`);
console.log(`Regex validation on "${emailForth}" is ${regex.test(emailForth)}`);
console.log(`Regex validation on "${emailFifth}" is ${regex.test(emailFifth)}`);
console.log(`Regex validation on "${emailSixth}" is ${regex.test(emailSixth)}`);