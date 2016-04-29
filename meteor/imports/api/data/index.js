'use strict';
import {
    liveStatus
} from '../../ui/actions/live-status.js';

var sensorsValue = {
    value1: undefined,
    value2: undefined,
    sensorId: undefined
}
var testAmout = 0;
export const database = (function() {
    function set(postData) {
        var now = moment().add(2, 'hours').format('YYYY-MM-DD HH:mm:ss');

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
        var leds;
        var data = SensorData.find({}, {
            sort: {
                date: -1
            },
            limit: 1
        }).fetch({})[0];
        if (testAmout > 5) {
            testAmout = 0;
            ledStatus = undefined;
        } else {
            testAmout++;
        }
        if (ledStatus != undefined) {
            var leds = ledStatus;
        } else {
            var leds = liveStatus(data.sensorId).incidences;
        }

        var status = {
            date: data.date,
            led: leds,
            sensorId: data.sensorId,
            value1: data.sensorvalue.value1,
            value2: data.sensorvalue.valeu2,
        }
        return JSON.stringify(status);
    }

    function get(limit, id) {
        if (!id) {
            return JSON.stringify(SensorData.find({}, {
                limit: limit,
                sort: {
                    date: -1
                }
            }).fetch({}));
        } else {
            return JSON.stringify(SensorData.find({
                sensorId: id
            }, {
                limit: limit,
                sort: {
                    date: -1
                }
            }).fetch({}));
        }

    }

    return {
        set: set,
        get: get,
        getStatus: getStatus
    };
})();
