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

    function XYPlotter(id) {

        this.canvas = document.getElementById(id);  // html thing
        this.ctx = this.canvas.getContext("2d");    // html thing
        this.xMin = 0;
        this.yMin = 0;
        this.xMax = this.canvas.width;
        this.yMax = this.canvas.height;

        ...
    }

Info about `HTML` canvas in `JavaScript` at [here](https://www.w3schools.com/tags/canvas_strokestyle.asp)

> Intro about `HTML` canvas at [here](https://www.w3schools.com/graphics/canvas_intro.asp).
> 
> More about `HTML` canvas at [here](https://www.w3schools.com/tags/ref_canvas.asp).

### **Add a Method for Line Plotting**

        this.plotLine = function(x0, y0, x, y, color){

            this.ctx.moveTo(x0, y0);                // Defines starting point of line
            this.ctx.lineTo(x, y);                  // Defines ending point of line
            this.ctx.strokeStyle = color;           // Set the line color to color
            this.ctx.stroke();                      // "Draws" a visible line
        }

### **Add a Method for Transforming XY Values**

        this.transformXY = function(){
            
            this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
        }

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

        this.plotPoints = function(n, xArr, yArr, color, pointRadius = 3){

            for(let i = 0; i < n; i++){

                this.ctx.fillStyle = color;
                this.ctx.beginPath();               // html thing
                this.ctx.ellipse(xArr[i], yArr[i], pointRadius, pointRadius, 0, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

`ellipse()` method contains the below parameters: 
* xCoord (number), yCoord (number)
* xRadius (number), yRadius (number)
* rotation (number)
* startAngle (number), endAngle (number)
* clockwise (boolean)

### **Plotting of Random Points**

        // Create a Plotter
        let myPlotter = new XYPlotter("myCanvas");
        myPlotter.transformXY();

        // Create random XY Points
        pointCount = 500;
        const xPoints = Array(pointCount).fill(0).map(function(){return Math.random() * myPlotter.xMax});
        const yPoints = Array(pointCount).fill(0).map(function(){return Math.random() * myPlotter.yMax});

        // Plot the Points
        myPlotter.plotPoints(pointCount, xPoints, yPoints, "blue");

The array `xPoints` has size 500, and is filled with 500 elements of value 0. The same goes to array `yPoints`. More about `fill()` at [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

Each element in `xPoints` now is mapped to a function that returns a random value between 0 to xMax. 
* The `map()` method replaces each element in the array with the random generated value. 
* The array is now filled with multiple different random values. 

The same goes to array `yPoints`. More about `map()` at [here](https://www.w3schools.com/jsref/jsref_map.asp).

---

## **02. AI Linear Graphs**

---

# **Reference**

The link to the subtopic on w3schools.com: [AI Graphics](https://www.w3schools.com/ai/ai_plotter.asp)