# **Overview of Graphics in AI**

* Graphics plays an important role in **Math**
* Graphics plays an important role in **Statistics**
* Graphics plays an important role in **Machine Learning**

---

## **01. A Plotter Object**

Having a Plotter Object is nice when studying Artificial Intelligence:

* Makes AI more **Fun**
* Makes AI more **Visual**
* Makes AI more **Understandable**

### **Create a Plotter Object**

```js
function XYPlotter(id) {

    this.canvas = document.getElementById(id);  // html thing
    this.ctx = this.canvas.getContext("2d");    // html thing

    this.xMin = 0;
    this.yMin = 0;

    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;

    ...
}
```

Info about `HTML` canvas in `JavaScript` at [here](https://www.w3schools.com/tags/canvas_strokestyle.asp)

> Intro about `HTML` canvas at [here](https://www.w3schools.com/graphics/canvas_intro.asp).
> 
> More about `HTML` canvas at [here](https://www.w3schools.com/tags/ref_canvas.asp).

### **Add a Method for Line Plotting**

```js
    this.plotLine = function(x0, y0, x, y, color){

        this.ctx.moveTo(x0, y0);        // Defines starting point of line
        this.ctx.lineTo(x, y);          // Defines ending point of line
        this.ctx.strokeStyle = color;   // Set the line color to color
        this.ctx.stroke();              // "Draws" a visible line
    }
```

### **Add a Method for Transforming XY Values**

```js
    this.transformXY = function(){
        
        this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
    }
```

* `xScale` = 1: no scaling in x direction.
* `xSkew` = 0: no skewing in x direction.
* `ySkew` = 0: no skewing in y direction.
* `yScale` = -1: the graph reflects at y = 0.
* `xTranslate` = 0: no translation in x direction.
* `yTranslate` = `this.canvas.height`: vertical translation in y direction for "height of canvas".

In this code, the x and y values increases rightwards and downwards.

* The width of canvas increases rightwards.
* The height of canvas increases downwards.

The graph will be a negative-gradient graph drawing from (0,0) (top left corner) to (width,height) (bottom right corner), which is not the same as we expect from cartesian graphs.

So we need to transform the graph into cartesian graph.

* The graph plotted increases rightwards, cartesian graph also increases rightwards.
    * No change needed in x direction.

* The graph plotted increases downwards, but cartesian graph increases upwards.
    * Vertical reflection at y = 0 is needed.
    * Bring the graph back into visible canvas through y-translation.

More on `transform` at [The `matrix()` Method](https://www.w3schools.com/css/css3_2dtransforms.asp).

### **Add a Method for Points Plotting**

```js
    this.plotPoints = function(n, xArr, yArr, color, pointRadius = 3){

        for(let i = 0; i < n; i++){

            this.ctx.fillStyle = color;
            this.ctx.beginPath();               // html thing
            this.ctx.ellipse(xArr[i], yArr[i], pointRadius, pointRadius, 0, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }
```

`ellipse()` method contains the below parameters: 
* xCoord (number), yCoord (number)
* xRadius (number), yRadius (number)
* rotation (number)
* startAngle (number), endAngle (number)
* clockwise (boolean)

### **Plotting of Random Points**

```js
    // Create a Plotter
    let myPlotter = new XYPlotter("myCanvas");
    myPlotter.transformXY();

    // Create random XY Points
    pointCount = 500;
    const xPoints = Array(pointCount).fill(0).map(function(){return Math.random() * myPlotter.xMax});
    const yPoints = Array(pointCount).fill(0).map(function(){return Math.random() * myPlotter.yMax});

    // Plot the Points
    myPlotter.plotPoints(pointCount, xPoints, yPoints, "blue");
```

The array `xPoints` has size 500, and is filled with 500 elements of value 0. The same goes to array `yPoints`. More about `fill()` at [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

Each element in `xPoints` now is mapped to a function that returns a random value between 0 to xMax. 
* The `map()` method replaces each element in the array with the random generated value. 
* The array is now filled with multiple different random values. 

The same goes to array `yPoints`. More about `map()` at [here](https://www.w3schools.com/jsref/jsref_map.asp).

---

## **02. AI Linear Graphs**

Linear means straight. A linear graph is a straight line graph.

```js
var xValue = [];
var yValue = [];

// Generate values into array
for(let i = 0; i <= 10; i++>){
    xValues.push(i);
    yValues.push(i);
}

// Define data
var data = [{
    x: xValues,
    y: yValues,
    mode: "lines"
}];

// Define layout
var layout = [title: "Graph of y = x"];

// Display using plotly
Plotly.newplot("myPlot", data, layout); // In HTML: <div id = "myPlot" ...></div>
```

### **Plotly.js**

Built on top of [`d3.js`](https://d3js.org/) and [`stack.gl`](http://stack.gl/), `plotly.js` is a high-level, declarative charting library. `plotly.js` ships with over 40 chart types, including scientific charts, 3D graphs, statistical charts, SVG maps, financial charts, and more.

Below are some ways to install `plotly.js`:
> **INSTALL WITH `npm`**
> 
> ```
> npm install plotly.js-dist
> ```
> 
> Import `plotly.js` as:
> 
> ```js 
> import Plotly from 'plotly.js-dist';
> ``` 
> 
> or 
> 
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

More details about `plotly.js` at [here](https://plotly.com/javascript/).

### **Slope**

It signifies the angle of inclination of the graph.

It is the value of *a* in the linear graph equation *y* = ***a**x* + *b*.

### **Intercept**

It is the start value of the graph.

* Start value is the *y* value of the graph when *x* = 0.

It is the value of *b* in the linear graph equation *y* = *ax* + ***b***.

---

## **03. Scatter Plots**

Scatter plot has points scattered over an area representing the relationship between two values.

### **Data Collection**

Collecting data is the most important part of any Artificial Intelligence projects.

The most common data to collect are numbers and measurements.

Often data are stored in arrats representing the relationship between values.

| Item | | | | | | | | | | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Price | 7 | 8 | 8 | 9 | 9 | 9 | 10 | 11 | 14 | 14 | 15 |
| Size | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 130 | 140 | 150 |

### **Plotting Scatter Plots**

```js
var xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Define Data
var data = [{
    x: xArray,
    y: yArray,
    mode: "markers"
}];

// Define Layout
var layout = {
    xaxis: {range: [40, 160], title: "Square Meters"},
    yaxis: {ramge: [5, 16], title: "Price in Millions"},
    title: "House Prices vs Size"
};

// Display using Plotly
Plotly.newPlot("scatterPlot", data, layout); // In HTML: <div id = "scatterPlot" ...></div>
```

### **Plotting with Graphs (Connecting Dots)**

```js
var xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Define Data
var data = [{
    x: xArray,
    y: yArray,
    mode: "lines"
}];

// Define Layout
var layout = {
    xaxis: {range: [40, 160], title: "Square Meters"},
    yaxis: {ramge: [5, 16], title: "Price in Millions"},
    title: "House Prices vs Size"
};

// Display using Plotly
Plotly.newPlot("graphPlot", data, layout); // In HTML: <div id = "graphPlot" ...></div>
```

### **When to Use Scatter Plot**

Scatter plots are great for:

* Seeing the "Big Picture"
* Compare different values
* Discovering potential trends
* Discovering patterns in data
* Discovering relationships between data
* Discovering **Clusters** and **Correlations**

---

# **Reference**

The link to the subtopic on w3schools.com: [AI Graphics](https://www.w3schools.com/ai/ai_plotter.asp)