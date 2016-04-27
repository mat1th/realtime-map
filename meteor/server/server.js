import '../imports/startup/server/index.js'

// Sensors.remove({});
SensorData.remove({});
//
//
var data = [{
    _id: "MWhBKBTLFuo4TWbsdfsd",
    date: "2016-04-10 11:51:39",
    sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    sensorvalue: "100"
}, {
    _id: "7QcNux234s2xvHDHgZ",
    date: "2016-04-12 11:51:40",
    sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    sensorvalue: "120"
}, {
    _id: "FyJGRg242ew24k8poe",
    date: "2016-04-14 11:51:40",
    sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    sensorvalue: "110"
}, {
    _id: "MwDuFaFt23423dDcX4R",
    date: "2016-04-16 11:51:40",
    sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    sensorvalue: "130"
}, {
    _id: "MwDuFaFt42332DcX4R",
    date: "2016-04-18 11:51:40",
    sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    sensorvalue: "120"
}, {
    _id: "MwDuFaFt23432dDcX4R",
    date: "2016-04-20 11:51:40",
    sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    sensorvalue: "140"
}, {
    _id: "sd2dfasdfdasfdss33",
    date: "2016-04-22 11:51:40",
    sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4",
    sensorvalue: "150"
}];

data.forEach(function(elemnt) {
    SensorData.insert(elemnt);
})
