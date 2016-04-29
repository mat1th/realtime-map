import '../imports/startup/server/index.js'
Sensors.remove({});
// SensorData.remove({});

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

//var data = [{"_id":"bttmZw3awiSBRiXSJ","date":"2016-04-28 12:24:27","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"475","value2":"true"}},{"_id":"koJft2xJiTip6zwPY","date":"2016-04-28 12:24:27","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"472","value2":"true"}},{"_id":"pagNDYDxEx82iqquz","date":"2016-04-28 12:24:25","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"454","value2":"true"}},{"_id":"cg7B3sQdgMZzH6nT3","date":"2016-04-28 12:24:22","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"473","value2":"true"}},{"_id":"AQGPQLc9uToje8Dap","date":"2016-04-28 12:24:22","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"472","value2":"true"}},{"_id":"2X2X5gHhKmqniEBk2","date":"2016-04-28 12:24:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"475","value2":"false"}},{"_id":"svjx7ekavwkWekTju","date":"2016-04-28 12:24:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"467","value2":"true"}},{"_id":"ewjKehkxwNWuuqbMn","date":"2016-04-28 12:24:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"481","value2":"true"}},{"_id":"HEK4poCqHH6MHDDBn","date":"2016-04-28 12:24:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"480","value2":"true"}},{"_id":"XFr93trMhqBv7wJAQ","date":"2016-04-28 12:24:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"477","value2":"true"}},{"_id":"PCtcqWFBatX9RLw2r","date":"2016-04-28 12:24:19","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"448","value2":"true"}},{"_id":"hTW7sQHe74oM9MfzM","date":"2016-04-28 12:24:13","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"485","value2":"true"}},{"_id":"fymFbQxfCCJsQNGxz","date":"2016-04-28 12:24:10","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"471","value2":"false"}},{"_id":"mpGc3AaS6XrFhoMos","date":"2016-04-28 12:24:05","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"true"}},{"_id":"NPqqEFM2niKirmT8k","date":"2016-04-28 12:24:04","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"467","value2":"false"}},{"_id":"MYmk9HRoqLTGHEvkf","date":"2016-04-28 12:24:04","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"false"}},{"_id":"KSaWTvhKPiaNWdGTs","date":"2016-04-28 12:24:04","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"false"}},{"_id":"Xmp3hqJHtYLRXzLsn","date":"2016-04-28 12:24:04","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"bBTSmnzt2jE2a6tn5","date":"2016-04-28 12:24:04","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"XPrzaBHzEt67PzMyj","date":"2016-04-28 12:24:03","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"465","value2":"false"}},{"_id":"v9SKyLHzRRzmkfQdK","date":"2016-04-28 12:24:03","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"465","value2":"true"}},{"_id":"sLFDpBgAy2DXhRv24","date":"2016-04-28 12:24:02","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"430","value2":"true"}},{"_id":"aA2xr7AyaPPTToMdx","date":"2016-04-28 12:23:58","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"false"}},{"_id":"xRAJdNPqu3sdpq4ZT","date":"2016-04-28 12:23:58","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"462","value2":"true"}},{"_id":"GYpBmYWmkE4L4BmF4","date":"2016-04-28 12:23:56","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"437","value2":"true"}},{"_id":"BomYtNSiDb6BYT9Qo","date":"2016-04-28 12:23:52","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"Tycw2Zqgi3KcXbsK3","date":"2016-04-28 12:23:52","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"zCDuRAfoCph75ZFQ7","date":"2016-04-28 12:23:52","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"szYjpddtPxPFwu7YG","date":"2016-04-28 12:23:51","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"438","value2":"true"}},{"_id":"6WvitxK9vuBtZHJ8p","date":"2016-04-28 12:23:51","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"true"}},{"_id":"EgJftDrrn6o5frzkL","date":"2016-04-28 12:23:51","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"3FQW9gZjmskFSRh9z","date":"2016-04-28 12:23:51","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"true"}},{"_id":"cL73MguDqWQjNpRwC","date":"2016-04-28 12:23:45","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"466","value2":"true"}},{"_id":"ZhTXSBbmMJDdiYfcT","date":"2016-04-28 12:23:45","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"473","value2":"true"}},{"_id":"Z376tfC3odeDXKqmQ","date":"2016-04-28 12:23:45","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"467","value2":"true"}},{"_id":"C697TyTo8gmdDoYJw","date":"2016-04-28 12:23:45","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"470","value2":"true"}},{"_id":"bn2kfSRyY7hwzEyT4","date":"2016-04-28 12:23:45","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"465","value2":"true"}},{"_id":"W9g7RG5qFQ3WszDqu","date":"2016-04-28 12:23:45","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"467","value2":"true"}},{"_id":"RYJdWJJtCSs7YXNWd","date":"2016-04-28 12:23:44","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"467","value2":"false"}},{"_id":"JsS5miY5aJbfHTAnP","date":"2016-04-28 12:23:44","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"465","value2":"true"}},{"_id":"4fmPr3qpDZK3Wf9uQ","date":"2016-04-28 12:23:39","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"466","value2":"false"}},{"_id":"uEkDYCfvo62dM3AM6","date":"2016-04-28 12:23:34","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"474","value2":"true"}},{"_id":"Sm2bTQBr6yaKvS8Fp","date":"2016-04-28 12:23:33","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"432","value2":"true"}},{"_id":"wbJ3teQKte9q9c4MA","date":"2016-04-28 12:23:33","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"456","value2":"true"}},{"_id":"dHTynkHFHqHJeee4s","date":"2016-04-28 12:23:33","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"460","value2":"false"}},{"_id":"9kHRrfwqpdvYNnC8v","date":"2016-04-28 12:23:33","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"460","value2":"false"}},{"_id":"iRgdfesmmxBoo9KZJ","date":"2016-04-28 12:23:33","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"eXmJRPqt6BjrSWPp2","date":"2016-04-28 12:23:27","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"true"}},{"_id":"Kzt7ud5CLCH2ZsgkF","date":"2016-04-28 12:23:27","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"sH3bJ8d4WdqTPwewA","date":"2016-04-28 12:23:27","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"L3WfJKukp58CzK8qz","date":"2016-04-28 12:23:27","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"false"}},{"_id":"TJCLkeZGAb3DLSxT2","date":"2016-04-28 12:23:26","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"465","value2":"true"}},{"_id":"8imF7YYWs8bya4AxR","date":"2016-04-28 12:23:23","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"437","value2":"true"}},{"_id":"wDbRP8mySQ2qgMLv8","date":"2016-04-28 12:23:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"true"}},{"_id":"DFrMDGTmYbnSCNvBc","date":"2016-04-28 12:23:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"8PSq7GyseLepCzWxi","date":"2016-04-28 12:23:21","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"DDJNuN42dzwLZsycC","date":"2016-04-28 12:23:20","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"vZaWxF9FKYbhRzNWo","date":"2016-04-28 12:23:20","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"24GRPAaRMwX5oYELZ","date":"2016-04-28 12:23:20","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"462","value2":"true"}},{"_id":"xoHonK8kjt8ebrtat","date":"2016-04-28 12:23:20","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"462","value2":"true"}},{"_id":"PX83yo8jg9HQ7ibod","date":"2016-04-28 12:23:20","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"true"}},{"_id":"GfMR3R6DgXEJWxzyy","date":"2016-04-28 12:23:19","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"463","value2":"true"}},{"_id":"BCA6nmY6Q4c5YRCy8","date":"2016-04-28 12:23:17","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"437","value2":"true"}},{"_id":"ykf9KTAmXmRMe9kdW","date":"2016-04-28 12:23:14","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"false"}},{"_id":"arvdKeEqf7K56eBfy","date":"2016-04-28 12:23:14","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"QacYBQZtPp6NnDaPE","date":"2016-04-28 12:23:14","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"27ePBGwDNE29ksMBT","date":"2016-04-28 12:23:14","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"460","value2":"true"}},{"_id":"sivNgAYcFXk98m6c3","date":"2016-04-28 12:23:13","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"464","value2":"false"}},{"_id":"Ztxs3YY5CmvRkdvhE","date":"2016-04-28 12:23:12","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"437","value2":"true"}},{"_id":"eXcw8P6ttMP8szcfG","date":"2016-04-28 12:23:08","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"453","value2":"false"}},{"_id":"pKyDahyushrdQaK4w","date":"2016-04-28 12:23:07","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"459","value2":"false"}},{"_id":"zHYQRLtMLRRnyDyJZ","date":"2016-04-28 12:23:07","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"462","value2":"false"}},{"_id":"ncFLmdQbJfdaMwFtj","date":"2016-04-28 12:23:06","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"436","value2":"true"}},{"_id":"BhZxcMJGscMptk6tr","date":"2016-04-28 12:23:02","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"461","value2":"true"}},{"_id":"E8Xwn7qrahypHo7xQ","date":"2016-04-28 12:23:02","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"456","value2":"false"}},{"_id":"mMZatMLQEWWuAkFSp","date":"2016-04-28 12:23:00","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"472","value2":"true"}},{"_id":"vhMRpuMHMYEG48ENC","date":"2016-04-28 12:22:57","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"456","value2":"true"}},{"_id":"Kr3qL5cSQAxx2PF5x","date":"2016-04-28 12:22:57","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"458","value2":"true"}},{"_id":"AnAdqALiSSMY8v9Xx","date":"2016-04-28 12:22:56","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"455","value2":"true"}},{"_id":"G6s8n5ipwEhJN7KEx","date":"2016-04-28 12:22:56","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"456","value2":"true"}},{"_id":"pnyoFd46dgaciJCF2","date":"2016-04-28 12:22:56","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"456","value2":"true"}},{"_id":"krNewRwQ8EsmC8Rtp","date":"2016-04-28 12:22:56","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"455","value2":"true"}},{"_id":"nk5Qd2dTt7cLrdQkh","date":"2016-04-28 12:22:56","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"458","value2":"true"}},{"_id":"36N85LopHjAprHR46","date":"2016-04-28 12:22:55","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"457","value2":"true"}},{"_id":"s7ELNvAozn3CubAZi","date":"2016-04-28 12:22:54","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"456","value2":"false"}},{"_id":"LbqpNiBxWdw4GEnva","date":"2016-04-28 12:22:54","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"454","value2":"true"}},{"_id":"mcQS83oGHJZEsFQMy","date":"2016-04-28 12:22:53","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"452","value2":"false"}},{"_id":"PH5NREjqGGcdk97fe","date":"2016-04-28 12:22:53","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"454","value2":"false"}},{"_id":"KD8SHCcXvCib7s6iF","date":"2016-04-28 12:22:53","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"455","value2":"false"}},{"_id":"m4EJYq5qC9Er6RWKM","date":"2016-04-28 12:22:52","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"441","value2":"false"}},{"_id":"J4QgsTR8t8gfpPAiy","date":"2016-04-28 12:22:52","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"446","value2":"false"}},{"_id":"mQ46Jdc3sNEJYMtuP","date":"2016-04-28 12:22:52","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"449","value2":"true"}},{"_id":"ErKvGNkHdSTKNsFAM","date":"2016-04-28 12:22:51","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"450","value2":"true"}},{"_id":"4FLTJbWkuHrnyJeHz","date":"2016-04-28 12:22:51","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"440","value2":"false"}},{"_id":"CY6azA8XsEGKTHDjG","date":"2016-04-28 12:22:50","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"437","value2":"true"}},{"_id":"p6ZQ8T56JR45KKv27","date":"2016-04-28 12:22:50","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"447","value2":"true"}},{"_id":"MuFYQHpDzdeC7zBPH","date":"2016-04-28 12:22:50","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"450","value2":"false"}},{"_id":"wbvdaxWzHvRmneTNP","date":"2016-04-28 12:22:50","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"448","value2":"true"}},{"_id":"LiSKto7QabEk6PNG6","date":"2016-04-28 12:22:44","sensorId":"53180077-cfc9-49b7-b807-ec01cd02b4d4","sensorvalue":{"value1":"440","value2":"true"}},{"_id":"7MTn25XBquAnpiNan","date":"2016-04-28 12:22:42","sensorId":"a43153cf-93f3-4c82-947d-b9d993edab36","sensorvalue":{"value1":"458","value2":"false"}}]

// data.forEach(function(elemnt) {
//      SensorData.insert(elemnt);
// });
