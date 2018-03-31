//Global Variables/Constants
var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d183b59c195865a2b32f2fc527b35cfd'
var cityNames = ["Delhi", "Mumbai", "Chennai", "Vellore", "Jaipur", "Pune"];

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
    $('<div class="city-name">'+weatherReport.city.name+'</div>').appendTo('#'+weatherReport.city.name);
    $('<div class="city-temp">'+weatherReport.list[0].main.temp+'</div>').appendTo('#'+weatherReport.city.name);
    $('<p>'+''+weatherReport.list[0].weather[0].description+'</p>').appendTo('#'+weatherReport.city.name);
    if(weatherReport.list[0].weather[0].description.match(/sky/) && weatherReport.list[0].main.temp < 31){
        $('<div class="weather-img"> <img src="svg/001-thermometer-1.svg" alt ="Thermometer" /></div>').appendTo('#'+weatherReport.city.name);
    }else if(weatherReport.list[0].weather[0].description.match(/cloud/)){
        $('<div class="weather-img"> <img src="svg/006-cloud.svg" alt ="Cloud" /> </div>').appendTo('#'+weatherReport.city.name);
    }else if(weatherReport.list[0].weather[0].description.match(/rain/)){
        $('<div class="weather-img"> <img src="svg/004-raindrop.svg" alt ="Raindrop" /></div>').appendTo('#'+weatherReport.city.name);
    }else if(weatherReport.list[0].main.temp > 31){
      $('<div class="weather-img"> <img src="svg/002-thermometer.svg" alt ="Thermometer" /></div>').appendTo('#'+weatherReport.city.name);
    }
}
