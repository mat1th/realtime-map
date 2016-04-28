export const liveStatus = function(id) {

    var sensors = SensorData.find({sensorId: id},{sort: {date: -1}, limit: 15}).fetch();
    var count = 0;

    sensors.forEach(function(sensor) {

        console.log(sensor.sensorvalue.value1);

        if(sensor.sensorvalue.value1 > 500 && sensor.sensorvalue.value2 ) {

            count++;

        }

    });

    return {
        count: count,
        incidences: (count >= 4) ? true : false
    }

}
