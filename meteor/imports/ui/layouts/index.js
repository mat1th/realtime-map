// Base
import './base/footer.html'
import './base/header.html'

// Main
import './index.html'

Template.body.events({
    'click .btn--logout': function(e){

        console.log('hii');
        e.preventDefault();

        Meteor.logout();

        Router.go('login');

    }
});
