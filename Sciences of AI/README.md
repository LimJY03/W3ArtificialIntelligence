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
> ```markdown
> A = (Σy / n) - ((B * Σx) / n)
> ```

More information about Linear Regression can be found [here](https://owlcation.com/stem/How-to-Create-a-Simple-Linear-Regression-Equation).

---

## **05. Machine Learning**

Machine Learning is often considered equivalent with Artificial Intelligence.

* This is not correct. Machine learning is a subset of Artificial Intelligence.

> *"Machine Learning is a field of study that gives computers the ability to learn without being programmed."*
> \
> **‒ Arthur Samuel (1959)**

Machine Learning is a discipline of AI that uses data to teach machines.

Classical programming uses programs (algorithms) to create results:

* Traditional Computing:

    * Data + Computer Algorithm = **Result**

* Machine Learning uses results to create programs (algorithms):

    * Data + Result = **Computer Algorithm**

> *"A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E."*
> \
> **‒ Tom Mitchell (1999)**

Tom Michael Mitchell (born 1951) is an American computer scientist and University Professor at the Carnegie Mellon University (CMU).

* He is a former Chair of the Machine Learning Department at CMU.

### **Supervised Learning**

Supervised learning uses labeled data (data with known answers) to train algoritms to:

* Classify Data
* Predict Outcomes

Supervised learning can **classify** data like "What is spam in an e-mail", based on known spam examples.

Supervised learning can **predict** outcomes like predicting what kind of video you like, based on videos you have played.

### **Unsupervised Learning**

Unsupervised learning is used to predict undefined relationships like meaningful patterns in data.

It is about creating computer algorithms than can improve themselves.

It is expected that machine learning will shift to unsupervised learning to allow programmers to solve problems without creating models.

### **Self-Supervised Learning**

Self-supervised learning is similar to unsupervised learning because both work with data without human added labels.

The difference is that unsupervised learning uses clustering, grouping, and dimensionality reduction, while self-supervised learning draw its own conclusions for regression and classification tasks.

---

## **06. Neural Networks (NN)**

Neural Networks is one of the most significant discoveries in history.

Neural Networks can solve problems that can't be solved by algorithms:

* Medical Diagnosis
* Face Detection
* Voice Recognition

**Neural Networks** is the essence of **Deep Learning**.

### **Deep Learning**

The deep learning revolution was not started by a single discovery. It more or less happened when several needed factors were ready:

* Computers were fast enough
* Computer storage was big enough
* Better training methods were invented
* Better tuning methods were invented

### **Neurons and Neural Networks**

Scientists agree that our brain has around 100 billion neurons.

These neurons have hundreds of billions connections between them.

![Neuron](https://www.w3schools.com/ai/img_neurons.jpg)

Neurons (aka Nerve Cells) are the fundamental units of our brain and nervous system.

The neurons are responsible for receiving input from the external world, for sending output (commands to our muscles), and for transforming the electrical signals in between.

**Artificial Neural Networks** are normally called Neural Networks (NN).

* Neural networks are in fact multi-layer **Perceptrons**.
* The perceptron defines the first step into multi-layered neural networks.

> **A standard neural network model looks like this:**
> 
> ![](https://www.w3schools.com/ai/img_neural_networks.jpg)
> 
> Input data (Yellow) are processed against a hidden layer (Blue) and modified against another > hidden layer (Green) to produce the final output (Red).

### **Giraffe**

In 2015, **Matthew Lai**, a student at Imperial College in London created a neural network called **Giraffe**.

Giraffe could be trained in **72 hours** to play chess at the same level as an international master.

Computers playing chess are not new, but the way this program was created was new.

Smart chess playing programs take years to build, while Giraffe was built in 72 hours with a neural network.

### **Neural Networks with JavaScript**

Artificial Intelligence can be math-heavy. The nature of neural networks is highly technical, and the jargon that goes along with it tends to scare people away.

This is where JavaScript can come to help. We need easy to understand software APIs to simplifying the process of creating and training neural networks.

**`Brain.js`** is a JavaScript library that makes it easy to understand Neural Networks because it hides the complexity of the mathematics.

### **Introduction to `ml5.js`**

**`ml5.js`** is trying to make machine learning more accessible to a wider audience.

Below are some ways to install `ml5.js`:

> **INSTALL WITH `HTML`**
> 
> This is not recommended as the code may break as `ml5` is updated:
> ```html
> <script src = "https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
> ```
> 
> To use the latest version (0.12.2), add the following to the `head` section of the `HTML` document:
> ```html
> <script src = "https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type = "text/javascript"></script>
> ```
>
> To use an earlier version for any reason, change the `<version#>`:
> ```html
> <script src = "https://unpkg.com/ml5@<version#>/dist/ml5.min.js" type = "text/javascript"></script>
> ```
> 
> More info can be found [here](https://www.npmjs.com/package/ml5).

The team is working to wrap machine learning functionality in friendlier ways.
 
The example below uses only few lines of code (under `<script>`) to classify an image:
 
> ```html
> <!DOCTYPE html>
> <html>
>     <script src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>
>     <script src = "https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
>     <body>
>         <h1>Image Classification</h1>
>         <h2>With MobileNet and ml5.js</h2>
>         <div id = "result">Scanning ...</div>
> 
>         <!-- Replace pic1 to pic2 or pic3 to view result for different images -->
>         <img id = "image" src = "pic1.jpg" width = "100%"> 
> 
>         <script>
>             // Initialize Image Classifier with MobileNet.
>             const classifier =  ml5.imageClassifier('MobileNet');
>             classifier.classify(document.getElementById("image"), gotResult);
> 
>             // Function to run when results arrive
>             function gotResult(error, results){
>                 const element = document.getElementById("result");
> 
>                 if(error){
>                     element.innerHTML = error;
>                 }
>                 else{
>                     let num = results[0].confidence * 100;
>                     element.innerHTML = results[0].label + "<br>Confidence: " + num.toFixed(2) + > "%";
>                 }
>             }
>         </script>
>     </body>
> </html>
> ```

Below are the results of the image classifier:

> **IMAGE 1**
> 
> ![pic1](https://media.discordapp.net/attachments/970234628214489118/970263543758848040/unknown.png?width=592&height=701)
>
> **IMAGE 2**
>
> ![pic2](https://media.discordapp.net/attachments/970234628214489118/970263730480873502/unknown.png?width=589&height=701)
> 
> **IMAGE 3**
> 
> ![pic3](https://media.discordapp.net/attachments/970234628214489118/970263837397889024/unknown.png?width=604&height=701)

### **TensorFlow Playground**

[TensorFlow Playground](https://playground.tensorflow.org/) is a web application written in `d3.js`.

With TensorFlow Playground you can learn about **Neural Networks** (NN) without math.

In your own **Web Browser** you can create a Neural Network and see the result.

`TensorFlow.js` was previously called `Tf.js` and `Deeplearn.js`.

---

# **Reference**

The link to the subtopic on w3schools.com: [AI Sciences](https://www.w3schools.com/ai/ai_sciences.asp)