function XYPlotter(id){

    this.canvas = document.getElementById(id);  // html thing
    this.ctx = this.canvas.getContext("2d");    // html thing
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;

    // Plot the line graph
    this.plotLine = function(x0, y0, x, y, color){

        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x, y);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

    // Transform graph to cartesian view
    this.transformXY = function(){

        this.ctx.transform(1, 0, 0, -1, 0, this.canvas.height);
    }

    // Plot all points 
    this.plotPoints = function(n, xArr, yArr, color, pointRadius = 3){

        for(let i = 0; i < n; i++){

            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.ellipse(xArr[i], yArr[i], pointRadius, pointRadius, 0, 0, (Math.PI * 2));
            this.ctx.fill();
        }
    }
}