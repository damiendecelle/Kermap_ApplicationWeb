// GRAPHIQUES HISTORIQUES

// GRAPHIQUES MENSUELLES

  // Création du graphique synthétique des températures mensuelles
    
      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_mensuelle.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart',
          data: {
            url : url, // Variable de la donnée
            hide : ['MONTH', 'PREC_SAISON', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'], // Suppression des champs inutile 
            names: { // Définition du nom des colonnes
              TMEAN_SAISON: 'Température moyenne de saison',
              TMAX_SAISON: 'Température maximale de saison',
              TMIN_SAISON: 'Température minimale de saison',
              TMEAN: 'Température moyenne',
              TMAX: 'Température maximale',
              TMIN: 'Température minimale',
              T_EXTREME_MAX: 'Température maximale extrème',
              T_EXTREME_MIN: 'Température minimale extrème'
            },
            colors: { // Définition de la couleur
              TMEAN_SAISON: '#FF9200',
              TMAX_SAISON: '#F01D1D',
              TMIN_SAISON: '#006ECF',
              TMEAN: '#FFF700',
              TMAX: '#C10000',
              TMIN: '#003F76',
              T_EXTREME_MAX: '#FFCCCC',
              T_EXTREME_MIN: '#BCFFFC'
            },
            groups: [ // Groupement de plusieurs colonnes
              ['T_EXTREME_MAX', 'T_EXTREME_MIN']
            ],
            types: { // Définition de la représentation graphique de chaque colonne
              TMEAN_SAISON: 'spline',
              TMAX_SAISON: 'spline',
              TMIN_SAISON: 'spline',
              TMEAN: 'spline',
              TMAX: 'spline',
              TMIN: 'spline',
              T_EXTREME_MAX: 'bar',
              T_EXTREME_MIN: 'bar'
            },
          },
          axis: {
            x: { // Définition de l'axe des x
                type: 'category',
                categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
            },
            y: { // Définition de l'axe des Y
              label: {
                  text: 'Température (°C)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide : ['MONTH', 'PREC_SAISON', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

  // Création du graphique synthétique des températures mensuelles

      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity1() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url1 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_mensuelle.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart1',
          data: {
            url : url1, // Variable de la donnée
            hide : ['MONTH', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'], // Suppression des champs inutile 
            names: { // Définition du nom des colonnes
              PREC_SAISON: 'Précipitations saisonières cumulées sur 1 mois',
              PREC: 'Précipitations cumulées sur 1 mois',
              PREC_MAX: 'Précipitations maximales sur 24h',
              PREC_CUMUL: 'Précipitations cumulées totale'
            },
            colors: { // Définition de la couleur
              PREC_SAISON: '#2AA4AF',
              PREC: '#86F5FF',
              PREC_MAX: '#00CF8B',
              PREC_CUMUL: '#34FFBC'
            },
            types: { // Définition de la représentation graphique de chaque colonne
              PREC_SAISON: 'spline',
              PREC: 'bar',
              PREC_MAX: 'spline',
              PREC_CUMUL: 'spline'
            },
          },
          axis: {
            x: { // Définition de l'axe des x
                type: 'category',
                categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
            },
            y: { // Définition de l'axe des Y
              label: {
                  text: 'Précipitations (mm)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide : ['MONTH', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

  // Création du graphique synthétique des ecarts de températures mensuelles

      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity2() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url2 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_mensuelle.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart2',
          data: {
            url : url2, // Variable de la donnée
            hide : ['MONTH', 'PREC_SAISON', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'PREC_ECART'], // Suppression des champs inutile 
            names: { // Définition du nom des colonnes
              TMEAN_ECART: 'Ecart aux normes des températures moyennes',
              TMAX_ECART: 'Ecart aux normes des températures maximales',
              TMIN_ECART: 'Ecart aux normes des températures minimales'
            },
            colors: { // Définition de la couleur
              TMEAN_ECART: '#FFF700',
              TMAX_ECART: '#F01D1D',
              TMIN_ECART: '#006ECF'
            },
            type: 'spline',
          },
          axis: {
            x: { // Définition de l'axe des x
                type: 'category',
                categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
            },
            y: { // Définition de l'axe des Y
              center: 0,
              label: {
                  text: 'Température (°C)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide : ['MONTH', 'PREC_SAISON', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'PREC_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

  // Création du graphique synthétique des ecarts de précipitations mensuelles

      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity3() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url3 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_mensuelle.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart3',
          data: {
            url : url3, // Variable de la donnée
            hide : ['MONTH', 'PREC_SAISON', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART'], // Suppression des champs inutile 
            names: { // Définition du nom des colonnes
              PREC_ECART: 'Ecart aux normes des précipitations',
            },
            colors: { // Définition de la couleur
              PREC_ECART: '#34FFBC'
            },
            type: 'spline',
          },
          axis: {
            x: { // Définition de l'axe des x
                type: 'category',
                categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
            },
            y: { // Définition de l'axe des Y
              center: 0,
              label: {
                  text: 'Précipitations (mm)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide : ['MONTH', 'PREC_SAISON', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

  // Création du Diagramme ombrothermique des normales de saison

      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity4() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url4 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_mensuelle.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart4',
          data: {
            url : url4, // Variable de la donnée
            hide : ['MONTH', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'], // Suppression des champs inutile 
            names: { // Définition du nom des colonnes
              TMEAN_SAISON: 'Température moyenne de saison',
              PREC_SAISON: 'Précipitations saisonières cumulées sur 1 mois',
            },
            colors: { // Définition de la couleur
              TMEAN_SAISON: '#FF9200',
              PREC_SAISON: '#86F5FF',
            },
            types: { // Définition de la représentation graphique de chaque colonne
              TMEAN_SAISON: 'spline',
              PREC_SAISON: 'bar',
            },
            axes: {
                PREC_SAISON: 'y2'
            }
          },
          axis: {
            x: { // Définition de l'axe des x
                type: 'category',
                categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
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
                  text: 'Précipitations (mm)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide :  ['MONTH', 'PREC', 'PREC_MAX', 'PREC_CUMUL', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

  // Création du Diagramme ombrothermique des normales de saison

      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity5() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url5 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_mensuelle.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart5',
          data: {
            url : url5, // Variable de la donnée
            hide : ['MONTH', 'PREC_SAISON', 'PREC_MAX', 'PREC_CUMUL', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN_SAISON', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'], // Suppression des champs inutile 
            names: { // Définition du nom des colonnes
              TMEAN: 'Température moyenne',
              PREC: 'Précipitations cumulées sur 1 mois',
            },
            colors: { // Définition de la couleur
              TMEAN: '#FF9200',
              PREC: '#86F5FF',
            },
            types: { // Définition de la représentation graphique de chaque colonne
              TMEAN: 'spline',
              PREC: 'bar',
            },
            axes: {
                PREC: 'y2'
            }
          },
          axis: {
            x: { // Définition de l'axe des x
                type: 'category',
                categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
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
                  text: 'Précipitations (mm)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide :  ['MONTH', 'PREC_SAISON', 'PREC_MAX', 'PREC_CUMUL', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN_SAISON', 'TMAX', 'TMIN', 'T_EXTREME_MAX', 'T_EXTREME_MIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART', 'PREC_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

// GRAPHIQUES JOURNALIERS
  
      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity6() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url6 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_journaliere.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart6',
          data: {
            url : url6, // Variable de la donnée
            hide : ['DAY', 'PREC_SAISON', 'PREC', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART'], // Suppression des champs inutile 
            x: 'DAY',
            names: { // Définition du nom des colonnes
              TMEAN_SAISON: 'Température moyenne de saison',
              TMAX_SAISON: 'Température maximale de saison',
              TMIN_SAISON: 'Température minimale de saison',
              TMEAN: 'Température moyenne',
              TMAX: 'Température maximale',
              TMIN: 'Température minimale'
            },
            colors: { // Définition de la couleur
              TMEAN_SAISON: '#FF9200',
              TMAX_SAISON: '#F01D1D',
              TMIN_SAISON: '#006ECF',
              TMEAN: '#FFF700',
              TMAX: '#C10000',
              TMIN: '#003F76'
            },
            type: 'spline'
          },
          axis: {
            y: { // Définition de l'axe des Y
              label: {
                  text: 'Température (°C)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide : ['DAY', 'PREC_SAISON', 'PREC', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

  // Création du graphique synthétique des précipitations journalières

      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity7() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url7 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_journaliere.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart7',
          data: {
            url : url7, // Variable de la donnée
            hide : ['DAY', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART'], // Suppression des champs inutile 
            x: 'DAY',
            names: { // Définition du nom des colonnes
              PREC_SAISON: 'Précipitations saisonières',
              PREC: 'Précipitations'
            },
            colors: { // Définition de la couleur
              PREC_SAISON: '#2AA4AF',
              PREC: '#86F5FF'
            },
            types: {
              PREC_SAISON: 'spline',
              PREC: 'bar'
            }
          },
          axis: {
            y: { // Définition de l'axe des Y
              label: {
                  text: 'Précipitations (mm)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide : ['DAY', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN', 'TMEAN_ECART', 'TMAX_ECART', 'TMIN_ECART'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }

  // Création du graphique synthétique des écarts de températures journalières
    
      // On appelle le CSV avec la fonction qui nous permet de choisir une ville
      function fetchCity8() {
      var queryLoc = document.getElementById("queryLoc").value;
      var url8 = "https://raw.githubusercontent.com/damiendecelle/Kermap_ApplicationWeb/main/Data/" + queryLoc + "_journaliere.csv"

        // Et on ajoute au graphique la donnée de la manière suivante : 
        var chart = c3.generate({
          bindto: '#chart8',
          data: {
            url : url8, // Variable de la donnée
            hide : ['DAY', 'PREC_SAISON', 'PREC', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN'], // Suppression des champs inutile 
            x: 'DAY',
            names: { // Définition du nom des colonnes
              TMEAN_ECART: 'Ecart aux normes des températures moyennes',
              TMAX_ECART: 'Ecart aux normes des températures maximales',
              TMIN_ECART: 'Ecart aux normes des températures minimales'
            },
            colors: { // Définition de la couleur
              TMEAN_ECART: '#FFF700',
              TMAX_ECART: '#F01D1D',
              TMIN_ECART: '#006ECF'
            },
            type: 'spline',
          },
          axis: {
            y: { // Définition de l'axe des Y
              center: 0,
              label: {
                  text: 'Température (°C)',
                  position: 'outer-middle'
              }
            }
          },
          legend: {
            hide : ['DAY', 'PREC_SAISON', 'PREC', 'TMEAN_SAISON', 'TMAX_SAISON', 'TMIN_SAISON', 'TMEAN', 'TMAX', 'TMIN'] // Suppression des colonnes inutiles dans la légende
          }
        });
      }
