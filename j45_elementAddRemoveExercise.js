const userData = [
    { name: "Milad", marks: [10, 9, 12, 2, 20] },
    { name: "Ali", marks: [11, 14, 9, 13, 17] },
    { name: "David", marks: [3, 13, 17, 14, 12] },
    { name: "Thomas", marks: [4, 9, 16, 20, 19] },
    { name: "Saman", marks: [11, 4, 16, 7, 13] },
    { name: "Mehran", marks: [11, 14, 16, 13, 13] },
    { name: "Mamad", marks: [1, 4, 6, 3, 13] }
];


userData.forEach(item => {

    const numbers = item.marks;
    let result = numbers.reduce((acc, cur) => acc + cur, 0);
    result = result / numbers.length;
    
    const contextString = `<b>${item.name}</b> has average <b>${result}</b>`;
    
    const element = document.createElement("p");
    element.innerHTML = `<i>${contextString}</i>`;

    const parentElement = document.querySelector(".container");
    parentElement.appendChild(element);
});

const ulElement = document.createElement("ul");
ulElement.setAttribute("id", "students");
ulElement.innerHTML = `<b>Students Marks</b>`;
const parentElement = document.querySelector(".container");
parentElement.appendChild(ulElement);
userData.forEach(item => {

    const numbers = item.marks;
    let result = numbers.reduce((acc, cur) => acc + cur, 0);
    result = result / numbers.length;
    
    const contextString = `<b>${item.name}</b> has average <b>${result}</b>`;
    
    const element = document.createElement("li");
    element.innerHTML = `<i>${contextString}</i>`;

    const parentElement = document.getElementById("students");
    parentElement.appendChild(element);
});