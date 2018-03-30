//Global Variables/Constants
var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d183b59c195865a2b32f2fc527b35cfd'
var cityNames = ["Delhi", "Mumbai", "Chennai", "Vellore", "Jaipur"];

//This is the function that will get called when the page will be loaded for the first time
$(document).ready(function(){
    cityNames.forEach(city => {
        getWeatherData(city);
        console.log(city);
    });
    
});

//Makes a request to the API
function getWeatherData(cityName){
    var data = {
        q: cityName,
        units: "metric"
    };
    //this will hit the weatherAPI endpoint with data and call the createDivForCity func with the response data
    $.get(weatherAPI, data, createDivForCity);
}

//Creates div dynamically for the response data of the api
function createDivForCity(weatherReport){
    console.log(weatherReport);
    //This will create a new div with id with the city name
    $('<div class="city-card" id = "'+weatherReport.city.name +'">').appendTo('#tempContainer');
    $('<p>'+'City: '+weatherReport.city.name+'</p>').appendTo('#'+weatherReport.city.name);
    $('<p>'+'Temperature: '+weatherReport.list[0].main.temp+' C</p>').appendTo('#'+weatherReport.city.name);
    $('<p>'+'Humidity: '+weatherReport.list[0].main.humidity+'%</p>').appendTo('#'+weatherReport.city.name);
}
