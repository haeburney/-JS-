const API_KEY = "99e02f368f5b652b7f53316e899dade4";
const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response)=> response.json())
    .then((data)=> {
        city.innerText = data.name;
        weather.innerText= ` | ${data.weather[0].main} | ${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("Can.t find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);