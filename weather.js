'use strict';

const API_KEY = '2a9e6a7c84576bea932b911a3e5209d5';

function onGeoOk(position) {
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
        .then(data => {
            const weather = document.querySelector('#weather');
            const icon = document.createElement('span');
            weather.append(icon);
            icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}.png'>`
            weather.innerText = `${data.name}, ${data.weather[0].main} / ${data.main.temp.toFixed(0)} º`;

    });
}

function onGoeError() {
    alert("can't find you no weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGoeError);