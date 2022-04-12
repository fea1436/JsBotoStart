const userData = {
    id: 1,
    name: "Ehsan",
    userName: "fea1436",
    email: "fea1436@gmail.com",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
}

// ------------------------------------------------------------
// ------------------   Object Destructuring   ----------------
// ------------------------------------------------------------

// Method #1
// ----------------------------
// const { name, address } = userData;
// const { city, street, geo } = address;
// const { lat, lng } = geo;

// console.log(`${name} lives in ${street}, ${city}`);
// console.log(`His geolocational props is:\nLattitude: ${lat} & Long: ${lng}`);



// Method #2
// ----------------------------
const { name, address: { city, street, geo: { lat, lng } } } = userData;
console.log(`${name} lives in ${street}, ${city}`);
console.log(`His geolocational props is:\nLattitude: ${lat} & Long: ${lng}`);


console.log('\n\n\n');


// ------------------------------------------------------------
// ------------------   Array Destructuring   -----------------
// ------------------------------------------------------------

const names = ["Amir", "Ehsan", "Hesam", "Hamid", "Iman"];
const [name1, , , name4, name5] = names;
console.log(`1st element is: ${name1}`);
console.log(`4th element is: ${name4}`);
console.log(`5th element is: ${name5}`);