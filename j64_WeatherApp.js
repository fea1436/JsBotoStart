// https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${apiKey}&units=metric

const form = document.querySelector('form');
const input = document.querySelector('form input');
const msg = document.querySelector('form .msg');
const list = document.querySelector('.cities');

const apiKey = "539e67b793d6b30ca03dc9ed76132800";

form.addEventListener('submit', e => {
    e.preventDefault();
    let enteredCity = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather } = data;
        // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const li = document.createElement('li');
        li.classList.add('city');
        list.appendChild(li);


        //----------------------------------
        // li content ---- First method
        //----------------------------------

        const markup = `
        <h2 class='city-name' data-name=${name},${sys.country}>
           <span>${name}</span>
           <span>${sys.country}</span>
        </h2>
        <div class='city-temp'>${Math.floor(main.temp)}</div>
        <figure>
           <img class='city-icon' src='${icon}' alt=''>
           <figurecaption>${weather[0].description}</figurecaption>
        </figure>
        `;
        li.innerHTML = markup;


        //----------------------------------
        // li content ---- Second method
        //----------------------------------

        // const h2 = document.createElement('h2');
        // h2.classList.add('city-name');
        // li.appendChild(h2);

        // nameSpan = document.createElement('span');
        // nameSpan.innerText = `${name} `;
        // h2.appendChild(nameSpan);

        // regionSpan = document.createElement('span');
        // regionSpan.innerText = sys.country;
        // h2.appendChild(regionSpan);

        // const div = document.createElement('div');
        // div.classList.add('city-temp');
        // div.innerText = main.temp;
        // li.appendChild(div);

        // const figure = document.createElement('figure');
        // li.appendChild(figure);
        
        // const img = document.createElement('img');
        // img.classList.add('city-icon');
        // img.src = icon;
        // img.alt = "city";
        // figure.appendChild(img);

        // const figurecaption = document.createElement('figurecaption');
        // figurecaption.innerText = weather[0].description;
        // figure.appendChild(figurecaption);

        msg.innerText = "";

        console.log(data);
    }).catch(() => {
        msg.innerText = "Search for a valid city!";
    });

    input.value = "";
});