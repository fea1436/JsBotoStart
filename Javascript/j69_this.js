const name = "Ali";
const userData = {
    name: "Raha",
    age: 24,
    sayHi: function () {
        console.log(`Hi ${name}`);
        console.log(`Hi ${this.name}`);
    }
};

userData.sayHi();