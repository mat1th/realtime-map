# Project 3

## Client

Gemeente Amsterdam-Oost

## Concept

### Sensoren

- Afstandsensor
- Geluidsensor
- Licht sensor

## API

This app has a API where you can get the realtime data.

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

## Contributors

- Dylan Vens for meteor/front end
- [Matthias Dolstra](http://dolstra/me) for server side/API and meteor/front end
- Heleen Snoeck for design/UX
- Fons Hettema for meteor/front end
- Lisa Klein for hardware
