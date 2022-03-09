const marks = [19, 18, 19, 20, 20, 16, 13];
getMarksAverage(marks);

function getMarksAverage(markArray) {
    let sumOfMarks = 0;
    for (let i = 0; i < markArray.length; i++) {
        sumOfMarks += markArray[i];
    }

    let average = sumOfMarks / markArray.length;
    console.log(`You average is: ${average.toFixed(2)}`)
    if (average >= 10)
        console.log("You Passed!");
    else
        console.log("You Failed!");
}

