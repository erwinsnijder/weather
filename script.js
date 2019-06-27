let appID = "4d34983a5595bd557e758143da95a384";
let units = "metric";
let searchMethod;

function getSearchMethod(searchTerm) {
if(searchTerm.length == 5 && Number.parseInt(searchTerm) + "" == searchTerm)
searchMethod = "zip";
else 
searchMethod = "q";
}


function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appID}&units=${units}`).then(result => {
    return result.json();

    }).then(result => {
        init(result);
    })
}
function init(resultFromServer) {
    console.log(resultFromServer);

    switch (resultFromServer.weather[0].main) {
        case 'Clear':
                document.body.style.backgroundImage = 'url("clear.jpg")';
            break;
        case 'Clouds':
                document.body.style.backgroundImage = 'url("cloudy.jpg")';
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
                document.body.style.backgroundImage = 'url("rain.jpg")';
            break;
        case 'Thunderstorm':
                document.body.style.backgroundImage = 'url("storm,jpg")';
            break;
        case 'Snow':
                document.body.style.backgroundImage = 'url("snow.jpg")';
            break;
        default:
                document.body.style.backgroundImage = 'url("default.jpg")';
            break;
            
    }
        let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
        let temperatureElement = document.getElementById('temperature');
        let humidityElement = document.getElementById('humidity');
        let windSpeedElement = document.getElementById('windSpeed');
        let cityHeader = document.getElementById('cityHeader');
        let weatherIcon = document.getElementById('documentIconImg');

        weatherIcon.src ='http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';
        let resultDescription = resultFromServer.weather[0].description;
        
        weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
        temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
        windSpeedElement.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + 'm/s';
        cityHeader.innerHTML = resultFromServer.name;
        humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';
    }

document.getElementById("searchButton").addEventListener('click', () => {
let searchTerm = document.getElementById('searchInput').value;
if (searchTerm)
searchWeather(searchTerm);
})