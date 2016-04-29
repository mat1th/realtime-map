import '../imports/startup/server/index.js'
Sensors.remove({});
SensorData.remove({});

var sensors = [{
    "_id": "zx96MspPEB9RqYBHK",
    "date": "2016-04-29 08:55:15",
    "buurt": "Amsterdam Oost",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "plein": "Marionette plein",
    "lon": "4.939410",
    "lat": "52.351999",
    "user": "acgE6Z9rrNaq8TwPH"
}, {
    "_id ": "zx96MspPEB9RqDSHK",
    "date": "2016-04-29 09:10:15",
    "buurt": "Amsterdam Oost",
    "sensorId": "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    "plein": "Eerste Atjehstraat",
    "lon": "4.934814",
    "lat": "52.362796",
    "user": "acgE6Z9rrNaq8TwPH"
}];
sensors.forEach(function(elemnt) {
     Sensors.insert(elemnt);
});

// var data = [{
// 	"_id":"aZortayZg3YSKm9Cox",
// 	"date":"2016-04-28 12:50:52",
// 	"sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36",
// 	"sensorvalue":{
// 		"value1":"200",
// 		"value2":
// 		"false"
// 		}
// 	},
// 	{
// 	"_id":"aZortayZg3YSKm9Cod",
// 	"date":"2016-04-28 13:50:52",
// 	"sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36",
// 	"sensorvalue":{
// 		"value1":"150",
// 		"value2":
// 		"false"
// 		}
// 	},
// 	{"_id":"aZortayZg3YSKm9Coz",
// 	"date":"2016-04-28 14:50:52",
// 	"sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36",
// 	"sensorvalue":{
// 		"value1":"400",
// 		"value2":
// 		"false"
// 		}
// 	},
// 	{
// 	"_id":"aZortayZg3YSKm9Co2",
// 	"date":"2016-04-28 15:50:52",
// 	"sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36",
// 	"sensorvalue":{
// 		"value1":"200",
// 		"value2":
// 		"false"
// 		}
// 	},
// 	{
// 	"_id":"aZortayZg3YSKm9Co5",
// 	"date":"2016-04-28 16:50:52",
// 	"sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36",
// 	"sensorvalue":{
// 		"value1":"300",
// 		"value2":
// 		"false"
// 		}
// 	},
// 	{
// 	"_id":"aZortayZg3YSKm9Co9",
// 	"date":"2016-04-28 17:50:52",
// 	"sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36",
// 	"sensorvalue":{
// 		"value1":"400",
// 		"value2":
// 		"false"
// 		}
// 	},
// 	{
// 	"_id":"aZortayZg3YSKm9Co11",
// 	"date":"2016-04-28 18:50:52",
// 	"sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36",
// 	"sensorvalue":{
// 		"value1":"450",
// 		"value2":
// 		"false"
// 	}
// }];

var data = [{
    "_id": "bttmZw3awiSBRiXSJ",
    "date": "2016-04-28 12:24:27",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "475",
        "value2": "true"
    }
}, {
    "_id": "koJft2xJiTip6zwPY",
    "date": "2016-04-28 12:25:27",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "472",
        "value2": "true"
    }
}, {
    "_id": "pagNDYDxEx82iqquz",
    "date": "2016-04-28 12:26:25",
    "sensorId": "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    "sensorvalue": {
        "value1": "454",
        "value2": "true"
    }
}, {
    "_id": "cg7B3sQdgMZzH6nT3",
    "date": "2016-04-28 12:27:22",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "473",
        "value2": "true"
    }
}, {
    "_id": "AQGPQLc9uToje8Dap",
    "date": "2016-04-28 12:28:22",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "472",
        "value2": "true"
    }
}, {
    "_id": "2X2X5gHhKmqniEBk2",
    "date": "2016-04-28 12:30:21",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "475",
        "value2": "false"
    }
}, {
    "_id": "svjx7ekavwkWekTju",
    "date": "2016-04-28 12:31:21",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "467",
        "value2": "true"
    }
}, {
    "_id": "ewjKehkxwNWuuqbMn",
    "date": "2016-04-28 12:32:21",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "481",
        "value2": "true"
    }
}, {
    "_id": "HEK4poCqHH6MHDDBn",
    "date": "2016-04-28 12:33:21",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "480",
        "value2": "true"
    }
}, {
    "_id": "XFr93trMhqBv7wJAQ",
    "date": "2016-04-28 12:34:21",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "477",
        "value2": "true"
    }
}, {
    "_id": "PCtcqWFBatX9RLw2r",
    "date": "2016-04-28 12:35:19",
    "sensorId": "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    "sensorvalue": {
        "value1": "448",
        "value2": "true"
    }
}, {
    "_id": "hTW7sQHe74oM9MfzM",
    "date": "2016-04-28 12:36:13",
    "sensorId": "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    "sensorvalue": {
        "value1": "485",
        "value2": "true"
    }
}, {
    "_id": "fymFbQxfCCJsQNGxz",
    "date": "2016-04-28 12:37:10",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "471",
        "value2": "false"
    }
}, {
    "_id": "mpGc3AaS6XrFhoMos",
    "date": "2016-04-28 12:38:05",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "464",
        "value2": "true"
    }
}, {
    "_id": "NPqqEFM2niKirmT8k",
    "date": "2016-04-28 12:39:04",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "467",
        "value2": "false"
    }
}, {
    "_id": "MYmk9HRoqLTGHEvkf",
    "date": "2016-04-28 12:40:04",
    "sensorId": "a43153cf-93f3-4c82-947d-b9d993edab36",
    "sensorvalue": {
        "value1": "463",
        "value2": "false"
    }
}]

data.forEach(function(elemnt) {
     SensorData.insert(elemnt);
});
