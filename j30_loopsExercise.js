const content = ["milad-09180002045", "ehsan-09180001676", "amir-09180009024", "iman-09350008068"];

const nameSelected = prompt("Please enter your name: ");
let founded = false;
for (let i = 0; i < content.length; i++) {
    // const seperatorIndex = content[i].indexOf("-");
    // const userNameInIndex = content[i].substring(0, seperatorIndex);
    // const userMobileNumInIndex = content[i].substring(seperatorIndex + 1, content[i].length);

    let splittedContact = content[i].split("-");
    const userNameInIndex = splittedContact[0];
    const userMobileNumInIndex = splittedContact[1];

    // console.log(`User: ${userNameInIndex}\nMobile: ${userMobileNumInIndex}\n\n`);

    if (nameSelected === userNameInIndex) {
        console.log(`User:   ${userNameInIndex}\nMobile: ${userMobileNumInIndex}\n\n`);
        founded = true;
    }
}

if (!founded) {
    console.log(`Selected User Not Found in Set!`);
}