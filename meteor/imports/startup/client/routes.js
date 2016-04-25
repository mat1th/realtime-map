'use strict';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//Import to load these templates
import '/imports/ui/layouts/body.js';


//Import components
import '/imports/ui/components/nav.js';

//Import load auth

BlazeLayout.setRoot('body');


FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('layout1', {
            top: 'nav',
            main: 'home'
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
