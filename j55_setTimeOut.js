// Example #1
setTimeout(myFunction, 3000);
function myFunction() {
    console.log("Hello TimeOut!");
}

// Example #2
const testRemoveTimeOut = setTimeout(() => console.log("Button Clicked after TimeOut."), 5000);

const removeTimeoutButton = document.querySelector('#clearTimeOutbtn');
removeTimeoutButton.addEventListener('click', clearTimeOutEvent);
function clearTimeOutEvent() {
    clearTimeout(testRemoveTimeOut);
}