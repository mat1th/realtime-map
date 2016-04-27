// Base
import '../components/footer.html';
import '../components/header.html';
import '../components/nav.html';
// Main
import './index.html'

Template.body.events({
    'click .btn--logout': function(e) {
        e.preventDefault();
        var answer = confirm('Weet je zeker dat je wilt uitloggen?');
        if (answer) {
            Meteor.logout();
            Router.go('login');
        }
    }
});
