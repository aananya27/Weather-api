

var my_city="Washington,USA";
var my_key="2dce10dc411041708fb200431181902";
var no_of_days=2;
//build URI:
var uri="http://free.worldweatheronline.com/feed/weather.ashx?q="+my_city+"&key="+my_key+"&format=json&no_of_days="+no_of_days+"&includeLocation=yes";
// uri-encode it to prevent errors :
uri=encodeURI(uri);

jQuery.get(uri,function(r){},"json");

var max_temp_C      =r.data.weather[0].tempMaxC;
var min_temp_C      =r.data.weather[0].tempMinC;
var   humidity        =r.data.current_condition[0].humidity;
var precipitation   =r.data.current_condition[0].precipMM;

  jQuery.get(uri,function(r){

 if(r.data.error) {

  // error exists, so display it
  alert(r.data.error[0].msg);

  } else {
    function showWeather(weatherReport) {
      $('#temperature').text(weatherReport.main.temp);
        }
   // no error
   // do normal stuff

 }//end if

},"jsonp");
