# Overview of TensorFlow JS

TensorFlow has a popular `JavaScript` library for Machine Learning. 

It lets us train and deploy ML in the browser, and add ML functions to any Web Application.

---

## 01. TFJS Tutorial

TensorFlow was developed by the Google Brain Team for internal Google use, but was released as open software in 2015.

In January 2019, Google developers released TensorFlow.js, the `JavaScript` Implementation of TensorFlow.

Tensorflow.js was designed to provide the same features as the original TensorFlow library written in `Python`.

Below are some ways to [install TensorFlow.js](https://www.tensorflow.org/js/tutorials/setup):

> **INSTALL WITH `npm`**
> 
> ```console
> npm install @tensorflow/tfjs
> ```

> **INSTALL WITH `yarn`**
> 
> ```console
> yarn add @tensorflow/tfjs
> ```

> **INSTALL WITH `html`**
> 
> ```html
> <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js"></script>
> ```

### Tensors

TensorFlow.js is a `JavaScript` library to define and operate on Tensors.

The main data type in TensorFlow.js is the Tensor.

A Tensor is much the same as a multidimensional array. It contains values in one or more dimensions:

![tensors](https://www.w3schools.com/ai/img_tensor_cube.jpg)

A Tensor has the following main properties:

| Property | Description |
| --- | --- |
| `dtype` | The data type |
| rank | The number of dimensions |
| shape | The size of each dimension |

### Creating a Tensor

The main data type in TensorFlow is the Tensor.

A Tensor is created from any N-dimensional array with the `tf.tensor()` method:

```js
const myArr = [[1, 2], [3, 4], [5, 6]];
const tensorA = tf.tensor(myArr);
```

### Tensor Shape

A Tensor can also be created from an array and a shape parameter:

```js
const myArr = [[1, 2], [3, 4]];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape);
```

### Retrieve Tensor Values

You can get the data behind a tensor using `tensor.data()`:

```js
const myArr = [[1, 2], [3, 4]];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape);

tensorA.data().then(data => display(data));

function display(data) {
  console.log(data);
}
```

You can get the array behind a tensor using `tensor.array()`:

```js
const myArr = [[1, 2], [3, 4]];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape);

tensorA.array().then(array => display(array[1]));

function display(data) {
  console.log(data);
}
```

You can get the:

1. Rank of a tensor using `tensor.rank`.
2. Shape of a tensor using `tensor.shape`.
3. Data type of a tensor using `tensor.dtype`.

```js
const myArr = [1, 2, 3, 4];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape);

console.log(tensorA.rank);  // 2
console.log(tensorA.shape); // 2,2
console.log(tensorA.dtype); // float32
```

### Tensor Data Types

A Tensor can have the following data types:

* bool
* int32
* float32 (default)
* complex64
* string

When you create a tensor, you can specify the data type as the third parameter:

```js
const myArr = [1, 2, 3, 4];
const shape = [2, 2];
const tensorA = tf.tensor(myArr, shape, "int32");
```

---

## 02. TensorFlow Operations

The common TensorFlow operations are:

| Operation | Syntax |
| --- | --- |
| Add | `tensorA.add(tensorB)` |
| Subtract | `tensorA.sub(tensorB)` |
| Multiply | `tensorA.mul(tensorB)` |
| Divide | `tensorA.div(tensorB)` |
| Square | `tensor.square()` |
| Reshape | `tensor.reshape()` |

The sample code below shows the four common tensor operations using addition, subtraction, multiplication and division:

```js
const tensorA = tf.tensor([[1, 2], [3, 4], [5, 6]]);    // 2D Tensor
const tensorB = tf.tensor([[1,-1], [2,-2], [3,-3]]);    // 2D Tensor

// Tensor Addition
console.log(tensorA.add(tensorB));      // [[2, 1], [5, 2], [8, 3]]

// Tensor Subtraction
console.log(tensorA.sub(tensorB));      // [[0, 3], [1, 6], [2, 9]]

// Tensor Multiplication
console.log(tensorA.mul(tensorB));      // [[1, -2], [6, -8], [15, -18]]

// Tensor Division
console.log(tensorA.div(tensorB));      // [2, 2, 3, 4]
```

The sample code below shows the square operation of tensor:

```js
const tensorA = tf.tensor([1, 2, 3, 4]);

// Tensor Square
console.log(tensorA.square());          // [1, 4, 9, 16]
```

The number of elements in a tensor is the product of the sizes in the shape.

Since there can be different shapes with the same size, it is often useful to reshape a tensor to other shapes with the same size.

The sample code below shows the reshape operation of tensor:

```js
const tensorA = tf.tensor([[1, 2], [3, 4]]);

// Reshape Tensor
console.log(tensorA.reshape([4, 1]));   // [[1], [2], [3], [4]]
```

---

## 03. TensorFlow Models

**Models** and **Layers** are important building blocks in Machine Learning.

For different ML tasks, you must combine different types of **Layers** into a **Model** that can be trained with data to predict future values.

TensorFlow.js is supporting different types of **Models** and different types of **Layers**.

A TensorFlow Model is a **Neural Network** with one or more **Layers**.

### A TensorFlow Project

A TensorFlow project has this typical workflow:

* Collecting Data
* Creating a Model
* Adding Layers to the Model
* Compiling the Model
* Training the Model
* Using the Model

To demonstrate TensorFlow.js, we could train a TensorFlow.js model to predict *Y* values based on *X* inputs.

> **Note**
> <br>The TensorFlow model does not know the function.

We will be creating a TFJS model that makes prediction based on given points with function *Y* = 1.2*X* + 5. Then, we will use a sequential model to make prediction.

* In a sequential model, the output from one layer is the input to the next layer.

Next, we add a dense layer to the model.

* The layer is only one unit (tensor) and the shape is 1 (one dimentional).
* In a dense the layer, every node is connected to every node in the preceding layer.

```js
// Create Training Data
const xs = tf.tensor([0, 1, 2, 3, 4]);
const ys = xs.mul(1.2).add(5);

// Define a Linear Regression Model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Specify Loss and Optimizer
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Train the Model
model.fit(xs, ys, {epochs: 500}).then(() => {myFunction()});

// Use the Model
function myFunction() {

    const xArr = [];
    const yArr = [];

    for (let x = 0; x <= 10; x++) {

        xArr.push(x);

        let result = model.predict(tf.tensor([Number(x)]));

        result.data().then(y => {
            yArr.push(Number(y));
            if (x == 10) {plot(xArr, yArr)};
        });
    }
}
```

There are multiple TensorFlow Optimizers, but we are using SGD here.

* Adadelta -Implements the Adadelta algorithm.
* Adagrad - Implements the Adagrad algorithm.
* Adam - Implements the Adam algorithm.
* Adamax - Implements the Adamax algorithm.
* Ftrl - Implements the FTRL algorithm.
* Nadam - Implements the NAdam algorithm.
* Optimizer - Base class for Keras optimizers.
* RMSprop - Implements the RMSprop algorithm.
* SGD - Stochastic Gradient Descent Optimizer.

---

## 04. TensorFlow.js Visor

TensorFlow Visor is a graphic tools for visualizing ML, often called tfjs-vis. It contains functions for visualizing TensorFlow Models. It can be used with Custom Tools likes d3, Chart.js, and Plotly.js.

The visualizations can be organized in Visors (modal browser windows).

### Using tfjs-vis

Below are some ways to [install tfjs-vis](https://github.com/tensorflow/tfjs/tree/master/tfjs-vis#installation)

> **INSTALL WITH `npm`**
> 
> ```console
> npm install @tensorflow/tfjs-vis
> ```

> **INSTALL WITH `yarn`**
> 
> ```console
> yarn add @tensorflow/tfjs-vis
> ```

> **INSTALL WITH `html`**
> 
> ```html
> <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis"></script>
> ```

### Scatter Plots

```js
const series = ['First', 'Second'];

const series1 = [];
const series2 = [];
for (let i = 0; i < 100; i++) {
  series1[i] = {x: i, y: Math.random() * 100};
  series2[i] = {x: i, y: Math.random() * 100};
}

const data = {values: [series1, series2], series};

tfvis.render.scatterplot({name: "my Plots"}, data);
```

![scatter_plot](https://media.discordapp.net/attachments/984655726406402088/993097207207165972/unknown.png)

### Bar Charts

```js
const data = [
    {index: 0, value: 100},
    {index: 1, value: 200},
    {index: 2, value: 150},
    {index: 2, value: 250}
];

tfvis.render.barchart({name:"my Graphs"}, data);
```

![bar_plot](https://media.discordapp.net/attachments/984655726406402088/993098299257135165/unknown.png)

### Line Graphs

```js
let values = [
    {x: 1, y: 20},
    {x: 2, y: 30},
    {x: 3, y: 5},
    {x: 4, y: 12}
];

tfvis.render.linechart({name: 'my Lines'}, {values});
```

![line_plot](https://media.discordapp.net/attachments/984655726406402088/993098766234177536/unknown.png)

---

# **Reference**

The link to the subtopic on w3schools.com: [TensorFlow.js](https://www.w3schools.com/ai/ai_tensorflow_intro.asp)