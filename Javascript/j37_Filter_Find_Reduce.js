const numbers = [12, 4, 6, 1, 90, 5, 23, 76, 80];

//  Problem => Print numbers that is Greater than 10

//  Usual Method  ---   Search by FOR
for (let i=0; i<numbers.length; i++)
{
    if(numbers[i] < 10)
        continue;
    
    console.log(numbers[i]);
}


//  Search by FILTER
const filteredNumbers = numbers.filter(item => item >= 10);
console.log(filteredNumbers);


//  Find a value by FIND
//  Warning => when first value founded, FIND execution stops
const founded = numbers.find(item => item % 2 === 0);
console.log(founded);



//  REDUCE  -  Example #1
//  Problem => sum all of array elements
//             initial value is 0 (You can set initial value anything)
//             "acc" contains final Sum_Result
//             "cur" in every step contains value on that step index
//
//  At the end of REDUCE execution, One value returned 

const result = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(result);