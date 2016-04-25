'use strict';

// Import components

//Import base
import '/imports/ui/layouts/index.js';

//Import pages
import '../../ui/pages/home/home.js';

// Define home router
Router.route('/', function () {
  // use the template named ApplicationLayout for our layout
  this.layout('applicationLayout');

  // render the Post template into the "main" region
  // {{> yield}}
  this.render('home');

});
