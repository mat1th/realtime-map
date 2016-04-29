import './incidents.html';

Template.incidents.helpers({
    'data': function() {
        return Incidents.find({}).fetch({});
    },
    'newDate': function(date) {
        var newDate =  moment(date, "YYYY-MM-DD HH:mm:ss").fromNow();

        return newDate;
    }
})
