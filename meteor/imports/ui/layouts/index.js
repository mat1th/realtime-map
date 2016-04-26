// Base
import '../components/footer.html';
import '../components/header.html';


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
