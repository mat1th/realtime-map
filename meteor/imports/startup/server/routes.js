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
            console.log(sensorsdata);
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

        this.response.end('post acept\n');
    });

Router.route('/api/data', {
        where: 'server'
    })
    .get(function() {
        this.response.end(JSON.stringify(sensors.find({}).fetch({})));
    });
