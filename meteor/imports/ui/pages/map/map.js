import './map.html';
import '../chart/chart.js';

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
    }).addTo(map)

    sensorPoints.forEach(function(element, index) {
        L.marker([element.lat, element.lon], {
            icon: sensorIcon,
            data: element.sensorId
        }).addTo(map).on('click', onClick);
    });
    checkCycle(marker);
});


function onClick(e) {
    var id = e.target.options.data;
    console.log(id);
}

function checkCycle(marker) {
    Cycles.find().observe({
        changed: function(newDocument, oldDocument) {
            var newPositon = newDocument.data
            marker.setLatLng(newPositon).update();
        }
    });
}



// //What happens when a layer is clicked
//    function clickFeature(e) {
//        //check if the map isn't in the zoom state, if it is in zoomstate, clickfeature doesn't work
//        if (zoomState === false) {
//            zoomState = true;
//            var clickedLayer = e.target,
//                layerName = clickedLayer.feature.properties.name,
//                layerID = clickedLayer.feature.properties.id,
//                SvgMapPart = selector('.mappopup'),
//                overlayList = document.querySelectorAll(".overlay");
//
//            //rightgone and leftgone are the surrounding areas, they are not relevant
//            if (layerName !== "rightgone" && layerName !== "leftgone") {
//
//                //display and hide elements
//                SvgMapPart.classList.add("none");
//                closeButton.classList.remove("none");
//                navigationBar.classList.remove("none");
//
//                //Added animations to elements
//                TweenMax.to(statistic, 2, {
//                    display: "block"
//                }, "start");
//
//                TweenMax.fromTo(statistic, 2, {
//                    x: 500
//                }, {
//                    x: 0,
//                    ease: Power4.easeOut
//                }, "start");
//
//                TweenMax.to([cleaningIntensityDiv, cleaningBorder], 1, {
//                    ease: Power1.easeOut,
//                    opacity: 0,
//                    y: -20,
//                    onComplete: function (response) {
//                        cleaningIntensityDiv.classList.add("none");
//                    }
//                });
//                TweenMax.to(monthSelect, 1.2, {
//                    ease: Back.easeIn.config(1),
//                    right: 150
//                });
//                TweenMax.to(closeButton, 1.2, {
//                    ease: Back.easeIn.config(1),
//                    right: 0
//                });
//                TweenMax.to(navigationBar, 1.2, {
//                    ease: Back.easeOut.config(1),
//                    bottom: -20
//                });
//                TweenMax.to(statistic, 1.5, {
//                    ease: Back.easeIn.config(1),
//                    right: 0
//                });
//
//                //zoom in to district
//                var district = e.target,
//                    districtId = district.feature.properties.id,
//                    getBoundsOfDistrict = district.getBounds();
//                DistrictNorthEastlng = getBoundsOfDistrict._northEast.lng + 0.008,
//                    DistrictNorthEastlat = getBoundsOfDistrict._northEast.lat,
//                    DistrictSouthWestlng = getBoundsOfDistrict._southWest.lng + 0.004;
//
//                //Exceptions for bigger districts so they get different values to fit in the window
//                if (districtId === "wp") {
//                    DistrictSouthWestlat = getBoundsOfDistrict._southWest.lat - 0.005;
//                } else if (districtId === "dws") {
//                    DistrictSouthWestlat = getBoundsOfDistrict._southWest.lat - 0.005;
//                } else {
//                    DistrictSouthWestlat = getBoundsOfDistrict._southWest.lat - 0.002;
//                };
//
//                var southWest = L.latLng(DistrictSouthWestlat, DistrictSouthWestlng),
//                    northEast = L.latLng(DistrictNorthEastlat, DistrictNorthEastlng),
//                    bounds = L.latLngBounds(southWest, northEast);
//
//                //zoom in on map
//                map.fitBounds(bounds);
//                districtname.innerHTML = layerName;
//                setDistrictData(layerID);
//                hideCleaningsIntensityLayer();
//
//                //disable dragging and zooming when in zoom state
//                map.dragging.disable();
//                map.touchZoom.disable();
//                map.doubleClickZoom.disable();
//                map.scrollWheelZoom.disable();
//                map.boxZoom.disable();
//                map.keyboard.disable();
//
//                //If there are elements with the "overlay" class, then classes will be added to paths. Otherwise not.
//                if (overlayList.length === 0) {
//                    //gives classes to paths, with which they can be styled
//                    if (layerName !== "rightgone" && layerName !== "leftgone") {
//                        var j = 0;
//                        for (j; j < layerIDs.length; j++) {
//                            if (layerIDs[j] !== layerID) {
//                                document.getElementById(layerIDs[j]).setAttribute('class', 'overlay');
//                            } else {
//                                document.getElementById(layerIDs[j]).setAttribute('class', 'transparent');
//                            };
//                        };
//                    };
//                };
//            }
//        };
//    };
