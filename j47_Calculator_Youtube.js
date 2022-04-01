const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const valueEL = document.querySelector('.value');

const acEL = document.querySelector('.ac');
const pmEL = document.querySelector('.pm');
const percentEL = document.querySelector('.percent');
const decimalEL = document.querySelector('.decimal');

const divisionEL = document.querySelector('.division');
const multiplyEL = document.querySelector('.multiply');
const subtractionEL = document.querySelector('.subtraction');
const summaryEL = document.querySelector('.summary');
const equalEL = document.querySelector('.equal');

const number1EL = document.querySelector('.number-1');
const number2EL = document.querySelector('.number-2');
const number3EL = document.querySelector('.number-3');
const number4EL = document.querySelector('.number-4');
const number5EL = document.querySelector('.number-5');
const number6EL = document.querySelector('.number-6');
const number7EL = document.querySelector('.number-7');
const number8EL = document.querySelector('.number-8');
const number9EL = document.querySelector('.number-9');
const number0EL = document.querySelector('.number-0');

const numberElArray = [
    number0EL, number1EL, number2EL, number3EL, number4EL,
    number5EL, number6EL, number7EL, number8EL, number9EL
];


// Functions
const getValueAsString = () => valueEL.textContent.split(',').join('');

const getValueAsNumber = () =>{
    return parseFloat(getValueAsString());
};

const setStringAsValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
        valueEL.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr){
        valueEL.textContent = parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr; 
    }else{
        valueEL.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
};


const handleNumberClick = (numString) => {
    let currentValueString = getValueAsString();
    if (currentValueString === "0"){
        setStringAsValue(numString);
    }
    else{
        setStringAsValue(currentValueString + numString);
    }
};



// Add Event Listeners to functions
acEL.addEventListener('click', () => {
    setStringAsValue('0');
});

pmEL.addEventListener('click', () => {
    const currentValueNum = getValueAsNumber();
    const currentValueStr = getValueAsString();

    if (currentValueStr === "-0")
    {
        setStringAsValue('0');
        return;
    }

    if (currentValueNum >= 0){
        setStringAsValue('-' + currentValueStr);
    }else{
        setStringAsValue(currentValueStr.substring(1));
    }
});

percentEL.addEventListener('click', () => {
    const currentValueNum = getValueAsNumber();
    const newValueNum = currentValueNum / 100;
    setStringAsValue(newValueNum.toString());
});




// Add Event Listeners to Operators











// Add Event Listeners to numbers and buttons
for(let i=0; i<numberElArray.length; i++){
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    });
};

decimalEL.addEventListener('click', () => {
    const currentValueString = getValueAsString();
    if (!currentValueString.includes('.')){
        setStringAsValue(currentValueString + '.');
    }
});




// Set up the time
const UpdateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    }
    
    hourEL.innerHTML = currentHour.toString().padStart(2, '0');
    minuteEL.innerHTML = currentMinute.toString().padStart(2, '0');
}

setInterval(UpdateTime, 1000);
UpdateTime();