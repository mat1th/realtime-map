'use strict';

// Import components
import '/imports/ui/components/form/form.js';

//Import base
import '/imports/ui/layouts/index.js';

//Import pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/api/api.js';

// Define home router
Router.route('/', function() {

    this.layout('applicationLayout');
    this.render('home');

});

Router.route('/apitest', function() {
    this.layout('applicationLayout');
    this.render('api');
});
