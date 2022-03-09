const userData = { name: "Ehsan", age: 34, career: "Programmer" };


//  Usual Method
const userDataKeys = Object.keys(userData);
const userDataValues = Object.values(userData);

for (let i=0; i < userDataKeys.length; i++)
{
    console.log(`${userDataKeys[i]}:  ${userDataValues[i]}`);
}



//  Simple Method 
for (const prop in userData){
    console.log(`${prop}:  ${userData[prop]}`);
}