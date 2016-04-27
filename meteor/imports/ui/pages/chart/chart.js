import './chart.html';
import {
    closeOverlay
} from '../../actions/overlay.js';

Template.chart.rendered = function() {
    var margin = {
            top: 20,
            right: 60,
            bottom: 30,
            left: 20
        },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;


    var parseDate = d3.time.format("%Y-%m-%d %H:%M:%S").parse,
        formatDate = d3.time.format("%Y"),
        formatToTime = d3.time.format("%H:%M"),
        bisectDate = d3.bisector(function(d) {
            return d.date;
        }).left;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickSize(-height, 0)
        .tickPadding(6);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("right")
        .tickSize(-width)
        .tickPadding(6);

    var area = d3.svg.area()
        .interpolate("basis")
        .x(function(d) {
            return x(d.date);
        })
        .y0(y(0))
        .y1(function(d) {
            return y(d.value);
        });

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) {
            return x(d.date);
        })
        .y(function(d) {
            return y(d.value);
        });

    var svg = d3.select(".chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var zoom = d3.behavior.zoom()
        .scaleExtent([1, 1])
        .on('zoom', draw);

    var gradient = svg.append("defs").append("linearGradient")
        .attr("id", "gradient")
        .attr("x2", "0%")
        .attr("y2", "100%");

    var focus = svg.append("g")
        .attr("id", "focus")
        .style("display", "none");

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#64929d");
    // .attr("stop-opacity", .5);

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#64929d");
    // .attr("stop-opacity", 1);

    svg.append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("x", x(0))
        .attr("y", y(1))
        .attr("width", x(1) - x(0))
        .attr("height", y(0) - y(1));

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + ",0)");

    svg.append("path")
        .attr("class", "area")
        .attr("clip-path", "url(#clip)")
        .style("fill", "url(#gradient)");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")");

    svg.append("path")
        .attr("class", "line graph")
        .attr("style", "padding: 100px")
        .attr("clip-path", "url(#clip)");
    //
    // svg.append("rect")
    //     .attr("class", "pane")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .call(zoom);

    var data = SensorData.find({
        sensorId: "53180077-cfc9-49b7-b807-ec01cd02b4d4"
    }).fetch({})

    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.sensorvalue;
    });

    x.domain([new Date(2016, 3, 8), new Date(2016, 3, 23)]);
    y.domain([0, d3.max(data, function(d) {
        return d.sensorvalue;
    })]);
    zoom.x(x);

    svg.select("path.area").data([data]);
    svg.select("path.line").data([data]);
    draw();


    function draw() {
        svg.select("g.x.axis").call(xAxis);
        svg.select("g.y.axis").call(yAxis);
        svg.select("path.area").attr("d", area);
        svg.select("path.line").attr("d", line);
    }


    // place the value at the intersection
    focus.append("text")
        .attr("class", "value")
        .attr("dx", 8)
        .attr("dy", "-.3em");

    focus.append("text")
        .attr("class", "groeps")
        .attr("dx", 8)
        .attr("dy", "0em");

    focus.append("text")
        .attr("class", "sound")
        .attr("dx", 8)
        .attr("dy", "0.3em");

    focus.append("text")
        .attr("class", "present")
        .attr("dx", 8)
        .attr("dy", "1em");

    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function() {
            focus.style("display", null);
        })
        .on("mouseout", function() {
            focus.style("display", "none");
        })
        .on("mousemove", mousemove);

    function mousemove() {
        var timeDiv = d3.select(".time"),
            x0 = x.invert(d3.mouse(this)[0]),
            i = bisectDate(data, x0, 1),
            d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0.date > d1.date - x0 ? d1 : d0;

        focus.select("text.value")
            .attr("transform",
                "translate(" + x(d.date) + "," +
                y(d.value + 5) + ")")
            .text(d.value);

        focus.select("text.groeps")
            .attr("transform",
                "translate(" + x(d.date) + "," +
                y(d.value + 5) + ")")
            .text("Groepen: 97%");

        focus.select("text.sound")
            .attr("transform",
                "translate(" + x(d.date) + "," +
                y(d.value + 5) + ")")
            .text("Geluidsoverlast: 97%");

        focus.select("text.present")
            .attr("transform",
                "translate(" + x(d.date) + "," +
                y(d.value + 5) + ")")
            .text("Aanwezig: 10%");


        timeDiv.attr("transform",
                "translate(" + x(d.date) + "," +
                y(d.value) + ")")
            .text("Tijd: " + formatToTime(d.date));




    }
}

Template.chart.events({
    'click .overlay-close': function(event) {
        closeOverlay();
    }
});



window.onresize = function(event) {
    if (zoomState) {
        closeOverlay();
    }

};


// function mouseover() {
//     console.log('in');
//
// }
//
// function mouseout() {
//     console.log('out');
// }
