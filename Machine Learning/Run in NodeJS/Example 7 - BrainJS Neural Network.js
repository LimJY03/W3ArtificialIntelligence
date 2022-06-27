const brain = require("brain.js")

// Create a neural network
const net = new brain.NeuralNetwork();

// Create training data
const training_data = [
    {input: [255, 255, 255].map(x => x / 255), output: {light: 1}}, // White
    {input: [192, 192, 192].map(x => x / 255), output: {light: 1}}, // Light Grey
    {input: [64, 64, 64].map(x => x / 255), output: {dark: 1}},     // Dark Grey
    {input: [0, 0, 0].map(x => x / 255), output: {dark: 1}}         // Black
];

// Train the network
net.train(training_data);

// Get prediction
const input = [0, 0, 128];
const result = net.run(input.map(x => x / 255));

// Display result
// document.getElementById('header').innerHTML = '<h1>Predict The Darkness of RGB(' + input + ')</h1>';
// document.getElementById('predict_result').innerHTML = 'Darkness: ' + result['dark'] + '<br>Lightness: ' + result['light'];
console.log('Darkness of RGB(' + input + '):');
console.log('Darkness: ' + result['dark']);
console.log('Lightness: ' + result['light']);