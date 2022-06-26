// Define Perceptron object
function Perceptron(count, learning_rate = 0.00001) {

    // Set initial values
    this.learnc = learning_rate;
    this.bias = 1;

    // Generate random weights between -1 and 1
    this.weights = [];
    
    for (let i = 0; i <= count; i++) {
      this.weights[i] = (Math.random() * 2) - 1;
    }

    // Activate function
    this.activate = function(inputs) {

        let sum = 0;
      
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
      
        if (sum > 0) {return 1;} else {return 0;}
    }

    // Training function
    this.train = function(inputs, label) {

        inputs.push(this.bias);
        let guess = this.activate(inputs);
        let error = label - guess;
        
        // Error present, change weight
        if (error != 0) {
            for (let i = 0; i < inputs.length; i++) {
                this.weights[i] += this.learnc * error * inputs[i];
            }
        }
    }
}