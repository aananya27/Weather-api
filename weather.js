
var weather = new XMLHttpRequest();
var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d183b59c195865a2b32f2fc527b35cfd'
function cityWeather(q){

var data = {
    q : q ,
    units : "metric"
    };
function showWeather(weatherReport) {
    $('#city1').text(weatherReport.list[0].main.name);
    $('#temperature1').text(weatherReport.list[0].main.temp);
    $('#humid1').text(weatherReport.list[0].main.humidity);
    $('#description1').text(weatherReport.list[0].weather[0].description);
    }

$.get(weatherAPI , data , showWeather);

}

for (var i = 0; i < 5; i++) {

  var cityName = ["Delhi" , "Mumbai" , "Chennai" , "Vellore" , "Jaipur"];

  cityWeather(cityName[i]);
  console.log(cityName[i]);

}
