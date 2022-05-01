# **Overview of Sciences in AI**

**Artificial Intelligence** is a set of different **Sciences**:

* Machine Learning (ML)
* Neural Networks (NN)
* Deep Learning (DL)
* Big Data

---

## **01. AI Scientists**

AI Scientists build software with algorithms that can do tasks that normally require human intelligence.

AI Scientists can be experts in multiple AI disciplines:

* Applied mathematics
* Computational statistics
* Computer Science
* Machine learning
* Deep learning

Some AI Scientists also have significant big data experience:

* Business Intelligence
* Data Base Design
* Data Warehouse Design
* Data Mining
* SQL Queries
* SQL Reporting

### **The Deep Learning Revolution**

The deep learning revolution started around 2010. Since then, Deep Learning has been used to solve many "unsolvable" problems.

**01. Convolutional Neural Networks (CNNs)**

> Deep CNNs such as [ResNeta](https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html) and [Inception](https://www.cv-foundation.org/openaccess/content_cvpr_2015/html/Szegedy_Going_Deeper_With_2015_CVPR_paper.html) have reduced the error rate in the **ImageNet** classification from 25% in 2011 to 5% in 2017.
> 
> **ImageNe**t is an image database organized according to the WordNet hierarchy, in which each node of the hierarchy contains hundreds and thousands of images. ImageNet is a useful resource for researchers, educators, students and everyone else with a passion for pictures.
> 
> **WordNet** is a lexical database of semantic relations between words in 200+ languages. It is organized as a combination of a dictionary and thesaurus, linking words together into semantic relations using synonyms, hyponyms, and meronyms.
> 

**02. Recurrent Neural Networks (RNNs)**

> RNNs are helping create music scores and novel instrument sounds:
> \
> https://magenta.tensorflow.org/demos.

---

## **02. Data in AI**

Up to **80%** of a Machine Learning project is about **Collecting Data**:

* What data is Required?
* What data is Available?
* How to Select the data?
* How to Collect the data?
* How to Clean the data?
* How to Prepare the data?
* How to Use the data?

### **What is Data?**

Data can be many things. With Machine Learning, it is a collection of facts.

| Type | Examples |
| :--- | :--- |
| Numbers | Prices, Dates |
| Measurements | Size, Height, Weight |
| Words | Names, Places |
| Observations | Counting Cars | 
| Descriptions | It is cold |

### **Intelligence Needs Data**

Human intelligence needs data:

* A real estate broker needs data about sold houses to estimate prices.

Artificial Intelligence also needs data:

* A Machine Learning program needs data to estimate prices.

### **Storing Data**

The most common data to collect are **Numbers** and **Measurements**.

Often data are stored in arrays representing the relationship between values.

### **Qualitative Data vs Quantitative Data**

Quantitative data are numerical:

* 55 cars
* 15 meters
* 35 children

Qualitative data are descriptive:

* It is cold
* It is long
* It was fun

### **Sampling Terms**

A **Population** is group of individuals (objects) we want to collect information from.

A **Census** is information about every individual in a population.

A **Sample** is information about a part of the population. (in order to represent all)

* If we wanted to know how many Americans smoke cigarettes, we could ask every person in the US (a census), or we could ask 10 000 people (a sample).

* A census is **Accurate**, but hard to do. A sample is **Inaccurate**, but is easier to do.

### **Random Samples**

In order for a sample to represent a population, it must be collected randomly.

A **Random Sample** is a sample where every member of the population has an equal chance to appear in the sample.

A **Sampling Bias** (Error) occurs when samples are collected in such a way that some individuals are less (or more) likely to be included in the sample.

---

## **03. Data Clusters**

Clusters are collections of data based on similarity.

Data points clustered together in a graph can often be classified into clusters.

In the graph below we can distinguish 3 different clusters:

![clustering](https://i.stack.imgur.com/e2UeU.png)

### **Identifying Clusters**

Clusters can hold a lot of valuable information, but clusters come in all sorts of shapes, so how can we recognize them?

The two main methods are:

* Using Visualization
* Using an Clustering Algorithm

### **Clustering**

Clustering is a type of **Unsupervised Learning**.

Clustering is trying to:

* Collect similar data in groups
* Collect dissimilar data in other groups

There are 4 clustering methods:

**01. Density Method**

> It considers points in a dense regions to have more similarities and differences than points in a lower dense region. The density method has a good accuracy. It also has the ability to merge clusters.
>     
> Two common algorithms are **DBSCAN** and **OPTICS**.

**02. Hierarchical Method**

> It forms the clusters in a tree-type structure. New clusters are formed using previously formed clusters.
> 
> Two common algorithms are **CURE** and **BIRCH**. 

**03. Partitioning Method**

> It partitions the objects into k clusters and each partition forms one cluster.
> 
> One common algorithm is **CLARANS**.

**04. Grid-based Method**

> It formulates the data into a finite number of cells that form a grid-like structure.
> 
> Two common algorithms are **CLIQUE** and **STING**.

### **Correlation Coefficient**

The **Correlation Coefficient** (r) describes the strength and direction of a linear relationship and x/y variables on a scatterplot.

The value of r is always between -1 and +1:

| r | Description | Relationship |
| :---: | :--- | :--- |
| -1.00 | Perfect Downhill | Negative Linear Relationship |
| -0.70 | Strong Downhill | Negative Linear Relationship |
| -0.50 | Moderate Downhill | Negative Linear Relationship |
| -0.30 | Weak Downhill | Negative Linear Relationship |
| 0.00 | - | No Linear Relationship |
| +0.30 | Weak Uphill | Positive Linear Relationship |
| +0.50 | Moderate Uphill | Positive Linear Relationship |
| +0.70 | Strong Uphill | Positive Linear Relationship |
| +1.00 | Perfect Uphill | Positive Linear Relationship |

![Correlation Coefficient Graphs](https://th.bing.com/th/id/OIP.SHXiBZ4wxa3BYpyjam35AgHaFj?pid=ImgDet&rs=1)

---

## **04. Linear Regression**

A **Regression** is a method to determine the relationship between one variable (*y*) and other variables (*x*).

In statistics, a **Linear Regression** is an approach to modeling a linear relationship between *y* and *x*.

In Machine Learning, a **Linear Regression** is a supervised machine learning algorithm.

### **Predicting Values**

![Scattered Data](https://media.discordapp.net/attachments/970234628214489118/970234645167886346/unknown.png)

From a scattered data, how can we predict future prices?

* Use hand drawn linear graph
* Model a linear relationship
* Model a linear regression

#### **Below is a linear graph predicting prices based on the lowest and the highest price:**

![Linear from Ends](https://media.discordapp.net/attachments/970234628214489118/970235332287135784/unknown.png)

> The code to plot the graph is as below:
> 
> ```js
> var xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
> var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
> 
> // Define Data
> var data = [
>     {x: xArray, y: yArray, mode: "markers"},
>     {x: [50, 150], y: [7, 15], mode: "line"}
> ];
> 
> // Define Layout
> var layout = {
>     xaxis: {range: [40, 160], title: "Square Meters"},
>     yaxis: {range: [5, 16], title: "Price in Millions"},
>     title: "House Prices vs Size"
> };
> 
> // Display using Plotly
> Plotly.newPlot("lineDots1", data, layout); // In HTML: <div id = "lineDots1" ...></div>
> ```

#### **This **Model** predicts prices using a linear relationship between price and size:**

![LinearRelationshipModel](https://media.discordapp.net/attachments/970234628214489118/970236981063876628/unknown.png)

> The code to plot the graph is as below:
> 
> ```js
> var xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
> var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
> 
> // Calculate Slope
> var xSum = xArray.reduce(function(a, b){return a + b;}, 0);
> var ySum = yArray.reduce(function(a, b){return a + b;}, 0);
> var slope = ySum / xSum;
> 
> // Generate values
> var xValues = [];
> var yValues = [];
> 
> for(var x = 50; x <= 150; x++){
>   xValues.push(x);
>   yValues.push(x * slope);  // Y = mX + 0
> }
> 
> // Define Data
> var data = [
>     {x: xArray, y: yArray, mode: "markers"},
>     {x: xValues, y: yValues, mode: "line"}
> ];
> 
> // Define Layout
> var layout = {
>     xaxis: {range: [40, 160], title: "Square Meters"},
>     yaxis: {range: [5, 16], title: "Price in Millions"},
>     title: "House Prices vs Size"
> };
> 
> // Display using Plotly
> Plotly.newPlot("lineDots2", data, layout); // In HTML: <div id = "lineDots2" ...></div>
> ```
> 
> In the example above, the slope is a calculated average (Σ*y* / Σ*x*) and the *y*-intercept = 0.

The `reduce()` method executes a reducer function for array element and returns a single value, which is the function's accumulated result.

* We reduce the array containing many elements into one "Σ elements in the array".

Syntax of `reduce()` is as below:

> ```js
> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
> ```
> 
> The parameters `currentIndex` and `arr` are optional, we do not have these parameters in the code above.

More details about `reduce()` method can be found [here](https://medium.com/swlh/javascript-reduce-with-examples-570f1b51e854).

#### **This **Model** predicts prices using a linear regression function:**

![LinearRegressionModel](https://media.discordapp.net/attachments/970234628214489118/970242011649163274/unknown.png)

> The code to plot the graph is as below:
> 
> ```js
> var xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
> var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
> 
> // Calculate Sums
> var xSum = 0, ySum = 0, xxSum = 0, xySum = 0;
> var count = xArray.length;
> 
> for (let i = 0; i < count; i++){
>   xSum += xArray[i];                // Calculate Σx
>   ySum += yArray[i];                // Calculate Σy
>   xxSum += xArray[i] * xArray[i];   // Calculate Σx²
>   xySum += xArray[i] * yArray[i];   // Calculate Σxy
> }
> 
> // Calculate slope and intercept
> var slope = ((count * xySum) - (xSum * ySum)) / ((count * xxSum) - (xSum * xSum));
> var intercept = ((ySum * xxSum) - (xSum * xySum)) / ((count * xxSum) - (xSum * xSum));
> 
> // Generate values
> var xValues = [];
> var yValues = [];
> 
> for (var x = 50; x <= 150; x++){
>   xValues.push(x);
>   yValues.push(x * slope + intercept); // y = Bx + A
> }
> 
> // Define Data
> var data = [
>     {x: xArray, y: yArray, mode: "markers"},
>     {x: xValues, y: yValues, mode: "line"}
> ];
> 
> // Define Layout
> var layout = {
>     xaxis: {range: [40, 160], title: "Square Meters"},
>     yaxis: {range: [5, 16], title: "Price in Millions"},
>     title: "House Prices vs Size"
> };
> 
> // Display using Plotly
> Plotly.newPlot("lineDots3", data, layout); // In HTML: <div id = "lineDots3" ...></div>
> ```

The linear regression formula is as below:

![Linear Regression Formula](https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0NjM5MDEyNTAwNTQ3NTc0/how-to-create-a-simple-linear-regression-equation.webp)

A is the *y*-intercept of the graph, and B is the slope of the graph.

> The value of A can be deduced from B using the formula below:
> 
> ```css
> A = (Σy / n) - ((B * Σx) / n)
> ```

More information about Linear Regression can be found [here](https://owlcation.com/stem/How-to-Create-a-Simple-Linear-Regression-Equation).

---



---

# **Reference**

The link to the subtopic on w3schools.com: [AI Sciences](https://www.w3schools.com/ai/ai_sciences.asp)