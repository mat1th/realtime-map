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
import '../../ui/pages/incidents/incidents.js';
import '../../ui/pages/addincident/add-incident.js';
import '../../ui/pages/bedankt/bedankt.js';
import '../../ui/pages/test/test.js';
import '../../ui/components/loading.html';

function userLoggedIn(callback) {

    if (!Meteor.userId()) {

        Router.go('/login');
    } else {
        callback();
    }
}

// Define login router
Router.route('/login', function() {
    this.render('login');
});

Router.route('/register', function() {
    this.render('register');
});

// Define home router
Router.route('/', {
    loadingTemplate: 'loading',
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

// Define settings router
Router.route('/settings', function() {
    var _this = this;

    userLoggedIn(function() {
        _this.layout('applicationLayout');
        _this.render('settings');
    });
});

Router.route('/incidents', {
    waitOn: function() {
        return Meteor.subscribe('incidents');
    },
    action: function() {
        var _this = this;

        userLoggedIn(function() {
            _this.layout('applicationLayout');
            _this.render('incidents');
        });
    }
});
Router.route('/test', {
    action: function() {
        var _this = this;

        userLoggedIn(function() {
            _this.layout('applicationLayout');
            _this.render('test');
        });
    }
});

// For city nabors
Router.route('/reportincident', {
    waitOn: function() {
        return Meteor.subscribe('sensors');
    },
    action: function() {
        this.layout('alternative');
        this.render('addincident');
    }
});

Router.route('/bedankt', function() {
    this.layout('alternative');
    this.render('bedankt');
});

Router.route('/apitest', function() {
    this.layout('applicationLayout');
    this.render('api');
});
