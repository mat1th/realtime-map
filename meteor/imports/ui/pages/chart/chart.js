import './chart.html';
import {
    closeOverlay
} from '../../actions/overlay.js';


Template.chart.events({
    'click #close-overlay': function(event) {
        closeOverlay();
    }
});
