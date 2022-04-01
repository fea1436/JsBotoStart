let displayBox = document.querySelector('.display');
let allClear = document.querySelector('.all-clear');
let clearLast = document.querySelector('.clear-last');

let list = document.querySelectorAll('.show-display');
list.forEach(item => {
    item.addEventListener('click', ShowDisplay);
});

function ShowDisplay(event){
    const x = event.target.innerText;
    console.log(x);
}