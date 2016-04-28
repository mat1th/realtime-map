'use strict';
import {
    liveStatus
} from '../../ui/actions/live-status.js';

var sensorsValue = {
    value1: undefined,
    value2: undefined,
    sensorId: undefined
}

export const database = (function() {
    function set(postData) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss');

        sensorsValue.value1 = sensorsValue.sensor || postData.value1;
        sensorsValue.value2 = sensorsValue.sensor || postData.value2;
        sensorsValue.sensorId = sensorsValue.sensorId || postData.sensorId;

        if (sensorsValue.value1 && sensorsValue.sensorId) {
            SensorData.insert({
                date: now,
                sensorId: sensorsValue.sensorId,
                sensorvalue: {
                    value1: sensorsValue.value1,
                    value2: sensorsValue.value2
                }
            });
            sensorsValue = {
                value1: undefined,
                value2: undefined,
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
            led: liveStatus(data[0].sensorId).incidences,
            sensorId: data[0].sensorId,
            value1: data[0].sensorvalue.value1,
            value2: data[0].sensorvalue.valeu2,
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
