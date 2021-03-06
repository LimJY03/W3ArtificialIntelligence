// Data Set Informations
const dataset = [
    {
        dir: './cardata.json', 
        featureProperty: 'Horsepower', 
        featureName: 'Horsepower',
        labelProperty: 'Miles_per_Gallon',
        labelName: 'MPG'
    },
    {
        dir: './housedata.json', 
        featureProperty: 'AvgAreaNumberofRooms', 
        featureName: 'Rooms',
        labelProperty: 'Price',
        labelName: 'Price'
    }
]

function run() {
    const id = document.getElementById('choose-dataset').value;
    runMain(dataset[id]);
}

// Plot data
function plotData(data, surface, xLabelName, yLabelName) {
    tfvis.render.scatterplot(
        surface,
        {values: data, series: ['Original', 'Predicted']},
        {xLabel: xLabelName, yLabel: yLabelName}
    );
}

// Train model
async function trainModel(inputs, labels, model, surface) {
    return await model.fit(inputs, labels, {
        batchSize: 25, 
        epochs: 50, 
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(surface, ['loss'], {callbacks: ['onEpochEnd']})
    });
}

// Main function
async function runMain(datasetObj) {

    // Get dataset details properties
    const dataDir = datasetObj.dir;
    const xProp = datasetObj.featureProperty;
    const xLabel = datasetObj.featureName;
    const yProp = datasetObj.labelProperty;
    const yLabel = datasetObj.labelName;

    // Fetch data
    const jsonData = await fetch(dataDir);
    let data = await jsonData.json();
    data = data.map((obj) => {return {x: obj[xProp], y: obj[yProp]};}).filter((obj) => (obj.x != null) && (obj.y != null));

    // Plot data
    const dataSurface = document.getElementById('data-surface');
    const lossSurface = document.getElementById('loss-surface');

    plotData(data, dataSurface, xLabel, yLabel);

    // Convert data into tensors
    const input = data.map(obj => obj.x);
    const label = data.map(obj => obj.y);
    const inputTensor = tf.tensor2d(input, shape=[input.length, 1]);
    const labelTensor = tf.tensor2d(label, shape=[label.length, 1]);

    // Normalize data to range of [0,1]
    const inputRange = (inputTensor.max()).sub(inputTensor.min());                  // inputTensorMax - inputTensorMin
    const labelRange = (labelTensor.max()).sub(labelTensor.min());                  // labelTensorMax - labelTensorMin
    const inputNormalized = (inputTensor.sub(inputTensor.min())).div(inputRange);   // (inputTensor - inputTensorMin) / inputRange
    const labelNormalized = (labelTensor.sub(labelTensor.min())).div(labelRange);   // (labelTensor - labelTensorMin) / labelRange

    // Create a sequential model
    const model = tf.sequential({layers: [
        tf.layers.dense({inputShape: [1], units: 1, useBias: true}),
        tf.layers.dense({units: 1, useBias: true})
    ]});

    // Compile the model
    model.compile({
        optimizer: 'sgd',
        loss: 'meanSquaredError'
    });

    // Train the model
    await trainModel(inputNormalized, labelNormalized, model, lossSurface);

    // Predict with the model
    let xPred = tf.linspace(0, 1, 100);
    let yPred = model.predict(xPred.reshape([100, 1]));

    // Rescale the predictions from [0,1]
    xPred = xPred.mul(inputRange).add(inputTensor.min()).dataSync();
    yPred = yPred.mul(labelRange).add(labelTensor.min()).dataSync();

    // Plot prediction line
    const predictionLine = Array.from(xPred).map((val, i) => {
        return {x: val, y: yPred[i]};
    });

    plotData([data, predictionLine], dataSurface, xLabel, yLabel);
}