const data = [1329, 1339, 1359, 1362, 1368];
const dataNames = ["Mehdi", "Kazem", "Ali", "Samin", "Shima"]
const dataNamesOther = ["Mehdi", "Kazem", "Ali", "Samin", "Shima"]

// Print by FOR
for (let i=0; i<data.length; i++){
    console.log(data[i]);
}


// Print by ForEach ---  Method #1
data.forEach(element => {
    console.log(element);
});


// Print by ForEach ---  Method #2
dataNames.forEach(function(item) {
    console.log(item.toUpperCase());
});


// Print by ForEach ---  Method #2
dataNamesOther.forEach((item, index) => {
    dataNamesOther[index] = item.toUpperCase();
});

dataNamesOther.forEach(item => {
    console.log(item);
});


// Print by ForOf
for(let i of data)
{
    console.log(i);
}