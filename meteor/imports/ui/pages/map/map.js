import './map.html';
import '../chart/chart.js';
import {
    liveStatus
} from '../../actions/live-status.js';
import {
    closeOverlay
} from '../../actions/overlay.js';

Meteor.subscribe('cycles');

var markers = new Array();

Template.map.onRendered(function() {
    var sensorIcon = L.divIcon({
        className: 'sensor-icon'
    });
    var cycleIcon = L.icon({
        iconUrl: '/img/cycle.svg',
        iconSize: [38, 95]
    });

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

    var cycleMarker = L.marker([52.36632373281241, 4.912347793579102], {
        icon: cycleIcon
    }).addTo(map);

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: 'Project 3',
    }).addTo(map);

    sensorPoints.forEach(function(item, i) {
        var LamMarker = new L.marker([item.lat, item.lon], {
            icon: sensorIcon,
            data: item.sensorId
        }).on('click', onClick);
        markers.push(LamMarker);
        map.addLayer(markers[i]);
    });

    checkCycle(cycleMarker);
    checksensorPoints();
});

function onClick(e) {
    var overlay = document.querySelector('.chart-wrapper');
    var id = e.target.options.data;
    var width = window.innerWidth;

    createTable(id);

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

function createTable(id) {
    statusObj.set(liveStatus(id));

    SensorData.find().observe({
        changed: function() {
            statusObj.set(liveStatus(id));
        }
    });
}

function checkCycle(marker) {
    Cycles.find().observe({
        changed: function(newDocument, oldDocument) {
            var newPositon = newDocument.data
            marker.setLatLng(newPositon).update();
        }
    });
}

function checksensorPoints(marker) {
    findmarkers(marker)
    SensorData.find().observe({
        changed: function() {
            findmarkers(marker)
        }
    });
}

function findmarkers(marker) {
    var ids = Sensors.find({}).fetch({});
    ids.forEach(function(sensor, index) {
        var status = liveStatus(sensor.sensorId);
        changecollor(markers, sensor.sensorId, status);
    })
}

function changecollor(markers, id, status) {
    markers.forEach(function(marker, index) {
        if (marker.options.data === id) {
            if (!status.incidences) {
                markers[index].valueOf()._icon.style.backgroundColor = '#3BAC50';
            } else {
                markers[index].valueOf()._icon.style.backgroundColor = '#bb2e31';
            }

        }
    });
}
