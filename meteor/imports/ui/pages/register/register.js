import './register.html';

Template.register.events({
    'submit form': function(e){

        e.preventDefault();

        let email = $('[name=email]').val();
        let password = $('[name=password]').val();
        let role = $('[name=role]').val();

        Accounts.createUser({
            email: email,
            password: password,
            role: role
        }, function(error){

            if(error) console.log(error);
            Router.go('login');

        });

    }
});
