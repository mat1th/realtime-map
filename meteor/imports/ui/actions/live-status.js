export const liveStatus = function(id) {

    var sensors = SensorData.find({
        sensorId: id
    }, {
        sort: {
            date: -1
        },
        limit: 15
    }).fetch();

    var count = 0;

    sensors.forEach(function(sensor) {

        if(sensor.sensorvalue.value1 > 400 && sensor.sensorvalue.value2) {
            count++;
        }

    });

    return {
        count: (count >= 5) ? 1 : 0,
        incidences: (count >= 5) ? true : false,
        id : id
    }

}
