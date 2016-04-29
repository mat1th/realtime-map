import './test.html';

Template.test.events({
    'submit form': function(event) {
        event.preventDefault();
        var led = event.target.led.value;
        Meteor.call("test", led);
        // Router.go('/');

    }
})
