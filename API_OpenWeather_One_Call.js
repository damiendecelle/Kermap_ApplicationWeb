// GRAPHIQUE DES PREVISIONS JOURNALIERE 

// Récupération du nom de la ville a partir de la liste déroulante
function fetchCity9() {
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

    
    // Appel de l'API en fonction de la latitude et la longitude de la ville
    var url9 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +cityLat()+ "&lon=" +cityLon()+ "&exclude=current,minutely,hourly,alerts&appid=5c3ff5a9356fcec291824c0a99459121&lang=fr"
    var url14 = "/Data/" + queryLoc + "_mensuelle.json"

    fetch(url9)
      // On transforme la réponse de l'API en JSON, c'est plus simple.
      .then(rep => rep.json())
      // On traite le JSON
      .then((rep) => {
        console.log("response from fetch daily() : ", rep);

        fetch(url14)
        // On transforme la réponse de l'API en JSON, c'est plus simple.
        .then(rep2 => rep2.json())
        // On traite le JSON
        .then((rep2) => {
          console.log("response from fetch hourly() : ", rep);

          var timeStamp = Date.now(), // le TimeStamp à convertir
                date = new Date(timeStamp);
            mois = date.getMonth() + 1; // on récupère le mois

          // Et on ajoute au graphique la donnée de la manière suivante : 
          var chart = c3.generate({
            bindto: '#chart9',
            data: {
              columns: [ // Variable de la donnée
                [rep.timezone,Math.round(rep.daily[0].temp.day - 273.15),Math.round(rep.daily[1].temp.day - 273.15),Math.round(rep.daily[2].temp.day - 273.15),Math.round(rep.daily[3].temp.day - 273.15),Math.round(rep.daily[4].temp.day - 273.15),Math.round(rep.daily[5].temp.day - 273.15),Math.round(rep.daily[6].temp.day - 273.15),Math.round(rep.daily[7].temp.day - 273.15)],
                [rep.lat,Math.round(rep.daily[0].temp.max - 273.15),Math.round(rep.daily[1].temp.max - 273.15),Math.round(rep.daily[2].temp.max - 273.15),Math.round(rep.daily[3].temp.max - 273.15),Math.round(rep.daily[4].temp.max - 273.15),Math.round(rep.daily[5].temp.max - 273.15),Math.round(rep.daily[6].temp.max - 273.15),Math.round(rep.daily[7].temp.max - 273.15)],
                [rep.lon,Math.round(rep.daily[0].temp.min - 273.15),Math.round(rep.daily[1].temp.min - 273.15),Math.round(rep.daily[2].temp.min - 273.15),Math.round(rep.daily[3].temp.min - 273.15),Math.round(rep.daily[4].temp.min - 273.15),Math.round(rep.daily[5].temp.min - 273.15),Math.round(rep.daily[6].temp.min - 273.15),Math.round(rep.daily[7].temp.min - 273.15)],
                [rep2.TMEAN_SAISON,rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois]],
                [rep.timezone_offset,Math.round(rep.daily[0].pop*100), Math.round(rep.daily[1].pop*100), Math.round(rep.daily[2].pop*100), Math.round(rep.daily[3].pop*100), Math.round(rep.daily[4].pop*100), Math.round(rep.daily[5].pop*100), Math.round(rep.daily[6].pop*100), Math.round(rep.daily[7].pop*100)]
              ],
              types: {
                [rep2.TMEAN_SAISON]: 'spline',
                [rep.timezone]: 'spline',
                [rep.lat]: 'spline',
                [rep.lon]: 'spline',
                [rep.timezone_offset]: 'bar'
              },
              colors: { // Définition de la couleur
                [rep2.TMEAN_SAISON]: '#FFB154',
                [rep.timezone]: '#FFEB00',
                [rep.lat]: '#FA2222',
                [rep.lon]: '#2D68FF',
                [rep.timezone_offset]: '#63A7FF'
              },
              names: { // Définition du nom des colonnes
                [rep2.TMEAN_SAISON]: 'Température mensuelle de saison',
                [rep.timezone]: 'Température moyenne de la journée',
                [rep.lat]: 'Température maximale de la journée',
                [rep.lon]: 'Température minimale de la journée',
                [rep.timezone_offset]: 'Probabilité de précipitations'
              },
              axes: {
                [rep.timezone_offset]: 'y2'
              }
            },
            axis: {
              x: { // Définition de l'axe des x
                  type: 'category',
                  categories: ["Aujourd'hui", "J+1", "J+2", "J+3", "J+4", "J+5","J+6", "J+7"]
              },
              y: { // Définition de l'axe des Y
                label: {
                    text: 'Température (°C)',
                    position: 'outer-middle'
                }
              },
              y2: {
                show: true,
                label: {
                  text: 'Probabilité de précipitations (%)',
                  position: 'outer-middle'
                }
              }
            },
          });  
        });
      });
    }

// GRAPHIQUE DES PREVISIONS HORAIRE 

// Récupération du nom de la ville a partir de la liste déroulante
function fetchCity10() {
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

  
  // Appel de l'API en fonction de la latitude et la longitude de la ville
  var url10 = "https://api.openweathermap.org/data/2.5/onecall?lat=" +cityLat()+ "&lon=" +cityLon()+ "&exclude=current,minutely,alerts,daily&appid=5c3ff5a9356fcec291824c0a99459121&lang=fr"
  var url13 = "/Data/" + queryLoc + "_mensuelle.json"

  fetch(url10)
    // On transforme la réponse de l'API en JSON, c'est plus simple.
    .then(rep => rep.json())
    // On traite le JSON
    .then((rep) => {
      console.log("response from fetch hourly() : ", rep);

      fetch(url13)
        // On transforme la réponse de l'API en JSON, c'est plus simple.
        .then(rep2 => rep2.json())
        // On traite le JSON
        .then((rep2) => {
          console.log("response from fetch hourly() : ", rep);

          var timeStamp = Date.now(), // le TimeStamp à convertir
                date = new Date(timeStamp);
            mois = date.getMonth() + 1; // on récupère le mois
              console.log(mois)

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart10',
          data: {
            columns: [ // Variable de la donnée
              [rep.timezone,Math.round(rep.hourly[0].temp - 273.15),Math.round(rep.hourly[1].temp - 273.15),Math.round(rep.hourly[2].temp - 273.15),Math.round(rep.hourly[3].temp - 273.15),Math.round(rep.hourly[4].temp - 273.15),Math.round(rep.hourly[5].temp - 273.15),Math.round(rep.hourly[6].temp - 273.15),Math.round(rep.hourly[7].temp - 273.15), Math.round(rep.hourly[8].temp - 273.15),Math.round(rep.hourly[9].temp - 273.15),Math.round(rep.hourly[10].temp - 273.15),Math.round(rep.hourly[11].temp - 273.15),Math.round(rep.hourly[12].temp - 273.15),Math.round(rep.hourly[13].temp - 273.15),Math.round(rep.hourly[14].temp - 273.15),Math.round(rep.hourly[15].temp - 273.15),Math.round(rep.hourly[16].temp - 273.15),Math.round(rep.hourly[17].temp - 273.15),Math.round(rep.hourly[18].temp - 273.15),Math.round(rep.hourly[19].temp - 273.15),Math.round(rep.hourly[20].temp - 273.15),Math.round(rep.hourly[21].temp - 273.15),Math.round(rep.hourly[22].temp - 273.15),Math.round(rep.hourly[23].temp - 273.15),Math.round(rep.hourly[24].temp - 273.15)],
              [rep2.TMEAN_SAISON,rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois],rep2.TMEAN_SAISON[mois]],
              [rep.timezone_offset,Math.round(rep.hourly[0].pop * 100), Math.round(rep.hourly[1].pop * 100), Math.round(rep.hourly[2].pop * 100), Math.round(rep.hourly[3].pop * 100), Math.round(rep.hourly[4].pop * 100), Math.round(rep.hourly[5].pop * 100), Math.round(rep.hourly[6].pop * 100), Math.round(rep.hourly[7].pop * 100), Math.round(rep.hourly[8].pop * 100), Math.round(rep.hourly[9].pop * 100), Math.round(rep.hourly[10].pop * 100), Math.round(rep.hourly[11].pop * 100), Math.round(rep.hourly[12].pop * 100), Math.round(rep.hourly[13].pop * 100), Math.round(rep.hourly[14].pop * 100), Math.round(rep.hourly[15].pop * 100), Math.round(rep.hourly[16].pop * 100), Math.round(rep.hourly[17].pop * 100), Math.round(rep.hourly[18].pop * 100), Math.round(rep.hourly[19].pop * 100), Math.round(rep.hourly[20].pop * 100), Math.round(rep.hourly[21].pop * 100), Math.round(rep.hourly[22].pop * 100), Math.round(rep.hourly[23].pop * 100), Math.round(rep.hourly[24].pop * 100),]
            ],
            types: {
              [rep2.TMEAN_SAISON]: 'spline',
              [rep.timezone]: 'spline',
              [rep.timezone_offset]: 'bar'
            },
            colors: { // Définition de la couleur
              [rep2.TMEAN_SAISON]: '#FFB154',
              [rep.timezone]: '#FFEB00',
              [rep.timezone_offset]: '#63A7FF'
            },
            names: { // Définition du nom des colonnes
              [rep2.TMEAN_SAISON]: 'Température mensuelle de saison',
              [rep.timezone]: 'Température',
              [rep.timezone_offset]: 'Probabilité de précipitations'
            },
            axes: {
              [rep.timezone_offset]: 'y2'
            }
          },
          axis: {
            x: { // Définition de l'axe des X
              type: 'category',
              categories: ["Maintenant", "h+1", "h+2", "h+3", "h+4", "h+5","h+6", "h+7", "h+8", "h+9", "h+10", "h+11", "h+12", "h+13", "h+14", "h+15", "h+16", "h+17", "h+18", "h+19", "h+20", "h+21", "h+22", "h+23", "h+24"]
            },
            y: { // Définition de l'axe des Y
              label: {
                  text: 'Température (°C)',
                  position: 'outer-middle'
              }
            },
            y2: {
              show: true,
              label: {
                text: 'Probabilité de précipitations (%)',
                position: 'outer-middle'
              }
            }
          },
        });
        });  
    });
  }