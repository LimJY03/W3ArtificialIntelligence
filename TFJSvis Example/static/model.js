// Import necessary data
const tf = require('@tensorflow/tfjs');
const tfvis = require('@tensorflow/tfjs-vis');

// Select data that are needed only
function extractData(obj) {
    return {
        x: obj.Horsepower, 
        y: obj.Miles_per_Gallon
    };
}

// Plot data
function plotData(data, surface) {
    tfvis.render.scatterplot(
        surface,
        {values: data, series: ['Original', 'Predicted']},
        {xLabel: 'Horsepower', yLabel: 'MPG'}
    );
}

// Train model
async function trainModel(inputs, labels, model, surface) {
    return await model.fit(inputs, labels, {
        batchSize: 80, 
        epochs: 50, 
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(surface, ['loss'], {callbacks: ['onEpochEnd']})
    }).then((info) => {
        document.getElementById('final-loss').innerHTML = 'Final Loss: ' + info.history.loss;
    });
}

// Main function
async function runMain() {

    // Fetch data
    const jsonData = await fetch('./cardata.json');
    let data = await jsonData.json();
    data = data.map(extractData).filter((obj) => {
        (obj.x != null) && (obj.y != null);
    });

    // Plot data
    const dataSurface = document.getElementById('data-surface');
    const lossSurface = document.getElementById('loss-surface');

    plotData(data, dataSurface);

    // Convert data into tensors
    const input = data.map(obj => obj.x);
    const label = data.map(obj => obj.y);
    const inputTensor = tf.tensor2d(input, shape=[input.length, 1]);
    const labelTensor = tf.tensor2d(label, shape=[label.length, 1]);

    // Normalize data to range of [0,1]
    const inputRange = (inputTensor.max()).sub(inputTensor.min());                  // inputTensorMax - inputTensorMin
    const labelRange = (labelTensor.max()).sub(labelTensor.min());                  // labelTensorMax - labelTensorMin
    const inputNormalized = (inputTensor.sub(inputTensor.min())).div(inputRange);   // (inputTensor - inputTensorMin) / inputRange
    const labelNormalized = (labelTensor.sub(labelTensor.min())).div(labelRange);   // (inputTensor - inputTensorMin) / inputRange

    // Create a sequential model
    const model = tf.Sequential({label: [
        tf.layers.dense({inputShape: [1], units: 1, useBias: True}),
        tf.layers.dense({units: 1, useBias: True})
    ]});

    // Compile the model
    model.compile({
        optimizer: 'sgd',
        loss: 'meanSquaredError'
    });

    // Train the model
    await trainModel(inputNormalized, labelNormalized, model, lossSurface)

    // Predict with the model
    let xPred = tf.linspace(inputTensor.min(), inputTensor.max(), 100);
    let yPred = model.predict(xPred.reshape([100, 1]));

    // Plot prediction line
    const predictionLine = Array.from(xPred).map((val, i) => {
        return  {x: val, y: yPred[i]};
    });

    plotData([data, predictionLine], dataSurface);
}

runMain();