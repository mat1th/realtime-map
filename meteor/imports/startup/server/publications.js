'use strict';

// Publish the shared session information like the start time.
Meteor.publish("test", function publishFunction() {

    return test.find({
        owner: this.userId
    });

});
