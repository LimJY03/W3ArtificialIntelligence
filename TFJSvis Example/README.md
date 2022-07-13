## ML Using TFJS Example

In this example, we will create a simple 

## `tfjs-vis` Library

The graphics (graphs) are displayed using the [`tfjs-vis`](https://js.tensorflow.org/api_vis/1.5.1/) library. It is a small library for in-browser visualization intended for use with TensorFlow.js.

Some main features of `tfjs-vis` are:

* It is a graphic tools for visualizing ML.
* It has functions for visualizing TensorFlow objects.
* Visualizations can be organized in a Visor (a modal browser window).
* It can be used with Custom Tools likes [`d3.js`](https://d3js.org/), [`Chart.js`](https://www.chartjs.org/), and [`Plotly.js`](https://plotly.com/javascript/).

We will use `npm` to install `tfjs-vis` library.

```node
npm install @tensorflow/tfjs-vis
```

Other methods to install `tfjs-vis` library can be found [here](https://www.npmjs.com/package/@tensorflow/tfjs-vis#Installation).

---

## Introduction

This example, like most other ML productions, performs 4 important steps:

* Data Collection
* Data Preparation
* Model Training
* Model Evaluation

The data used for this example is from a cars data set from TensorFlow JS, which can be found [here](https://storage.googleapis.com/tfjs-tutorials/carsData.json). A preview of the `JSON` file is as below:

```json
[
    {
        "Name": "chevrolet chevelle malibu",
        "Miles_per_Gallon": 18,
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Acceleration": 12,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    {
        "Name": "buick skylark 320",
        "Miles_per_Gallon": 15,
        "Cylinders": 8,
        "Displacement": 350,
        "Horsepower": 165,
        "Weight_in_lbs": 3693,
        "Acceleration": 11.5,
        "Year": "1970-01-01",
        "Origin": "USA"
    },
    ...
]
```

In this example, we will only predict `Miles_per_hour` based on a given `Horsepower`.

## Training Output

