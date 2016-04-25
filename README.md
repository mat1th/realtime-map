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

You can get the last status from my sensor from [iot.dolstra.me/api/status](http://iot.dolstra.me/api/status/). You will get the status of the different sensors.

```json
{
  "date": "2016-04-25 17:33:36",
  "sensorStatus": {
    "sensor1": 1,
    "sensor2": 2,
    "sensor3": 3
  }
}
```

### History

You can also get the history data from [iot.dolstra.me/api/data](http://iot.dolstra.me/api/data). You will get an array with the time and the sensor status.

```json
    [{
      "_id": "LmW5cHNXANHDXkWcR",
      "date": "2016-04-25 17:33:36",
      "sensor1": 1,
      "sensor2": 2,
      "sensor3": 3
    },
    ...
]
```

## Contributors
- Dylan Vens for meteor front end
- [Matthias Dolstra](http://dolstra/me) for server side/API
- Heleen Snoeck for design/UX
- Fons Hettema for meteor front end
- Lisa Klein for hardware
