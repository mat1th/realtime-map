import './add-incident.html';
import {
    Template
} from 'meteor/templating';



Template.addincident.events({
    'submit form': function(event) {
        event.preventDefault();
        var buurt = event.target.buurt.value;
        var plein = event.target.plein.value;
        var probleem = event.target.probleem.value;
        if (buurt && plein && probleem) {
            Meteor.call("newIncident", buurt, plein, probleem);
            Router.go('/bedankt');
        } else {
            console.log('error');
        }
    }
});

Template.addincident.helpers({
    'data': function(event) {
        var sensors = Sensors.find({}).fetch({});
        var buurten = [];
        var pleinen = [];
        sensors.forEach(function(sensor) {
            buurten.push({
                buurt: sensor.buurt
            });
            pleinen.push({
                plein: sensor.plein
            });
        });
        return {
            buurten: buurten,
            pleinen: pleinen
        };
    }
});
