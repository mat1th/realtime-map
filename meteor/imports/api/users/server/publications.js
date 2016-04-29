Meteor.publish('getUsers', function() {

    return Meteor.users.find({});

});

Meteor.users.allow({
    update(userId, user) {
        return true;
    }
});
