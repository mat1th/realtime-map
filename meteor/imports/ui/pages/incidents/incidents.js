import './incidents.html';

Template.incidents.helpers({
  'data': function () {

    return     Incidents.find({}).fetch({});
  }
})
