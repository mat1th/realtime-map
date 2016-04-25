import './nav.html';
import { Meteor } from 'meteor/meteor'

Template.nav.events({
  'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
      FlowRouter.go('/');
  }
});
