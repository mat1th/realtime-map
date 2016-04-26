import './addsensor.html';
import {
    Template
} from 'meteor/templating';

var gps = {
    lat: null,
    lon: null
}

Template.addsensor.onRendered(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        gps.lat = position.coords.latitude;
        gps.lon = position.coords.longitude;
    });
});

Template.addsensor.events({
    'submit form': function(event) {
        event.preventDefault();
        var name = event.target.name.value;
        var location = event.target.location.value;
        if (name && location) {
            Meteor.call("newSensor", name, location, gps);
        }else{
          console.log('error');
        }
    }
});
