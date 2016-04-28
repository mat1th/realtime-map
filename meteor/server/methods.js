'use strict';
import {
    check
} from 'meteor/check'

Meteor.methods({
    newSensor: function(buurt, plein, gps, sensorId, user) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss'),
            sensorsLon = Sensors.find({
                plein: plein
            }).count({});

        check(buurt, String);
        check(plein, String);
        check(sensorId, String);
        check(user, user);
        check(gps.lon, Number);
        check(gps.lat, Number);

        if (sensorsLon === 0) {
            Sensors.insert({
                date: now,
                buurt: buurt,
                sensorId: sensorId,
                plein: plein,
                lon: gps.lon,
                lat: gps.lat,
                user: user
            });
        } else {
            console.log('error');
        }
    },
    newIncident: function(buurt, plein, probleem) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss');
        
        check(buurt, String);
        check(plein, String);
        check(probleem, String);

        Incidents.insert({
            date: now,
            buurt: buurt,
            sensorId: sensorId,
            plein: plein,
            probleem: probleem,
            user: null
        });
    }
});
