'use strict';

// Publish the shared session information like the start time.
Meteor.publish("sensorData", function publishFunction() {
    return SensorData.find({});
});
