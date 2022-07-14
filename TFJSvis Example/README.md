## ML Using TFJS Example

In this example, we will create a simple ML model to make predictions.

## `tfjs-vis` Library

The graphics (graphs) are displayed using the [`tfjs-vis`](https://js.tensorflow.org/api_vis/1.5.1/) library. It is a small library for in-browser visualization intended for use with TensorFlow.js.

Some main features of `tfjs-vis` are:

* It is a graphic tools for visualizing ML.
* It has functions for visualizing TensorFlow objects.
* Visualizations can be organized in a Visor (a modal browser window).
* It can be used with Custom Tools likes [`d3.js`](https://d3js.org/), [`Chart.js`](https://www.chartjs.org/), and [`Plotly.js`](https://plotly.com/javascript/).

We will reference the `tfjs-vis` library in the `<script>` tag in our `HTML` file.

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis"></script>
```

Other methods to install `tfjs-vis` library can be found [here](https://www.npmjs.com/package/@tensorflow/tfjs-vis#Installation).

---

## Introduction

This example, like most other ML productions, performs 4 important steps:

* Data Collection
* Data Preparation
* Model Training
* Model Evaluation

The first data set (Car Data Set) used for this example is from TensorFlow JS, which can be found [here](https://storage.googleapis.com/tfjs-tutorials/carsData.json). A preview of the `JSON` file is as below:

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

In this example, we will only predict `Miles_per_hour` based on a given `Horsepower` for this data set.

The second data set (House Data Set) used for this example can be found [here](https://github.com/LimJY03/W3ArtificialIntelligence/blob/main/TFJSvis%20Example/static/housedata.json). A preview of the `JSON` file is as below:

```json
[
    {
        "Avg. Area Income": 79545.45857,
        "Avg. Area House Age": 5.682861322,
        "AvgAreaNumberofRooms": 7.009188143,
        "Avg. Area Number of Bedrooms": 4.09,
        "Area Population": 23086.8005,
        "Price": 1059033.558,
        "Address": "208 Michael Ferry Apt. 674\nLaurabury, NE 37010-5101"
    },
    {
        "Avg. Area Income": 79248.64245,
        "Avg. Area House Age": 6.002899808,
        "AvgAreaNumberofRooms": 6.730821019,
        "Avg. Area Number of Bedrooms": 3.09,
        "Area Population": 40173.07217,
        "Price": 1505890.915,
        "Address": "188 Johnson Views Suite 079\nLake Kathleen, CA 48958"
    },
    ...
]
```

In this example, we will only predict `AvgAreaNumberofRooms` based on a given `Price` for this data set.