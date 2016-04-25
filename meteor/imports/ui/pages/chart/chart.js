import './chart.html';
import './chart.css';

Template.chart.rendered = function() {

    var margin = { top: 20, right: 60, bottom: 30, left: 20 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var parseDate = d3.time.format("%Y-%m-%d %H:%M:%S").parse,
        formatDate = d3.time.format("%Y");

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
        .interpolate("monotone")
        .x(function(d) {
            return x(d.date); })
        .y0(y(0))
        .y1(function(d) {
            return y(d.db); });

    var line = d3.svg.line()
        .interpolate("monotone")
        .x(function(d) {
            return x(d.date); })
        .y(function(d) {
            return y(d.db); });

    var svg = d3.select(".chart-wrapper").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var zoom = d3.behavior.zoom()
        .on("zoom", draw);

    // var gradient = svg.append("defs").append("linearGradient")
    //     .attr("id", "gradient")
    //     .attr("x2", "0%")
    //     .attr("y2", "100%");

    // gradient.append("stop")
    //     .attr("offset", "0%")
    //     .attr("stop-color", "#fff")
    //     .attr("stop-opacity", .5);

    // gradient.append("stop")
    //     .attr("offset", "100%")
    //     .attr("stop-color", "#999")
    //     .attr("stop-opacity", 1);

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
        .attr("class", "line")
        .attr("clip-path", "url(#clip)");

    svg.append("rect")
        .attr("class", "pane")
        .attr("width", width)
        .attr("height", height)
        .call(zoom);

    d3.csv("sound.csv", function(error, data) {
        if (error) throw error;

        data.forEach(function(d) {
          console.log(d);
            d.date = parseDate(d.date);
            d.db = +d.db;
        });

        // Needs to be edited
        x.domain([new Date(2016, 3, 18), new Date(2016, 3, 26)]);
        y.domain([0, d3.max(data, function(d) {
            return d.db; })]);
        zoom.x(x);

        svg.select("path.area").data([data]);
        svg.select("path.line").data([data]);
        draw();
    });

    function draw() {
        svg.select("g.x.axis").call(xAxis);
        svg.select("g.y.axis").call(yAxis);
        svg.select("path.area").attr("d", area);
        svg.select("path.line").attr("d", line);
    }
};

// Helpers
Template.chart.helpers({

});

// Events
Template.chart.events({

});