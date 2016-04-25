import './map.html';


Template.map.onRendered(function() {

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

    L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
        attribution: 'Project 3',
    }).addTo(map);

    var sensorIcon = L.divIcon({
        className: 'sensor-icon'
    });

    var sensorPoints = Sensors.find({}).fetch({});

    sensorPoints.forEach(function(element, index) {
        L.marker([element.lat, element.lon], {
            icon: sensorIcon,
        }).addTo(map).bindPopup(element.name);
    })

});
