'use strict';

// Publish the shared session information like the start time.
Meteor.publish("sensorData", function publishFunction() {
    if (this.userId) {
        return SensorData.find({});
    } else {
        this.ready();
    }
});

Meteor.publish("sensors", function publishFunction() {
    if (this.userId) {
        return Sensors.find({});
    } else {
        this.ready();
    }
});
Meteor.publish("cycles", function publishFunction() {
    if (this.userId) {
        return Cycles.find({});
    } else {
        this.ready();
    }
});

Meteor.publish("sensors", function publishFunction() {
    return Sensors.find({});
});
