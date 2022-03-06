const userData = {
    name: "Ehsan",
    family: "Aslani",
    age: 24,
    siblings: ["Amir", "Iman"],
    marks: {
        english: 12,
        math: 18
    }
}


// Get Value --- Method #1 --- dot key
console.log(`User Information \nName:    ${userData.name}\nFamily:  ${userData.family}\nAge:     ${userData.age}\n`);
console.log("\n\n");

// Get Value --- Method #2 --- crushe key name
console.log(`User Information \nName:    ${userData["name"]}\nFamily:  ${userData["family"]}\nAge:     ${userData["age"]}\n`);
console.log("\n\n");

let favorite = "family";
console.log(`User Information \n${favorite}:    ${userData[favorite]}`);
console.log("\n\n");

favorite = "name";
console.log(`User Information \n${favorite}:    ${userData[favorite]}`);
console.log("\n\n");

favorite = "age";
console.log(`User Information \n${favorite}:    ${userData[favorite]}`);
console.log("\n\n");

favorite = "siblings";
console.log(`User Information \n${favorite}:    ${userData[favorite][0]}`);
console.log(`User Information \n${favorite}:    ${userData[favorite][1]}`);
console.log("\n\n");

favorite = "marks";
console.log(userData[favorite]["english"]);
console.log(userData[favorite]["math"]);


// Add filed to Object
userData.career = "Programmer";
console.log(userData);


// Remove filed to Object
delete userData.siblings;
console.log(userData);

// Using SPREAD Operator
const userNames = { first: "Amir", second: "Iman" };
const newObject = { ...userData, ...userNames };
console.log(newObject);