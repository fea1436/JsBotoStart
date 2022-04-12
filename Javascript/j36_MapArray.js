const dataGeorgial = [1329, 1339, 1359, 1362, 1368];

const dataMiladi = dataGeorgial.map(item => item + 621);

dataMiladi.forEach(element => {
    console.log(element);
});