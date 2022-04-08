function showTime() {
    const clock = document.querySelector("#clock");
    const date = new Date();
    
    const hourTemp = date.getHours();
    let hour = hourTemp > 12 ? hourTemp - 12 : hourTemp;
    hour = hour < 10 ? `0${hour}` : `${hour}`; 
    if (hourTemp === 24) {
        hour = "00";
    } 
    
    const minuteTemp = date.getMinutes();
    const minute = minuteTemp < 10 ? `0${minuteTemp}` : `${minuteTemp}`;
    
    const secondsTemp = date.getSeconds();
    const seconds = secondsTemp < 10 ? `0${secondsTemp}` : `${secondsTemp}`;
    
    const isMidDay = hourTemp > 11 ? "PM" : "AM";
    
    clock.innerText = `${hour}:${minute}:${seconds} ${isMidDay}`;
}

setInterval(showTime, 1000);