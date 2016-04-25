'use strict';

var sensorsValue = {
    sensor1: undefined,
    sensor2: undefined,
    sensor3: undefined
}

export const database = (function() {
    function set(postData) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss');

        sensorsValue.sensor1 = sensorsValue.sensor1 || postData.sensor1;
        sensorsValue.sensor2 = sensorsValue.sensor2 || postData.sensor2;
        sensorsValue.sensor3 = sensorsValue.sensor3 || postData.sensor3;
        if (sensorsValue.sensor1 && sensorsValue.sensor2 && sensorsValue.sensor3) {
            SensorData.insert({
                date: now,
                sensor1: sensorsValue.sensor1,
                sensor2: sensorsValue.sensor2,
                sensor3: sensorsValue.sensor3
            });
            sensorsValue = {
                sensor1: undefined,
                sensor2: undefined,
                sensor3: undefined
            };
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
            sensorStatus: {
                sensor1: data[0].sensor1,
                sensor2: data[0].sensor2,
                sensor3: data[0].sensor3
            }
        }
        return JSON.stringify(status);
    }

    function get(limit) {
        return JSON.stringify(SensorData.find({}, {
            limit: limit
        }).fetch({}));
    }

    return {
        set: set,
        get: get,
        getStatus: getStatus
    };
})();
