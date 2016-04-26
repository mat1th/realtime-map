import './login.html';

Template.login.events({
    'submit form': function(e){

        e.preventDefault();

        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Meteor.loginWithPassword(email, password, function(error){

            if(error) console.log(error);

        });

        Router.go('/');

    }
});
