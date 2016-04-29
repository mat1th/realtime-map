# Project 3

## Client
Gemeente Amsterdam-Oost

## Team
- Dylan Vens: Meteor/Front-end
- [Matthias Dolstra](http://dolstra/me): Server Side/API, Meteor/Front-End
- Heleen Snoeck: Design/UX
- [Senny Kalidien](http://directzichtbaar.nl): Design/Ux & Meteor Front-End
- Fons Hettema: Meteor/Front-end
- Lisa Klein: Hardware

## Het probleem
14% van de bewoners in Amsterdam-Oost geeft aan erge overlast te hebben van  hangjongeren in de buurt Oost. Dit zorgt ervoor dat zij zich niet veilig voelen. Deze overlast heeft vaak te maken met vandalisme, intimiterend gedrag en/of andere (kleine) criminele activiteiten. Voor de bewoners is het erg lastig om zich hier tegen te verzetten. Er moet simpelweg strenger opgetreden worden tegen deze jongeren.


## De opdracht
*Bedenk een manier om het gedrag van de hangjongeren te meten en kijk op basis van de data die verzameld wordt of er een melding uitgestuurd kan worden naar de jongeren en/of een toezichtshouder*

**Vereisten**

1: Geluid en beweging meten:
- Snelle eenvoudige response (realtime)
- Signaal naar toezichthouders
- Signaal naar overlastgevers (verlichting bijv.)

2: Een dashboard voor de gemeente waarin:
- zij een overzicht van de sensoren te zien krijgen en de daarbij behorende data die *realtime* gemeten en opgeslagen wordt. Deze data moet weergeven waar en hoe het is misgegaan, zodat hierop direct gehandeld kan worden


## Het concept
Ons concept bestaat uit een map van Amsterdam die realtime weergeeft waar de sensors geplaatst zijn binnen Amsterdam(-Oost) en waar de wijkagenten zich bevinden.

Deze sensors houden continue bij of:
1. er iemand aanwezig is, gemeten in centimeters
2. hoeveel geluid er geproduceerd wordt in decibels

De combinatie van deze 2 sensoren moet duidelijk maken of hangjongeren het te bont maken op een plein of in een buurt. Als zij de grens overschrijden wordt wordt een sensor rood weergegeven op de map en krijgt de beheerder van de dashboard een melding. Op deze melding kan gereageerd worden door een melding door te sturen naar een wijkagent.


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
