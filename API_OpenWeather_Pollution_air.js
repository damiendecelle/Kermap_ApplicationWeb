var callBackGetSuccess1 = function (data) {
    console.log("donnees api pollution air", data)

    var element = document.getElementById("co");
    element.innerHTML = "CO : " + data.list[0].components.co + "  μg/m3";
    
    var element = document.getElementById("nh3");
    element.innerHTML = "NH3 : " + data.list[0].components.nh3 + "  μg/m3";
    
    var element = document.getElementById("no");
    element.innerHTML = "NO : " + data.list[0].components.no + "  μg/m3";
    
    var element = document.getElementById("no2");
    element.innerHTML = "NO2 : " + data.list[0].components.no2 + "  μg/m3";
    
    var element = document.getElementById("o3");
    element.innerHTML = "O3 : " + data.list[0].components.o3 + "  μg/m3";
    
    var element = document.getElementById("pm2_5");
    element.innerHTML = "PM2.5 : " + data.list[0].components.pm2_5 + "  μg/m3";
    
    var element = document.getElementById("pm10");
    element.innerHTML = "PM10 : " + data.list[0].components.pm10 + "  μg/m3";
    
    var element = document.getElementById("so2");
    element.innerHTML = "SO2 : " + data.list[0].components.so2 + "  μg/m3";
  
    var element = document.getElementById("aqi_air");
    element.innerHTML =(data.list[0].main.aqi);
    if (data.list[0].main.aqi== 1){
      return element.innerHTML = "Très bon"+"<br>"+"<img src=\"/images/Tres_bien_bien.png\" height=\"50px\">";
    }
    else if (data.list[0].main.aqi==2){
      return element.innerHTML = " Bon"+"<br>"+"<img src=\"/images/Tres_bien_bien.png\" height=\"50px\">";
    }
    else if (data.list[0].main.aqi== 3){
      return element.innerHTML = " Modéré"+"<br>"+"<img src=\"/images/Modere.png\" height=\"50px\">";
    }
    else if (data.list[0].main.aqi== 4){
      return element.innerHTML = " Mauvais"+"<br>"+"<img src=\"/images/Mauvais_tres_mauvais.png\" height=\"50px\">";
    }
    else if (data.list[0].main.aqi==5){
      return element.innerHTML = "Très Mauvais"+"<br>"+"<img src=\"/images/Mauvais_tres_mauvais.png\" height=\"50px\">";
    }
    
}

function buttonClickGET1() {
    var queryLoc = document.getElementById("queryLoc").value;

    // Fonction permettant de déterminer la latitude d'une ville
    function cityLat(){
        if (queryLoc == 'Auckland')
          return lat = -36.85
        else if (queryLoc == 'Bangkok')
          return lat = 13.77
        else if (queryLoc == 'Beijing')
          return lat = 39.92
        else if (queryLoc == 'Berlin')
          return lat = 52.51
        else if (queryLoc == 'Cape Town')
          return lat = -33.94
        else if (queryLoc == 'London')
          return lat = 51.50
        else if (queryLoc == 'Los Angeles')
          return lat = 34.05
        else if (queryLoc == 'Mexico City')
          return lat = 19.44
        else if (queryLoc == 'Montreal')
          return lat = 45.49
        else if (queryLoc == 'Moscow')
          return lat = 55.75
        else if (queryLoc == 'New Delhi')
          return lat = 28.62
        else if (queryLoc == 'New York')
          return lat = 40.71
        else if (queryLoc == 'Prague')
          return lat = 50.07
        else if (queryLoc == 'Rio de Janeiro')
          return lat = -22.91
        else if (queryLoc == 'Rome')
          return lat = 41.90
        else if (queryLoc == 'Shanghai')
          return lat = 31.22
        else if (queryLoc == 'Sydney')
          return lat = -33.87
        else if (queryLoc == 'Tel Aviv')
          return lat = 32.08
        else if (queryLoc == 'Tokyo')
          return lat = 35.68
        else if (queryLoc == 'Vancouver')
          return lat = 49.28
        else if (queryLoc == 'Warsaw')
          return lat = 52.22
        else if (queryLoc == 'Washington DC')
          return lat = 38.90
        else if (queryLoc == 'Zurich')
          return lat = 47.37    
      }
  
      // Fonction permettant de déterminer la longitude d'une ville
      function cityLon(){
        if (queryLoc == 'Auckland')
          return lon = 174.76
        else if (queryLoc == 'Bangkok')
          return lon = 100.49
        else if (queryLoc == 'Beijing')
          return lon = 116.40
        else if (queryLoc == 'Berlin')
          return lon = 13.39
        else if (queryLoc == 'Cape Town')
          return lon = 18.41
        else if (queryLoc == 'London')
          return lon = -0.13
        else if (queryLoc == 'Los Angeles')
          return lon = -118.24
        else if (queryLoc == 'Mexico City')
          return lon = -99.13
        else if (queryLoc == 'Montreal')
          return lon = -73.56
        else if (queryLoc == 'Moscow')
          return lon = 37.62
        else if (queryLoc == 'New Delhi')
          return lon = 77.20
        else if (queryLoc == 'New York')
          return lon = -74.00
        else if (queryLoc == 'Prague')
          return lon = 14.44
        else if (queryLoc == 'Rio de Janeiro')
          return lon = -43.16
        else if (queryLoc == 'Rome')
          return lon =  12.48
        else if (queryLoc == 'Shanghai')
          return lon =  121.45
        else if (queryLoc == 'Sydney')
          return lon =  151.21
        else if (queryLoc == 'Tel Aviv')
          return lon =  34.77
        else if (queryLoc == 'Tokyo')
          return lon =  139.76
        else if (queryLoc == 'Vancouver')
          return lon = -123.13
        else if (queryLoc == 'Warsaw')
          return lon =  21.00
        else if (queryLoc == 'Washington DC')
          return lon = -77.03
        else if (queryLoc == 'Zurich')
          return lon = 8.53    
      }

    var url = "https://api.openweathermap.org/data/2.5/air_pollution?lat=" +cityLat()+ "&lon=" +cityLon()+ "&APPID=b75ccd5c360174f5af7eed7eae5f84b8&lang=fr"

    $.get(url, callBackGetSuccess1).done(function () {
        //alert( "second success")
    })
        .fail(function () {
        alert("error");
        })
        .always(function () {
        //alert ( "finished" );

        });
}
