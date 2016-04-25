'use strict';

var sensorsdata = {
    sensor1: undefined,
    sensor2: undefined,
    sensor3: undefined
}

export const database = (function() {
    function set(postData) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss');

        sensorsdata.sensor1 = sensorsdata.sensor1 || postData.sensor1;
        sensorsdata.sensor2 = sensorsdata.sensor2 || postData.sensor2;
        sensorsdata.sensor3 = sensorsdata.sensor3 || postData.sensor3;
        if (sensorsdata.sensor1 && sensorsdata.sensor2 && sensorsdata.sensor3) {
            sensors.insert({
                date: now,
                sensor1: sensorsdata.sensor1,
                sensor2: sensorsdata.sensor2,
                sensor3: sensorsdata.sensor3
            });
            sensorsdata = {
                sensor1: undefined,
                sensor2: undefined,
                sensor3: undefined
            };
        }
    }

    function getStatus() {
        var data = sensors.find({}, {
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
        return JSON.stringify(sensors.find({}, {
            limit: limit
        }).fetch({}));
    }

    return {
        set: set,
        get: get,
        getStatus: getStatus
    };

})();
