# JavaScript Graphics Libraries

There are several `JavaScript` libraries that can be used for visualizing both graphs and other charts:

* Plotly.js
* Chart.js
* Google Chart

Before going into these libraries, let's take a look at the default method in creating graphs in `HTML` using `canvas`.

---

## 01. Canvas

`HTML` has a `<canvas>` tag that is used to draw graphics, on the fly, via JavaScript. It is perfect for:

* Scatter Plots
* Line Graphs

It is also perfect for combining Scatter and Lines Graphs.

> **Note**
> <br>The `<canvas>` element is only a container for graphics. We must use `JavaScript` to actually draw the graphics.

Read more on `<canvas>` [here](https://www.w3schools.com/html/html5_canvas.asp).

To display our graph plots, we first need to define a canvas in `HTML`.

```html
<canvas id="myCanvas" width="400" style="border: 1px solid grey"></canvas>
```

### Scatter Plots

To create a scatter plot using `JavaScript`, we just need to plot the data points as ellipses.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const xMax = canvas.height = canvas.width;
const yMax = xMax;

ctx.transform(1, 0, 0, -1, 0, yMax)

const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

ctx.fillStyle = "red";

// Plot Points
for (let i = 0; i < xArray.length; i++) {

    let x = xArray[i] * xMax / 150;
    let y = yArray[i] * yMax / 15;

    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
    ctx.fill();
}
```

For the detailed explanation on some methods used, consider reading [this](https://github.com/LimJY03/W3ArtificialIntelligence/blob/main/Graphics%20of%20AI/README.md).

### Linear Graphs

To create a line graph using `JavaScript`, we just need to define the initial point and the final point of the straight line.

```js
const xMax = canvas.height = canvas.width;
const slope = 1.2;
const intercept = 70;

// Plot Line
ctx.beginPath();
ctx.moveTo(0, intercept);                       // Initial Point
ctx.lineTo(xMax, (xMax * slope + intercept));   // Final Point
ctx.stroke();
```

For the detailed explanation on some methods used, consider reading the file linked above.

### Combining Scatter Plots and Linear Graph

To combine both scatter plots, we just append the code to create linear graphs to the code to create scatter plots, and they will be sharing the same canvas.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const xMax = canvas.height = canvas.width;
const yMax = xMax;

ctx.transform(1, 0, 0, -1, 0, canvas.height)

const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Plot Points (Scatter Plot)
ctx.fillStyle = "red";
for (let i = 0; i < xArray.length; i++) {

    let x = xArray[i] * xMax / 150;
    let y = yArray[i] * yMax / 15;
    
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
    ctx.fill();
}

const slope = 1.2;
const intercept = 70;

// Plot Line (Linear Graph)
ctx.beginPath();
ctx.moveTo(0, intercept);                       // Initial Point
ctx.lineTo(xMax, (xMax * slope + intercept));   // Final Point
ctx.stroke();
```

The resulting plot of this code is as below:

![combined_plot](https://media.discordapp.net/attachments/970234628214489118/998040902222225459/unknown.png)

---

## 02. Plotly.js

`Plotly.js` is a charting library that comes with over 40 chart types, 3D charts, statistical graphs, and SVG maps.

To use `Plotly.js`:

> **INSTALL WITH `npm`**
> 
> ```
> npm install plotly.js-dist
> ```
> 
> Import `plotly.js` as
> 
> ```js 
> import Plotly from 'plotly.js-dist';
> ```
> 
> or
> ```js
> var Plotly = require('plotly.js-dist');
> ```

> **INSTALL WITH `html`**
> 
> ```html
> <!-- Latest compiled and minified plotly.js JavaScript -->
> <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
>  
> <!-- OR use a specific plotly.js release (e.g. version 1.5.0) -->
> <script src="https://cdn.plot.ly/plotly-1.5.0.min.js"></script>
>  
> <!-- OR an un-minified version is also available -->
> <script src="https://cdn.plot.ly/plotly-latest.js" charset="utf-8"></script>
> ```
> 
> and use the `Plotly` object in the window scope.

Since the result of `Plotly.js` is an interactive graph, we do not need to create a canvas to store the resulting graph. Instead, we will just create a `<div>` to contain the result.

```html
<div id="myPlot" style="width: 100%; max-width: 700px;"></div>
```

To learn more about `Plotly.js` used in the following code, consider reading [this](https://github.com/LimJY03/W3ArtificialIntelligence/tree/main/Graphics%20of%20AI#plotlyjs).

### Scatter Plots

To plot a scatter plot using `Plotly.js`, we just need to specify `mode: "markers"` and `type: "scatter"` when defining our graph data.

```js
const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Define Data
const data = [{
    x: xArray,
    y: yArray,
    mode: "markers",    // "markers" to plot points
    type: "scatter"     // "scatter" to plot all individual points
}];

// Define Layout
const layout = {
    xaxis: {range: [40, 160], title: "Square Meters"},
    yaxis: {range: [5, 16], title: "Price in Millions"},
    title: "House Prices vs. Size"
};

Plotly.newPlot("myPlot", data, layout);
```
![](https://media.discordapp.net/attachments/970234628214489118/998041308037910539/unknown.png)

### Line Graphs

To plot a line graph connecting all scattered points using `Plotly.js`, we just need to change `mode: "markers"` to `mode: "lines"` when defining our graph data.

```js
const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Define Data
const data = [{
    x: xArray,
    y: yArray,
    mode: "lines",      // "lines" to plot connecting lines
    type: "scatter"     // "scatter" to plot all individual points
}];

// Define Layout
const layout = {
    xaxis: {range: [40, 160], title: "Square Meters"},
    yaxis: {range: [5, 16], title: "Price in Millions"},
    title: "House Prices vs. Size"
};

Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998043928802623568/unknown.png)

### Linear Graphs

To plot a linear graph, we will remove the `type: "scatter"` property from our graph data. We should also make sure that our data points resemble a linear graph.

```js
const xValues = [];
const yValues = [];

// Generate values
for (let x = 0; x < 10; x++) {
    xValues.push(x);
    yValues.push(x + 17);
}

// Define Data
const data = [{
    x: xValues,
    y: yValues,
    mode: "lines"       // "lines" to plot connecting lines
}];

// Define Layout
const layout = {
    title: "y = x + 17"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998048956389015642/unknown.png)

To plot multiple linear graphs, we will add more sets of datapoints, and specify more sets of graph data.

```js
const x1Values = [];
const x2Values = [];
const x3Values = [];
const y1Values = [];
const y2Values = [];
const y3Values = [];

// Generate values
for (let x = 0; x < 10; x++) {
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(x);
    y2Values.push(1.5 * x);
    y3Values.push((1.5 * x) + 7);
}

// Define Data
const data = [
    {x: x1Values, y: y1Values, mode: "lines", name: "y = x"},
    {x: x2Values, y: y2Values, mode: "lines", name: "y = 1.5x"},
    {x: x3Values, y: y3Values, mode: "lines", name: "y = 1.5x + 7"}
];

// Define Layout
const layout = {
    title: "Multiple Linear Graphs"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998050989057785978/unknown.png)

### Bar Charts

To plot a bar chart, we will specify `type: "bar"` property when defining our graph data.

```js
const xArray = ["Italy","France","Spain","USA","Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
    x: xArray,
    y: yArray,
    type: "bar"
}];

const layout = {
    title: "World Wide Wine Production"
};

Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998080050236756058/unknown.png)

To let the bar chart have horizontal orientation, we will add `orientation: "h"` property in our graph data. Note that we switched our `xArray` and `yArray` so that the x-axis now display the numbers instead.

```js
const xArray = [55, 49, 44, 24, 15];
const yArray = ["Italy","France","Spain","USA","Argentina"];

const data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "h"
}];

const layout = {
    title: "World Wide Wine Production"
};

Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998080764409290903/unknown.png)

### Pie Charts

To create a pie chart, we will specify the `labels` and `values` to be our `xArray` and `yArray`, then we will also specify the `type: "pie"` property in our chart data.

```js
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
    labels: xArray, 
    values: yArray, 
    type:"pie"
}];

const layout = {
    title:"World Wide Wine Production"
};

Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998081651265507358/unknown.png)

To display a [donut chart](https://datavizcatalogue.com/methods/donut_chart.html), we will add a hole in the middle of our pie chart. So, we will specify `hole: <size>` property in our chart data.

```js
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
    labels: xArray, 
    values: yArray, 
    hole: 0.4,      // Specify hole size to be 0.4 radius of the pie chart
    type:"pie"
}];

const layout = {
    title:"World Wide Wine Production"
};

Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998082820402593912/unknown.png)

---

## 03. Chart.js

`Chart.js` is an free `JavaScript` library for making `HTML`-based charts. It is one of the simplest visualization libraries for `JavaScript`, and comes with the following built-in chart types:

* Scatter Plot
* Line Chart
* Bar Chart
* Pie Chart
* Donut Chart
* Bubble Chart
* Area Chart
* Radar Chart
* Mixed Chart

To use `Chart.js`:

> **INSTALL WITH `npm`**
>
> ```nodejs
> npm install chart.js
> ```
> 
> Then import `Chart.js` using `require()`.
> 
> ```js
> const Chart = require('chart.js');
> ```

> **INSTALL WITH `html`**
> 
> ```html
> <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
> ```

Unlike `Plotly.js`, we will need a `<canvas>` to display our `Chart.js` charts.

```html
<canvas id="myChart" style="width: 100%; max-width: 700px;"></canvas>
```

Learn more about `Chart.js` [here](https://www.chartjs.org/docs/latest/).

### Scatter Plots

To plot a scatter plot using `Chart.js`, we just need to specify `type: "scatter"` when defining our chart data.

> **Note**
> <br>Scatter Plot in `Chart.js` takes in a x-y pair as its input data.

```js
const xyValues = [
    {x: 50, y: 7},
    {x: 60, y: 8},
    {x: 70, y: 8},
    {x: 80, y: 9},
    {x: 90, y: 9},
    {x: 100, y: 9},
    {x: 110, y: 10},
    {x: 120, y: 11},
    {x: 130, y: 14},
    {x: 140, y: 14},
    {x: 150, y: 15}
];

new Chart("myChart", {
    type: "scatter",
    data: {
        datasets: [{
            data: xyValues,
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)"
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            xAxes: [{ticks: {min: 40, max:160}}],
            yAxes: [{ticks: {min: 6, max:16}}]
        }
    }
});
```

![](https://media.discordapp.net/attachments/970234628214489118/998088369756188752/unknown.png)

### Line Graphs

To plot a line graph connecting all points using `Chart.js`, we will specify `type: "line"` when defining our chart data. 

> **Note**
> <br>Line graphs in `Chart.js` takes in individual labels (x-axis) and the y values as input data.

```js
const xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xArray,
        datasets: [{
            data: yArray,
            fill: 0,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)"
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 6, max:16}}]
        }
    }
});
```

![](https://media.discordapp.net/attachments/970234628214489118/998092170990981140/unknown.png)

We added `fill: 0` to prevent the graph from filling the area under the graph with our `backgroundColor`. We also added `lineTension: 0` so that the graph is not a smooth curved graph. The `borderColor` indicates the color of the lines.

To plot multiple lines, we will add more data objects in our `datasets` property.

```js
const xArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const yArray1 = [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478];
const yArray2 = [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000];
const yArray3 = [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xArray,
        datasets: [{ 
            data: yArray1,
            borderColor: "red",
            fill: false
        }, 
        { 
            data: yArray2,
            borderColor: "green",
            fill: false
        }, 
        { 
            data: yArray3,
            borderColor: "blue",
            fill: false
        }]
    },  
    options: {
        legend: {display: false}
    }
});
```

![](https://media.discordapp.net/attachments/970234628214489118/998094157597900820/unknown.png)

### Linear Graphs

To plot a linear graph, we will specify `pointRadius: 0` property to hide the points from showing in the graph. We should also make sure that our data points resemble a linear graph.

```js
const xValues = []
const yValues = []

// Generate values
for (let x = 0; x < 10; x += 0.5) {
    xValues.push(x);
    yValues.push((2 * x) + 7);
}

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: yValues,
            pointRadius: 0,
            borderColor: "rgba(255, 0, 0, 0.5)",
            fill: false
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Graph of y against 2x + 7",
            fontSize: 16
        }
    }
});

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
```

![](https://media.discordapp.net/attachments/970234628214489118/998096253164466266/unknown.png)

### Bar Charts

To plot a bar chart, we will specify `type: "bar"` property when defining our graph data.

```js
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: ["red", "green","blue","orange","brown"],
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "World Wine Production 2018"
        }
    }
});
```

![](https://media.discordapp.net/attachments/970234628214489118/998103886491570246/unknown.png)

The `backgroundColor` property can take in an array of colors (color of each bar) or a single color value (color of all bars).

Specifying `type: "horizontalBar"` will plot a horizontal bar chart.

### Pie Chart

To create a pie chart, we will specify the `type: "pie"` property in our chart data.

```js
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];

new Chart("myChart", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"],
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wine Production 2018"
        }
    }
});
```

![](https://media.discordapp.net/attachments/970234628214489118/998105287435235361/unknown.png)

To display a doughnut chart, we will specify `type: "doughnut"` property in the chart data.

```js
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"],
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wine Production 2018"
        }
    }
});
```

![](https://media.discordapp.net/attachments/970234628214489118/998105863703236688/unknown.png)

---

## 04. Google Chart

From simple line charts to complex hierarchical tree maps, the Google Chart gallery provides a large number of ready-to-use chart types:

* Scatter Chart
* Line Chart
* Bar / Column Chart
* Area Chart
* Pie Chart
* Donut Chart
* Org Chart
* Map / Geo Chart

To use Google Chart, we will install it using `HTML`:

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
```

Similar to `Plotly.js`, we will be using a `<div>` to store the chart.

```html
<div id="myChart" style="width: 100%; max-width: 600px; height: 500px;"></div>
```

Then in our `JavaScript`, we will need to have the following line to load the Google Graph API.

```js
google.charts.load('current',{packages:['corechart']});
```

We will also set a callback function to call when the API is loaded. In this case we will be using the function `drawChart()` as our callback function. The codes used to generate the graph will be written inside this function.

```js
google.charts.setOnLoadCallback(drawChart);
```

Learn more about Google Charts [here](https://developers.google.com/chart/interactive/docs).

### Scatter Plots

To create a scatter chart, we will specify the `.ScatterChart()` method when we are creating the chart object.

```js
function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Price', 'Size'],
        [50, 7],
        [60, 8],
        [70, 8],
        [80, 9],
        [90, 9],
        [100, 9],
        [110, 10],
        [120, 11],
        [130, 14],
        [140, 14],
        [150, 15]
    ]);

    // Set Options
    const options = {
        title: 'House Prices vs Size',
        hAxis: {title: 'Square Meters'},
        vAxis: {title: 'Price in Millions'},
        legend: 'none'
    };

    // Create A Scatter Chart Object
    const chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
    
    // Draw Chart
    chart.draw(data, options);
}
```

![](https://media.discordapp.net/attachments/970234628214489118/998117380083437578/unknown.png)

### Line Graphs

To create a line graph, we will specify the `.LineGraph()` method when we are creating the chart object.

```js
function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Price', 'Size'],
        [50, 7],
        [60, 8],
        [70, 8],
        [80, 9],
        [90, 9],
        [100, 9],
        [110, 10],
        [120, 11],
        [130, 14],
        [140, 14],
        [150, 15]
    ]);

    // Set Options
    const options = {
        title: 'House Prices vs Size',
        hAxis: {title: 'Square Meters'},
        vAxis: {title: 'Price in Millions'},
        legend: 'none'
    };

    // Create A Line Chart Object
    const chart = new google.visualization.LineChart(document.getElementById('myChart'));
    
    // Draw Chart
    chart.draw(data, options);
}
```

![](https://media.discordapp.net/attachments/970234628214489118/998116436952223856/unknown.png)

### Bar Charts

To create a bar chart, we will specify the `.BarChart()` method when we are creating the chart object.

```js
function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Italy', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
    ]);

    // Set Options
    const options = {
        title: 'World Wide Wine Production'
    };

    // Create A Line Chart Object
    const chart = new google.visualization.BarChart(document.getElementById('myChart'));
    
    // Draw Chart
    chart.draw(data, options);
}
```

![](https://media.discordapp.net/attachments/970234628214489118/998119297048125440/unknown.png)

### Pie Charts

To create a pie chart, we will specify the `.PieChart()` method when we are creating the chart object.

```js
function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Italy', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
    ]);

    // Set Options
    const options = {
        title: 'World Wide Wine Production'
    };

    // Create A Line Chart Object
    const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    
    // Draw Chart
    chart.draw(data, options);
}
```

![](https://media.discordapp.net/attachments/970234628214489118/998119689987301426/unknown.png)

To make the pie chart 3d, we will add `is3D: true` to the `options` constant.

```js
function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Italy', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
    ]);

    // Set Options
    const options = {
        title: 'World Wide Wine Production',
        is3D: true
    };

    // Create A Line Chart Object
    const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    
    // Draw Chart
    chart.draw(data, options);
}
```

![](https://media.discordapp.net/attachments/970234628214489118/998120013212950528/unknown.png)

---

## 05. D3.js

`D3.js` is a `JavaScript` library for manipulating `HTML` based on data.

To use `D3.js`, we will install it using `HTML`:

```html
<script src="https://d3js.org/d3.v7.min.js"></script>
```

Modifying documents using the [W3C DOM API](https://www.w3.org/DOM/DOMTR) is tedious: the method names are verbose, and the imperative approach requires manual iteration and bookkeeping of temporary state.

If we want to change the text color of paragraph elements, we will be using an iterator or a loop to do it for us:

```js
var paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs.item(i);
    paragraph.style.setProperty("color", "blue", null);
}
```

D3 employs a declarative approach, operating on arbitrary sets of nodes called selections. Using D3, the code above can be simplified to the following:

```js
d3.selectAll("p").style("color", "blue");
```

Learn more about `D3.js` [here](https://d3js.org/).

### Scatter Plots

To create any plot, we will need to create a `<svg>` element in our `HTML` code.

```html
<svg id="myPlot" style="width: 500px; height: 500px;"></svg>
```

To create a scatter plot with `D3.js`, we will dealing with the `svg` object most of the time as we are describing the plot "using `HTML` and `CSS`".

```js
// Set Dimensions
const xSize = 500; 
const ySize = 500;
const margin = 40;
const xMax = xSize - (margin * 2);
const yMax = ySize - (margin * 2);

// Create Random Points
const numPoints = 100;
const data = [];

for (let i = 0; i < numPoints; i++) {
    data.push([Math.random() * xMax, Math.random() * yMax]);
}

// Append SVG Object to the Page
const svg = d3.select("#myPlot")
    .append("svg")
    .append("g")
    .attr("transform","translate(" + margin + "," + margin + ")");

// X Axis
const x = d3.scaleLinear()
    .domain([0, 500])
    .range([0, xMax]);

svg.append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x));

// Y Axis
const y = d3.scaleLinear()
    .domain([0, 500])
    .range([yMax, 0]);

svg.append("g")
    .call(d3.axisLeft(y));

// Dots
svg.append("g")
    .selectAll("dot")
    .data(data).enter()
    .append("circle")
    .attr("cx", function (d) { return d[0] } )
    .attr("cy", function (d) { return d[1] } )
    .attr("r", 3)
    .style("fill", "Red");
```

![](https://media.discordapp.net/attachments/970234628214489118/998123475417956402/unknown.png)

---

# Reference

The link to the subtopic on w3schools.com: [JS Graphics](https://www.w3schools.com/ai/ai_graphics.asp)