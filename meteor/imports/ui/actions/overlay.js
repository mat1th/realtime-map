export const closeOverlay = function(overlay) {
    var overlay = document.querySelector('.chart-wrapper');
    var width = window.innerWidth
    zoomState = false
    TweenMax.fromTo(overlay, 2, {
        css: {
            left: 88 + "px"
        }
    }, {
        css: {
            left: width + "px"
        },
        ease: Power4.easeOut
    }, "start");
}
