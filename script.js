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
}
document.getElementById("searchButton").addEventListener('click', () => {
let searchTerm = document.getElementById('searchInput').value;
if (searchTerm)
searchWeather(searchTerm);
})