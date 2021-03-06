# Overview of Machine Learning

Machine learning is a subset of Artificial Intelligence. It is a discipline of AI that uses data to teach machines.

## Intelligent Decision Formula

* Save the result of all actions
* Simulate all possible outcomes
* Compare the new action with the old ones
* Check if the new action is good or bad
* Choose the new action if it is less bad
* Do it all over again

The fact that computers can do this millions of times, has proven that computers can take very intelligent decisions.

### Supervised Learning

Supervised learning **uses labeled data** (data with known answers) to train algorithms to:

* Classify Data
* Predict Outcomes

Supervised learning can classify data like "What is spam in an e-mail", based on known spam examples.

Supervised learning can predict outcomes like predicting what kind of video you like, based on the videos you have played.

### Unsupervised Learning

Unsupervised learning is used to **predict undefined relationships** like meaningful patterns in data.

It is about creating computer algorithms than can improve themselves.

It is expected that machine learning will shift to unsupervised learning to allow programmers to solve problems without creating models.

### Reinforcement Learning

Reinforcement learning is based on non-supervised learning but **receives feedback from the user** whether the decisions is good or bad. The feedback contributes to improving the model.

### Self-Supervised Learning

Self-supervised learning is similar to unsupervised learning because it works with data without human added labels.

The difference is that unsupervised learning uses clustering, grouping, and dimensionality reduction, while self-supervised learning **draw its own conclusions** for regression and classification tasks.

---

## 01. Perceptrons

> A Perceptron is an Artificial Neuron
> 
> It is the simplest possible Neural Network
> 
> Neural Networks are the building blocks of Machine Learning.

### Frank Rosenblatt

Frank Rosenblatt (1928 – 1971) was an American psychologist notable in the field of Artificial Intelligence.

In 1957 he started something really big. He "invented" a Perceptron program, on an IBM 704 computer at Cornell Aeronautical Laboratory.

* Scientists had discovered that brain cells (Neurons) receive input from our senses by electrical signals.
* The Neurons, then again, use electrical signals to store information, and to make decisions based on previous input.

Frank had the idea that Perceptrons could simulate brain principles, with the ability to learn and make decisions.

### The Perceptron

The original Perceptron was designed to take a number of binary inputs, and produce one binary output (0 or 1).

The idea was to use different weights to represent the importance of each input, and that the sum of the values should be greater than a threshold value before making a decision like true or false (0 or 1).

![perceptron](https://www.w3schools.com/ai/img_perceptron.jpg)

### Perceptron Example

Imagine a perceptron (in your brain), the perceptron tries to decide if you should go to a concert.

* Is the artist good? Is the weather good?

What weights should these facts have?

| Criteria | Input | Weight |
| --- | :---: | :---: |
| Artists is Good | x1 = 0 or 1 | w1 = 0.7 |
| Weather is Good | x2 = 0 or 1 | w2 = 0.6 |
| Friend will Come | x3 = 0 or 1 | w3 = 0.5 |
| Food is Served | x4 = 0 or 1 | w4 = 0.3 |
| Alcohol is Served | x5 = 0 or 1 | w5 = 0.4 |

### Perceptron Algorithm

Frank Rosenblatt suggested this algorithm:

1. Set a threshold value:

    * Threshold = 1.5

2. Multiply all inputs with its weights:

    * x1 * w1 = 1 * 0.7 = 0.7
    * x2 * w2 = 0 * 0.6 = 0
    * x3 * w3 = 1 * 0.5 = 0.5
    * x4 * w4 = 0 * 0.3 = 0
    * x5 * w5 = 1 * 0.4 = 0.4

3. Sum all the results:

    * 0.7 + 0 + 0.5 + 0 + 0.4 = 1.6 (The Weighted Sum)

4. Activate the Output:

    * Return true if the sum > 1.5 ("Yes I will go to the Concert")

> **Note**
> <br>If the weather weight is 0.6 for you, it might different for someone else. A higher weight means that the weather is more important to them.
>
> If the threshold value is 1.5 for you, it might be different for someone else. A lower threshold means they are more wanting to go to the concert.

```js
const threshold = 1.5;
const inputs = [1, 0, 1, 0, 1];
const weights = [0.7, 0.6, 0.5, 0.3, 0.4];

let sum = 0;

for (let i = 0; i < inputs.length; i++) {
    sum += inputs[i] * weights[i];
}

const activate = (sum > 1.5);
```

### Perceptron Inputs

Perceptron inputs are called nodes.

The nodes have both a value and a weight.

### Node Values

In the example above, the node values are: `1, 0, 1, 0, 1`

The binary input values (0 or 1) can be interpreted as (no or yes) or (false or true).

### Node Weights

Weights shows the strength of each node.

In the example above, the node weights are: `0.7, 0.6, 0.5, 0.3, 0.4`

### The Activation Function

The activation functions maps the result (the weighted sum) into a required value like 0 or 1.

In the example above, the activation function is simple: `(sum > 1.5)`

The binary output (1 or 0) can be interpreted as (yes or no) or (true or false).

> **Note**
> <br>It is obvious that a decision is NOT made by one neuron alone.
> 
> Other neurons must provide input: Is the artist good. Is the weather good...
> 
> In Neuroscience, there is a debate if single-neuron encoding or distributed encoding is most relevant for understanding brain functions.

### Neural Networks

The Perceptron defines the first step into Neural Networks.

Multi-Layer Perceptrons can be used for very sophisticated decision making.

![neural_networks](https://www.w3schools.com/ai/img_neural_networks.jpg)

In the Neural Network Model, input data (yellow) are processed against a hidden layer (blue) and modified against more hidden layers (green) to produce the final output (red).

* The First Layer:
    * The 3 yellow perceptrons are making 3 simple decisions based on the input evidence. Each single decision is sent to the 4 perceptrons in the next layer.
* The Second Layer:
    * The blue perceptrons are making decisions by weighing the results from the first layer. This layer make more complex decisions at a more abstract level than the first layer.
* The Third Layer:
    * Even more complex decisions are made by the green perceptons.

---

## 02. Pattern Recognition

> Neural Networks are used in applications like Facial Recognition.
> 
> These applications use Pattern Recognition.
> 
> This type of Classification can be done with a Perceptron.

### Pattern Classification

Imagine a straight line (a linear graph) in a space with scattered (*x*, *y*) points. How can you classify the points over and under the line?

![exp](https://media.discordapp.net/attachments/970234628214489118/989475509224214548/unknown.png)

A perceptron can be trained to recognize the points over the line, without knowing the formula for the line.

![perceptron](https://www.w3schools.com/ai/img_perceptron_bias.jpg)

> A Perceptron is often used to classify data into two parts.
> 
> A Perceptron is also known as a Linear Binary Classifier.

### How to Program a Perceptron

To learn more about how to program a perceptron, we will create a very simple JavaScript program that will:

1. Create a simple plotter
2. Create 500 random (*x*, *y*) points
3. Display the (*x*, *y*) points
4. Create a line function: *f*(*x*)
5. Display the line
6. Compute the desired answers
7. Display the desired answers

### Create a Simple Plotter

Use the simple plotter object described [here](https://github.com/LimJY03/W3ArtificialIntelligence/blob/main/Graphics%20of%20AI/Overview%20of%20Graphics%20in%20AI.md#01-a-plotter-object).

```js
const plotter = new XYPlotter('myCanvas');
plotter.transformXY();

const xMax = plotter.xMax;
const yMax = plotter.yMax;
const xMin = plotter.xMin;
const yMin = plotter.yMin;
```

### Create Random X Y Points

Create as many *xy* points as wanted.

* Let the *x* values be random, between 0 and maximum.
* Let the *y* values be random, between 0 and maximum.

```js
const numPoints = 500;
const xPoints = [];
const yPoints = [];

for (let i = 0; i < numPoints; i++) {
    xPoints[i] = Math.random() * xMax;
    yPoints[i] = Math.random() * yMax;
}
```

### Create a Line Function

```js
f = (x) => x * 1.2 + 50;
```

### Compute Desired Answers

Compute the desired answers based on the line function:

`y = x * 1.2 + 50`

The desired answer is 1 if *y* is over the line and 0 if *y* is under the line.

Store the desired answers in an array `desired[]`.

```js
let desired = [];

for (let i = 0; i < numPoints; i++) {
    desired[i] = 0;
    if (yPoints[i] > f(xPoints[i])) {desired[i] = 1;}
}
```

### Display the Desired Answers

For each point, if `desired[i] = 1`, display a black point, else display a blue point.

```js
for (let i = 0; i < numPoints; i++) {

    let color = "blue";

    if (desired[i]) {color = "black";}

    plotter.plotPoint(xPoints[i], yPoints[i], color);
}
```

---

## 03. Training A Perceptron

In this section, we will:

* Create a **Perceptron Object**.
* Create a **Training Function**.
* Train the perceptron against the desired answers.

### Training Task

Imagine a straight line in a space with scattered *x y* points, train a perceptron to classify the points over and under the line.

![task](https://media.discordapp.net/attachments/970234628214489118/989492221344612362/unknown.png)

### Create a Perceptron Object

1. Create a Perceptron object. Name it anything (like Perceptron).
2. Let the perceptron accept two parameters:
    * The number of inputs, `no`.
    * The learning rate, `learningRate`.
3. Set the default learning rate to 0.00001.
4. Then create random weights between -1 and 1 for each input.

```js
// Perceptron Object
function Perceptron(no, learningRate = 0.00001) {

    // Set Initial Values
    this.learnc = learningRate;
    this.bias = 1;

    // Compute Random Weights
    this.weights = [];

    for (let i = 0; i <= no; i++) {
      this.weights[i] = (Math.random() * 2) - 1;
    }
}
```

> **RANDOM WEIGHTS**
> 
> * The Perceptron will **start with** a random weight for each input.
>
> **LEARNING RATE**
> 
> * For each mistake, while training the Perceptron, the weights will be adjusted with a small fraction.
> * This small fraction is the "**Perceptron's learning rate**".
> * In the Perceptron object we call it `learnc`.
> 
> **BIAS**
> 
> * Sometimes, if both inputs are 0, the perceptron might produce an incorrect output.
> * To avoid this, we give the perceptron **an extra input** with the value of 1.

### Add an Activate Function

Remember the perceptron algorithm:

* Multiply each input with the perceptron's weights
* Sum the results
* Compute the outcome

```js
this.activate = function(inputs) {

    let sum = 0;
  
    for (let i = 0; i < inputs.length; i++) {
        sum += inputs[i] * this.weights[i];
    }
  
    if (sum > 0) {return 1;} else {return 0;}
}
```

The activation function will output:

* `1` if the sum > 0
* `0` if the sum < 0

### Create a Training Function

The training function guesses the outcome based on the activate function.

Every time the guess is wrong, the perceptron should adjust the weights.

After many guesses and adjustments, the weights will be correct.

```js
this.train = function(inputs, desired) {

    inputs.push(this.bias);
    let guess = this.activate(inputs);
    let error = desired - guess;

    if (error != 0) {
        for (let i = 0; i < inputs.length; i++) {
            this.weights[i] += this.learnc * error * inputs[i];
        }
    }
}
```

### Backpropagation

After each guess, the perceptron calculates how wrong the guess was.

* If the guess is wrong, the perceptron adjusts the bias and the weights so that the guess will be a little bit more correct the next time.

This type of learning is called **backpropagation**.

* After trying (a few thousand times) your perceptron will become quite good at guessing.

---

## 04. Testing A Perceptron

A Perceptron must be tested and evaluated using real values.

### Test Your Library

Generate new unknown points and check if your Perceptron can guess the right answers.

```js
// Test Against Unknown Data
const counter = 500;
for (let i = 0; i < counter; i++) {
    let x = Math.random() * xMax;
    let y = Math.random() * yMax;
    let guess = ptron.activate([x, y, ptron.bias]);
    let color = "black";
    if (guess == 0) color = "blue";
    plotter.plotPoint(x, y, color);
}
```

### Count The Errors

Add a counter to count the number of errors:

```js
// Test Against Unknown Data
// ...
let errors = 0;
for (let i = 0; i < counter; i++) {
    //...
    if ((y > f(x) && guess == 0) || (y < f(x) && guess == 1)) {errors++}
}
```

### Tune The Perceptron

How can you tune the Perceptron?

Here are some suggestions:

* Adjust the learning rate
* Increase the number of training data
* Increase the number of training iterations

---

## 05. Perceptron Learning

An ML model is trained by looping over data multiple times.

For each iteration, the **Weight Values** are adjusted.

Training is complete when the iterations fails to **Reduce the Cost**.

### Gradient Descent

**Gradient Descent** is a popular algorithm for solving AI problems.

A simple **Linear Regression Model** can be used to demonstrate a gradient descent.

The goal of a linear regression is to fit a linear graph to a set of (*x*, *y*) points. This can be solved with a math formula. But a ML algorithm can also solve this.

It starts with a scatter plot and a linear model (*y* = *wx* + *b*).

Then it trains the model to find a line that fits the plot. This is done by altering the weight (slope) and the bias (intercept) of the line.

### A Trainer Object

We will perform the following steps to create a trainer object:

1. Create a trainer object that can take any number of (*x*, *y*) values in two arrays `(xArr, yArr)`.
2. Set weight to 0, and bias to 1.
3. A learning constant, `learnc` has to be set, and a cost variable must be defined.

Below is the code for a **Trainer Object** that can solve this problem (and many other problems).

```js
function Trainer(xArray, yArray) {
    this.xArr = xArray;
    this.yArr = yArray;
    this.points = this.xArr.length;
    this.learnc = 0.00001;
    this.weight = 0;
    this.bias = 1;
    this.cost;

    ...
}
```

### Cost Function

A standard way to solve a regression problem, is with an "Cost Function" that measures how good the solution is.

The function uses the weight and bias from the model (*y* = *wx* + *b*) and returns an error, based on how well the line fits a plot.

The way to compute this error, is to loop through all (*x*, *y*) points in the plot, and sum the square distances between the *y* value of each point and the line.

The most conventional way is to square the distances (to ensure positive values) and to make the error function differentiable.

```js
    this.costError = function() {
        let total = 0;

        for (let i = 0; i < this.points; i++) {
            total += (this.yArr[i] - (this.weight * this.xArr[i] + this.bias)) ** 2;
        }

        return total / this.points;
    }
```

The formula used in the function is actually this:

![mse](https://www.w3schools.com/ai/img_linear_regression_error.jpg)

* ***E*** is the error (cost)
* ***N*** is the total number of observations (points)
* ***y*** is the value (label) of each observation
* ***x*** is the value (feature) of each observation
* ***m*** is the slope (weight)
* ***b*** is intercept (bias)
* ***mx* + *b*** is the prediction

### An Update Weights Function

The train function above should update the weights and biases in each iteration.

The direction to move is calculated using two partial derivatives:

```js
    this.updateWeights = function() {

        let wx;             // wx = (y - (wx + b))^2 = (y - wx - b)^2
        let w_deriv = 0;    // w_deriv = dw/d(wx)
        let b_deriv = 0;    // b_deriv = db/d(wx)

        for (let i = 0; i < this.points; i++) {
            wx = this.yArr[i] - (this.weight * this.xArr[i] + this.bias);
            w_deriv += -2 * this.xArr[i] * wx;
            b_deriv += -2 * wx;
        }

        this.weight -= (w_deriv / this.points) * this.learnc;
        this.bias -= (b_deriv / this.points) * this.learnc;
    }
```

### The Train Function

We will now run a gradient descent.

The gradient descent algorithm should walk the cost function towards the best line.

Each iteration should update both m and b towards a line with a lower cost (error).

To do that, we add a train function that loops over all the data many times:

```js
    this.train = function(iter) {
        for (let i = 0; i < iter; i++) {
            this.updateWeights();
        }
        this.cost = this.costError();
    }
```

---

## 06. ML Terminology

The key ML Terminologies are:

* Relationships
* Labels
* Features
* Models
* Training
* Inference

### Relationships

Machine learning systems uses **Relationships** between **Inputs** to produce **Predictions**.

In algebra, a relationship is often written as *y* = *ax* + *b*:

* *y* is the label we want to predict.
* *a* is the slope of the line.
* *x* are the input values.
* *b* is the intercept.

With ML, a relationship is written as *y* = *b* + *wx*:

* *y* is the label we want to predict.
* *w* is the weight (the slope).
* *x* are the features (input values).
* *b* is the intercept.

### Labels

In ML terminology, the label is the thing we **want to predict**. 

It is the *y* of a linear relationship.

### Features

In ML terminology, the features are the **inputs** to the model.

It is the *x* value of a linear relationship.

> **Note**
> <br>Sometimes, there can be multiple features each with different weight. For example:
> <br>*y* = *b* + (*w1* * *x1*) + (*w2* * *x2*) + (*w3* * *x3*) + ...

### Models

A **Model** defines the relationship between the label (*y*) and the features (*x*).

There are three phases in the life of a model:

1. Data Collection
2. Training
3. Inference

### Training

The goal of training is to create a model that can answer a question, like "what is the expected price for a house?"

### Inference

Inference is made when the trained model is used to infer / predict values using live data, like putting the model into production.

---

## 07. BrainJS

`brain.js` is a `JavaScript` library that makes it easy to understand **Neural Networks** because it hides the complexity of the mathematics.

Below are some ways to install `brain.js`:

> **INSTALL WITH `npm`**
> 
> ```nodejs
> npm install brain.js
> ```

> **INSTALL WITH `html`**
> 
> ```html
> <script src="//unpkg.com/brain.js"></script>
> ```

More details about `brain.js` at [here](https://brain.js.org/#/).

### Building a Neural Network

Building a neural network with `brain.js` is just as simple as few lines of code:

```js
// Create a Neural Network
const network = new brain.NeuralNetwork();

// Train the Network with 4 input objects
network.train([
    {input: [0, 0], output: {zero: 1}},
    {input: [0, 1], output: {one: 1}},
    {input: [1, 0], output: {one: 1}},
    {input: [1, 1], output: {zero: 1}},
]);

// What is the expected output of [1, 0]?
result = network.run([1, 0]);

// Display the probability for "zero" and "one"
... result["one"] + " " + result["zero"];
```

1. A **Neural Network** is created with `new brain.NeuralNetwork()`.
2. The network is trained with `network.train([examples])`.
3. The examples represent 4 input values with a corresponding output value.
4. With `network.run([1,0])`, you ask "What is the likely output of [1, 0]?"
5. The answer from the network is:
    * one: 93% (close to 1)
    * zero: 6% (close to 0)

### Predicting Contrast

With `CSS`, colors can be set by RGB:

![rgb](https://media.discordapp.net/attachments/970234628214489118/990875005283860480/unknown.png)

The code below demonstrates how to predict the darkness of a color:

```js
// Create a Neural Network
const net = new brain.NeuralNetwork();

// Train the Network with 4 input objects
net.train([
    {input: [255/255, 255/255, 255/255], output: {light: 1}},   // White (255, 255, 255)
    {input: [192/255, 192/255, 192/255], output: {light: 1}},   // Light grey (192, 192, 192)
    {input: [65/255, 65/255, 65/255], output: {dark: 1}},       // Dark grey (64, 64, 64)
    {input: [0, 0, 0], output: {dark: 1}},                      // Black (0, 0, 0)
]);

// What is the expected output of Dark Blue (0, 0, 128)?
let result = net.run([0, 0, 128/255]);

// Display the probability of "dark" and "light"
... result["dark"] + " " + result["light"];
```

1. A Neural Network is created with `new brain.NeuralNetwork()`.
2. The network is trained with `network.train([examples])`.
3. The examples represent 4 input values a corresponding output value.
4. With `network.run([0, 0, 128/255])`, you ask "What is the likely output of dark blue?"
5. The answer from the network is:
    * Dark: 95%
    * Light: 5%

---

# **Reference**

The link to the subtopic on w3schools.com: [Machine Learning in JS](https://www.w3schools.com/ai/ai_perceptrons.asp)