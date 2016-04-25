'use strict';
import {
    moment
} from 'meteor/momentjs:moment';

var sensorsdata = {
    sensor1: undefined,
    sensor2: undefined,
    sensor3: undefined
}

Router.route('/api', {
        where: 'server'
    })
    .post(function() {
        var postData = this.request.body,
            now = moment().format('YYYY-MM-DD HH:mm:ss');

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
        this.response.end('post acepted\n');
    });

Router.route('/api/data', {
        where: 'server'
    })
    .get(function() {
        this.response.end(JSON.stringify(sensors.find({}, {
            limit: 100
        }).fetch({})));
    });


Router.route('/api/status', {
        where: 'server'
    })
    .get(function() {
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
        this.response.end(JSON.stringify(status));
    });
