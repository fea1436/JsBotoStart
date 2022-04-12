function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({
                name: "Karlos",
                email: "katoshi@yahoo.com"
            });
        }, 3000);
    });
}

function getUserAge(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({
                age: 24
            });
        }, 2000);
    });
}

async function DisplayData() {
    const data = await getUserData();
    const age = await getUserAge(data.name);
    console.log(age);
}

DisplayData();