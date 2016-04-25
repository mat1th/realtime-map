'use strict';

// Publish the shared session information like the start time.
Meteor.publish("sensors", function publishFunction() {
    return sensors.find({});
});
