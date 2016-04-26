'use strict';

// Import components
import '/imports/ui/components/form/form.js';

//Import base
import '/imports/ui/layouts/index.js';

//Import pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/api/api.js';
import '../../ui/pages/map/map.js';
import '../../ui/pages/addsensor/addsensor.js';

// Define home router
Router.route('/', function() {

    this.layout('applicationLayout');
    this.render('home');

});

Router.route('/sensor/add', function() {

    this.layout('applicationLayout');
    this.render('addsensor');

});

Router.route('/map', {
    waitOn: function() {
        return Meteor.subscribe('sensors');
    },
    action: function() {
        this.layout('applicationLayout');
        this.render('map');
    }
});

Router.route('/apitest', function() {
    this.layout('applicationLayout');
    this.render('api');
});
