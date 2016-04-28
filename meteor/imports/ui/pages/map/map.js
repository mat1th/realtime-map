import './map.html';
import '../chart/chart.js';
import { liveStatus } from '../../actions/live-status.js';
import {
    closeOverlay
} from '../../actions/overlay.js';

Meteor.subscribe('cycles');

Template.map.onRendered(function() {
    var sensorPoints = Sensors.find({}).fetch({});
    var map = L.map('map', {
        center: [52.376956, 4.902756],
        maxZoom: 20,
        //minZoom: 14,
        zoom: 14,
        zoomControl: false,
        attributionControl: false,
        // maxBounds: [
        //     [52.345197800248926, 4.82025146484375],
        //     [52.424825961602764, 4.967708587646484]
        // ]
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

    var cycleMarker = L.marker([52.36632373281241, 4.912347793579102], {
        icon: cycleIcon
    }).addTo(map);

    // var markers = new Array();
    // sensorPoints.forEach(function(element, index) {
    //     var maker = L.marker([element.lat, element.lon], {
    //         icon: sensorIcon,
    //         data: element.sensorId
    //     }).addTo(map).on('click', onClick);
    // });

    var marker = new Array();
    var items = [{
        "lat": 52.36632373281241,
        "lon": 4.912347793579102
    }, {
        "lat": 52.365956867310075,
        "lon": 4.9140214920043945
    }, {
        "lat": 52.36472522512735,
        "lon": 4.915437698364258
    }];

    sensorPoints.forEach(function(item, i) {
        var LamMarker = new L.marker([item.lat, item.lon], {
            icon: sensorIcon,
            data: item.sensorId
        }).on('click', onClick);
        marker.push(LamMarker);
        map.addLayer(marker[i]);
    });

    checkCycle(cycleMarker);
    // checkMarkers();
    // console.log(makesr);
});

function onClick(e) {
    var overlay = document.querySelector('.chart-wrapper');
    var id = e.target.options.data;
    var width = window.innerWidth;

    // Render status
    console.log(liveStatus(id));

    //give id to chart function
    if (zoomState === false) {
        zoomState = true;
        TweenMax.fromTo(overlay, 2, {
            css: {
                left: width + "px"
            }
        }, {
            css: {
                left: 88 + "px"
            },
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
