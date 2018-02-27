
var weather = new XMLHttpRequest();
var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d183b59c195865a2b32f2fc527b35cfd'
var data = {
    q : " delhi ",
    units : "metric"
    };

function showWeather(weatherReport) {
    $('#temperature1').text(weatherReport.list[0].main.temp);
    $('#humid1').text(weatherReport.list[0].main.humidity);
    $('#description1').text(weatherReport.list[0].weather[0].description);

	console.log(weatherReport);
    }

$.get(weatherAPI , data , showWeather);
