import './addsensor.html';
import {
    Template
} from 'meteor/templating';

Template.myTemplate.events({
    'click button': function(event) {
      console.log(event);
    }
});
