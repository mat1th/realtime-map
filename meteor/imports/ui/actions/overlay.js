export const closeOverlay = function(overlay) {
    var overlay = document.querySelector('.chart-wrapper');
    var width = window.innerWidth
    zoomState = false
    TweenMax.fromTo(overlay, 2, {
        x: -width
    }, {
        x: 0,
        ease: Power4.easeOut
    }, "start");
}
