'use strict';

// Import components

//Import base
import '/imports/ui/layouts/index.js';

//Import pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/api/api.js';
import '../../ui/pages/addsensor/addsensor.js';

// Define home router
Router.route('/', function() {
    // use the template named ApplicationLayout for our layout
    this.layout('applicationLayout');

    // render the Post template into the "main" region
    // {{> yield}}
    this.render('home');

});

Router.route('/sensor/add', function() {
    this.layout('applicationLayout');
    this.render('addsensor');
});


Router.route('/apitest', function() {
    this.layout('applicationLayout');
    this.render('api');
});
