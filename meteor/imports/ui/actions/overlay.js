export const closeOverlay = function(overlay) {
    var overlay = document.querySelector('.chart-wrapper');
    zoomState = false
    TweenMax.fromTo(overlay, 2, {
        x: -700
    }, {
        x: 0,
        ease: Power4.easeOut
    }, "start");
}
