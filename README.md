# Project 3

## Client
Gemeente Amsterdam-Oost

## Team
- Dylan Vens: Meteor/Frontend
- [mat1th](https://github.com/mat1th/): Server Side/API, Meteor/Frontend
- Heleen Snoeck: Design/UX Deel Front-end
- [Senny Kalidien](http://directzichtbaar.nl): Design/Ux & Meteor Frontend
- Fons Hettema: Meteor/Frontend
- Lisa Klein: Hardware

## Het probleem
14% van de bewoners in Amsterdam-Oost geeft aan overlast te hebben van hangjongeren in stadsdeel Amsterdam Oost. Dit zorgt ervoor dat zij zich niet veilig voelen. Deze overlast heeft vaak te maken met vandalisme, intimiterend gedrag en/of andere (kleine) criminele activiteiten. Om dit probleem op te lossen wil stadsdeel Amsterdam Oost zorgen dat de juiste mensen op de juiste plaats zijn. 


## De opdracht
Naar aanleiding van de briefing van 25 april 2016. Hebben wij het probleem in kaart gebracht:
*Bedenk een manier om het gedrag van de hangjongeren te meten en kijk op basis van de data die verzameld wordt of er een melding uitgestuurd kan worden naar de jongeren en/of een toezichtshouder*

Wij hebben besloten ons te richten op de juiste mensen op de juiste plaats op de juiste tijd aan de hand van data. 

**Vereisten**

1: Geluid en beweging meten:
- Snelle eenvoudige response (realtime)
- Signaal naar toezichthouders
- Signaal naar overlastgevers (verlichting bijv.)

2: Een dashboard voor de gemeente waarin:
- zij een overzicht van de sensoren te zien krijgen en de daarbij behorende data die *realtime* gemeten en opgeslagen wordt. Deze data moet weergeven waar en hoe het is misgegaan, zodat hierop direct gehandeld kan worden


## Het concept
Ons concept de juiste mensen op de juiste plaats op de juiste tijd op basis van data.

Ons dashboard brengt de gemeente Amsterdam Oost inzicht over de situatie in de wijken waar sensors hangen. 
Eenmaal ingelogt op het dashboard zie je een kaart met de situatie van Amsterdam.
Je kunt zien waar de straatcoaches fietsen en waar er veel meldingen worden waargenomen. 

De sensoren meten continue of:
1. er iemand aanwezig is, gemeten in centimeters
2. hoeveel geluid er geproduceerd wordt in decibels

De combinatie van deze 2 sensoren moet duidelijk maken of hangjongeren het te bont maken op een plein of in een buurt. Als zij de grens overschrijden wordt er een sensor op de kaart rooden krijgt de beheerder van de dashboard een melding. Op deze melding kan gereageerd worden door een melding door te sturen naar een straatcoach.


## Hardware

### Board
NodeMCU ESP8266

### Sensoren
- [Afstandsensor](http://www.hackerstore.nl/Artikel/95)
- Microfoon x2 voor nauwkeurigheid

## API
De API is zelf gebouwd en slaat de data op die geregistreerd wordt door de sensoren

### Current status
You can get the last status from my sensor from [project3.dolstra.me/api/status](http://project3.dolstra.me/api/status/). You will get the status of the different sensors.

```json
  {
      "date": "2016-04-28 12:09:52",
      "led": true,
      "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
      "value1": "464"
  }
```

### History

You can also get the history data from [project3.dolstra.me/api/data](http://project3.dolstra.me/api/data). You will get an array with the time and the sensor status.

```json
    [{
      "_id": "aZortayZg3YSKm9Co",
      "date": "2016-04-28 12:09:52",
      "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
      "sensorvalue": {
          "value1": "464",
          "value2": "false"
      }       
    },{
      "_id": "Y6Ee9nQaanFeeACvZ",
      "date": "2016-04-28 12:09:51",
      "sensorId": "53180077-cfc9-49b7-b807-ec01cd02b4d4",
      "sensorvalue": {
          "value1": "475",
          "value2": "true"
      }
      }]
```

To get the data of one sensor add the sensor id to the path [project3.dolstra.me/api/data/a43153cf-93f3-4c82-947d-b9d993edab36](http://project3.dolstra.me/api/data/a43153cf-93f3-4c82-947d-b9d993edab36). You will get an array with the time and the sensor status.

```json
    [{
      "_id": "aZortayZg3YSKm9Co",
      "date": "2016-04-28 12:09:52",
      "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
      "sensorvalue": {
          "value1": "464",
          "value2": "false"
      }       
    }]
```
