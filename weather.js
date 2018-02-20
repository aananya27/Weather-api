
var weather = new XMLHttpRequest();
var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d183b59c195865a2b32f2fc527b35cfd'
var data = {
  //  id:524901,
  //  APPID:"d183b59c195865a2b32f2fc527b35cfd",
    q : " Portland ",
    units : "metric"
    };

function showWeather(weatherReport) {
      $('#temperature').text(weatherReport.main);
// console.log(q);
      }
$.get(weatherAPI , data , showWeather);
 //$.getJSON(weatherAPI , data , showWeather);
// showWeather();
