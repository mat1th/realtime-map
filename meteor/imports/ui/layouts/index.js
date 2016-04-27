// Base
import '../components/footer.html';
import '../components/header.html';
import '../components/nav.html';
// Main
import './index.html'

Template.body.events({
    'click .btn--logout': function(e) {
        e.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});
