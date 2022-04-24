// Initialisations of graph equation
var slope = 1.2;
var intercept = 7;

// Declarations of points on graph
var xValues = [];
var yValues = [];

// Generate points on graph
for(let i = 0; i < 10; i++){
    xValues.push(i);
    yValues.push((slope * i) + intercept);
}

// Define data of graph
var data = [{
    x: xValues,
    y: yValues,
    mode: "lines"
}];

// Define layout of graph
var layout = {title: ("y = " + slope + "x + " + intercept)};