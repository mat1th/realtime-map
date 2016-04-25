'use strict';
import {
    check
} from 'meteor/check'

Meteor.methods({
    newSensor: function(name, location, gps) {
        var now = moment().format('YYYY-MM-DD HH:mm:ss'),
            sensorsLon = Sensors.find({
                location: location
            }).count({});

        check(name, String);
        check(location, String);
        check(gps.lon, Number);
        check(gps.lat, Number);
      
        if (sensorsLon === 0) {
            Sensors.insert({
                date: now,
                name: name,
                location: location,
                lon: gps.lon,
                lat: gps.lat,
                user: 'hu'
            });
        } else {
            console.log('error');
        }

        console.log(Sensors.find({}).fetch({}));
    }
});
