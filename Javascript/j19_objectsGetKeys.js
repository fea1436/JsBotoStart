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


const userDataKeys = Object.keys(userData);
console.log(userDataKeys);

const userDataValues = Object.values(userData);
console.log(userDataValues);