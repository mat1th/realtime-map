import './routes.js';
import './accounts.js';


Meteor.startup(function() {
    Session.set('data_loaded', false);
 });
