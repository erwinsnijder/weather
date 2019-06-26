let appID = "4d34983a5595bd557e758143da95a384";
let units = "metric";
let searchMethod;

function searchWeather(searchTerm) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appID}&units=${units}`).then(result => {
    return result.json();

    }).then(result => {
        
    })
}