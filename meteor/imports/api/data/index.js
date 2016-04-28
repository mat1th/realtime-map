'use strict';

var sensorsValue = {
    sensor: undefined,
    sensorId: undefined
}

export const database = (function() {
    function set(postData) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss');

        sensorsValue.sensor = sensorsValue.sensor || postData.sensor;
        sensorsValue.sensorId = sensorsValue.sensorId || postData.sensorId;

        if (sensorsValue.sensor && sensorsValue.sensorId) {
            SensorData.insert({
                date: now,
                sensorId: sensorsValue.sensorId,
                sensorvalue: sensorsValue.sensor
            });
            sensorsValue = {
                sensor: undefined,
                sensorId: undefined
            }
        }
    }

    function getStatus() {
        var data = SensorData.find({}, {
            sort: {
                date: -1
            },
            limit: 1
        }).fetch({});

        var status = {
            date: data[0].date,
            led: true,
            sensorId: data[0].sensorId,
            sensorvalue: data[0].sensorvalue,

        }
        return JSON.stringify(status);
    }

    function get(limit) {
        return JSON.stringify(SensorData.find({}, {
            limit: limit,
            sort: {
                date: -1
            }
        }).fetch({}));
    }

    return {
        set: set,
        get: get,
        getStatus: getStatus
    };
})();
