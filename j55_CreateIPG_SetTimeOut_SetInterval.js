let i = 5;
const interval = setInterval(()=> {
    i = i-1;
    if (i === 0)
    {
        i = 5;
    }
    let btn = document.getElementById('goToButton');
    btn.innerText = `اینک مرا منتقل کن (${i})`;
}, 1000);