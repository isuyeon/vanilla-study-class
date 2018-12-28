const weather = document.querySelector('.weather');

const API_KEY = 'eebedd7fbd8382cd1f41f22ae440820e';
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = '현재날씨: ' + temperature + ', 도시: ' + place;
    });
    console.log(lat, lon)
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoError(err) {
    console.warn('ERROR(' + err.code + '):' + err.message)
}

function handleGeoSuccess(pos) {
    const crd = pos.coords;
    const coordsObj = {
        lat: crd.latitude,
        lon: crd.longitude
    };

    saveCoords(coordsObj);
    getWeather(coordsObj.lat, coordsObj.lon);

    //console.log(crd, coordsObj)
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); //(sucess, error, option)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.lat, parsedCoords.log);
    }
}

function init() {
    loadCoords();
}

init();