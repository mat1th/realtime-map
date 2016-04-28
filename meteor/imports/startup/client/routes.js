'use strict';

// Import components
import '/imports/ui/components/form/form.js';

//Import base
import '/imports/ui/layouts/index.js';
import '/imports/ui/layouts/alternative.js';

//Import pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/register/register.js';
import '../../ui/pages/api/api.js';
import '../../ui/pages/chart/chart.js';
import '../../ui/pages/map/map.js';
import '../../ui/pages/settings/settings.js';
import '../../ui/pages/addincident/add-incident.js';

function userLoggedIn(callback) {

    if (!Meteor.userId()) {

        Router.go('/login');
    } else {
        callback();
    }
}

// Define home router
Router.route('/', {
    waitOn: function() {
        return [Meteor.subscribe('sensorData'), Meteor.subscribe('sensors')];
    },
    action: function() {
        var _this = this;
        userLoggedIn(function() {
            _this.layout('applicationLayout');
            _this.render('map');
        });
    }
});

// Define login router
Router.route('/login', function() {

    this.render('login');

});

Router.route('/register', function() {

    this.render('register');

});

// Define settings router
Router.route('/settings', function() {

    var _this = this;

    userLoggedIn(function() {
        _this.layout('applicationLayout');
        _this.render('settings');
    });
});

Router.route('/incident', {
    waitOn: function() {
        return Meteor.subscribe('sensors');
    },
    action: function() {
        var _this = this;
        //
        // userLoggedIn(function() {
        _this.layout('alternative');
        _this.render('addincident');
        // });
    }
});
Router.route('/bedankt', function() {
    var _this = this;
    this.response.end('Bedankt voor uw incident\n');
});

Router.route('/apitest', function() {
    this.layout('applicationLayout');
    this.render('api');
});
