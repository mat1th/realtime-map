import './chart.html';
import {
    closeOverlay
} from '../../actions/overlay.js';

var amout = new ReactiveVar(0);

function subDate(o, days) {
    return new Date(o.getFullYear(), o.getMonth(), o.getDate() - days);;
}

function addDate(o, days) {
    return new Date(o.getFullYear(), o.getMonth(), o.getDate() + days);;
}

Template.chart.rendered = function() {
    var today = new Date();
    var todayPlusTwo = addDate(today, 2);
    var todayMinusWeek = subDate(today, 7);
}

function toggleMessage(opt_in) {

    if (opt_in === 'open') {

        $('.message').addClass('is-active');

    } else {

        $('.message').removeClass('is-active');

    }
}

Template.chart.events({
    'click .overlay-close': function(event) {
        closeOverlay();
    },
    'click .add': function(e) {
        toggleMessage('open');
    },
    'click .message__btn': function(e) {
        $('.message__container').addClass('is-active');

        setTimeout(function() {

            toggleMessage('close');
            $('.message__container').removeClass('is-active');

        }, 600);
    },
    'click .message__close-btn': function(e) {
        toggleMessage('close');
    }
});
Template.chart.helpers({
    status: function() {
        return statusObj.get();
    },
    sensor: function() {
        var neighbourhood = statusObj.get();
        if (neighbourhood != 0) {
            var sensor = Sensors.find({
                sensorId: neighbourhood.id
            }).fetch()[0];
            // console.log( neighbourhood.id);
            var sensorName = sensor.buurt;
            var sensorNeighbour = sensor.plein;

            return {
                plein: sensorNeighbour,
                neighbourhood: sensorName
            }
        }
    },
    insidents: function() {
        var neighbourhood = statusObj.get();
        if (neighbourhood != 0) {
            var incidents = Meteor.call('insidents', neighbourhood.id, function(error, result) {
                amout.set(result);
            });
            return amout.get();
        }
    }
});
