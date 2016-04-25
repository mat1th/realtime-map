'use strict';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import components

//Import base
import '/imports/ui/layouts/index.js';

//Import pages
import '../../ui/pages/home/home.js';

// Define home router
FlowRouter.route( '/', {
	name: 'home',
	action: function() {

		BlazeLayout.render( 'applicationLayout', {
		  header: 'header',
		  main: 'home',
		  footer: 'footer'
		});

	}
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
    action() {
        BlazeLayout.render('layout1', {
            top: 'nav',
            main: 'page-not-found'
        });
    },
};
