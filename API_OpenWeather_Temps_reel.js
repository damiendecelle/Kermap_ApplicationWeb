var callBackGetSuccess = function (data) {
  console.log("donnees api temps réel", data)

  var element = document.getElementById("zone_temp");
  element.innerHTML =(data.main.temp - 273.15).toFixed(1) + "°C";

  var element = document.getElementById("ressenti");
  element.innerHTML = "Ressenti : " + (data.main.feels_like - 273.15).toFixed(1) + "°C";

  var element = document.getElementById("zone_pression");
  element.innerHTML = (data.main.pressure) + " hPa";

  var element = document.getElementById("zone_humidité");
  element.innerHTML = (data.main.humidity) + " %";

  var element = document.getElementById("zone_vent");
  element.innerHTML = (data.wind.speed).toFixed(0) + " km/h";

  var element = document.getElementById("description");
  element.innerHTML = (data.weather[0].description);
  if (data.weather[0].description == 'clear sky') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('clear sky');
  }
  if (data.weather[0].description == 'few clouds') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('few clouds');
  }
  if (data.weather[0].description == 'scattered clouds') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('scattered clouds');
  }
  if (data.weather[0].description == 'broken clouds') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('broken clouds');
  }
  if (data.weather[0].description == 'shower rain') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('shower rain');
  }
  if (data.weather[0].description == 'rain') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('rain');
  }
  if (data.weather[0].description == 'thunderstorm') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('thunderstorm');
  }
  if (data.weather[0].description == 'snow') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('snow');
  }
  if (data.weather[0].description == 'mist') {
    document.getElementById('description').removeAttribute("class");
    document.getElementById('description').classList.add('mist');
  }
  

  var element = document.getElementById("lever");
  var timeStamp = (data.sys.sunrise), // le TimeStamp à convertir
    date = new Date(timeStamp * 1000); // pour obtenir le timeStamp en millisecondes
  heure = date.getHours(); // on récupère l'heure
  min = date.getMinutes(); // on récupère les minutes

  element.innerHTML = heure + "h" + min;


  var element = document.getElementById("coucher");
  var timeStamp = (data.sys.sunset), // le TimeStamp à convertir
    date = new Date(timeStamp * 1000); // pour obtenir le timeStamp en millisecondes
  heure = date.getHours(); // on récupère l'heure
  min = date.getMinutes(); // on récupère les minutes

  element.innerHTML = heure + "h" + min;


  var element = document.getElementById("icon_main");
    element.innerHTML =(data.weather[0].main);
    if (data.weather[0].main== "Clear"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/01d@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Clouds"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/04d@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Thunderstorm"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/11n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Drizzle"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/09n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Rain"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/09n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Snow"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/13d@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Snow"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/13d@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Mist"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"50px\">";
    }
    else if (data.weather[0].main== "Smoke"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Haze"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"50px\">";
    }
    else if (data.weather[0].main== "Dust"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Fog"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Sand"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Ash"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Squall"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"90px\">";
    }
    else if (data.weather[0].main== "Tornado"){
      return element.innerHTML = "<img src=\"http://openweathermap.org/img/wn/50n@2x.png\" height=\"90px\">";
    }

}



function buttonClickGET() {
  var queryLoc = document.getElementById("queryLoc").value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + queryLoc + "&APPID=b75ccd5c360174f5af7eed7eae5f84b8&lang=fr"

  $.get(url, callBackGetSuccess).done(function () {
    //alert( "second success")
  })
    .fail(function () {
      alert("error");
    })
    .always(function () {
      //alert ( "finished" );

    });
}

// Création de l'indicateur de Ecart de température à la moyenne mensuelle de saison
// Récupération du nom de la ville a partir de la liste déroulante
function fetchCity11() {
  var queryLoc = document.getElementById("queryLoc").value;
  // Appel de l'API en fonction de la latitude et la longitude de la ville
  var url11 = "/Data/" + queryLoc + "_mensuelle.json"
  var url12 = "https://api.openweathermap.org/data/2.5/weather?q=" + queryLoc + "&APPID=b75ccd5c360174f5af7eed7eae5f84b8&lang=fr"

  fetch(url11)
    // On transforme la réponse de l'API en JSON, c'est plus simple.
    .then(rep => rep.json())
    // On traite le JSON
    .then((rep) => {
      console.log("response from fetch historic() : ", rep);

          fetch(url12)
          // On transforme la réponse de l'API en JSON, c'est plus simple.
          .then(rep2 => rep2.json())
          // On traite le JSON
          .then((rep2) => {
          console.log("response from fetch historic() : ", rep2);

          var element = document.getElementById("ecart_temp");
          var timeStamp = Date.now(), // le TimeStamp à convertir
              date = new Date(timeStamp);
          mois = date.getMonth() + 1; // on récupère le mois
          element.innerHTML = " Ecart à la moyenne de saison : " + ((rep2.main.temp - 273.15) - rep.TMEAN_SAISON[mois]).toFixed(1) + "°C";
          });
    });
}