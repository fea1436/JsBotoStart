let list = document.querySelectorAll('.show-display');
list.forEach(element => {
    element.addEventListener('click', showDisplay);
});

let display = document.querySelector('.display');
function showDisplay(event) {
    let content = event.target.innerText;
    if (display.innerText === "0") {
        display.innerText = content;
    }
    else {
        display.innerText += content;
    }
}

let allClear = document.querySelector('.all-clear');
allClear.addEventListener('click', clearAll);
function clearAll()
{
    display.innerText = "0";
}

let clearLast = document.querySelector('.clear-last');
clearLast.addEventListener('click', lastClear);
function lastClear(){
    let content = display.innerText;
    if (content.length == 1){
        display.innerText = "0";
    }else{
        display.innerText = content.substring(0, content.length - 1);
    }
}

let calculate = document.querySelector('.calculate');
calculate.addEventListener('click', calc);
function calc(event) {
    display.innerText = display.innerText.replace('×','*');
    display.innerText = eval(display.innerText);
}