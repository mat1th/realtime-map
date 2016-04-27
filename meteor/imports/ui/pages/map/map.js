import './map.html';
import '../chart/chart.js';
import { closeOverlay } from  '../../actions/overlay.js';

Meteor.subscribe('cycles');

Template.map.onRendered(function() {
    var sensorPoints = Sensors.find({}).fetch({});
    var map = L.map('map', {
        center: [52.376956, 4.902756],
        maxZoom: 20,
        minZoom: 14,
        zoom: 14,
        zoomControl: false,
        attributionControl: false,
        maxBounds: [
            [52.345197800248926, 4.82025146484375],
            [52.424825961602764, 4.967708587646484]
        ]
    });

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: 'Project 3',
    }).addTo(map);

    var sensorIcon = L.divIcon({
        className: 'sensor-icon'
    });
    var cycleIcon = L.divIcon({
        className: 'cycle-icon'
    });

    var marker = L.marker([52.36632373281241, 4.912347793579102], {
        icon: cycleIcon
    }).addTo(map);

    sensorPoints.forEach(function(element, index) {
        L.marker([element.lat, element.lon], {
            icon: sensorIcon,
            data: element.sensorId
        }).addTo(map).on('click', onClick);
    });
    checkCycle(marker);
});

function onClick(e) {
    var overlay = document.querySelector('.overlay');
    var id = e.target.options.data;

    //give id to chart function

    if (zoomState === false) {
        console.log(overlay);
        zoomState = true;
        TweenMax.fromTo(overlay, 2, {
            x: 0
        }, {
            x: -700,
            ease: Power4.easeOut
        }, "start");

    } else {
        closeOverlay();
    }
}

function checkCycle(marker) {
    Cycles.find().observe({
        changed: function(newDocument, oldDocument) {
            var newPositon = newDocument.data
            marker.setLatLng(newPositon).update();
        }
    });
}
