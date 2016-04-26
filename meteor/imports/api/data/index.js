'use strict';

var sensorsValue = {
    sensor1: undefined,
    sensor1id: undefined,
    sensor2: undefined,
    sensor2id: undefined,
    sensor3: undefined,
    sensor3id: undefined
}

export const database = (function() {
    function set(postData) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss');

        sensorsValue.sensor1 = sensorsValue.sensor1 || postData.sensor1;
        sensorsValue.sensor1id = sensorsValue.sensor1id || postData.sensor1id;
        sensorsValue.sensor2 = sensorsValue.sensor2 || postData.sensor2;
        sensorsValue.sensor2id = sensorsValue.sensor2id || postData.sensor2id;
        sensorsValue.sensor3 = sensorsValue.sensor3 || postData.sensor3;
        sensorsValue.sensor3id = sensorsValue.sensor3id || postData.sensor3id;

        if (sensorsValue.sensor1 && sensorsValue.sensor2 && sensorsValue.sensor3) {
            SensorData.insert({
                date: now,
                sensor1: {
                    id: sensorsValue.sensor1id,
                    value: sensorsValue.sensor1
                },
                sensor2: {
                    id: sensorsValue.sensor2id,
                    value: sensorsValue.sensor2
                },
                sensor3: {
                    id: sensorsValue.sensor3id,
                    value: sensorsValue.sensor3
                }
            });

            sensorsValue = {
                sensor1: undefined,
                sensor1id: undefined,
                sensor2: undefined,
                sensor2id: undefined,
                sensor3: undefined,
                sensor3id: undefined
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
