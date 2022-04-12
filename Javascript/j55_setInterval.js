const removeIntervalButton = document.querySelector('#clearIntervalBtn');
removeIntervalButton.addEventListener('click', clearIntervalEvent);

function clearIntervalEvent() {
    clearInterval(interval)
}

const interval = setInterval(()=> console.log("Interval Execution"), 2000);