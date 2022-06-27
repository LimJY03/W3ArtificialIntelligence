function Trainer(xArr, yArr) {

    // Initialize Properties
    this.xArr = xArr;
    this.yArr = yArr;
    this.pointsCount = this.xArr.length;
    this.learnc = 0.000001;
    this.weight = 0;
    this.bias = 1;
    this.cost;

    // Cost Function
    this.costError = () => {

        let total = 0;

        for (let i = 0; i < this.pointsCount; i++) {
            total += (this.yArr[i] - (this.weight * this.xArr[i] + this.bias)) ** 2;
        }

        return total / this.pointsCount;
    }

    // Update Weights Function
    this.updateWeights = () => {

        let w_deriv = 0;
        let b_deriv = 0;

        for (let i = 0; i < this.pointsCount; i++) {

            let gx = this.yArr[i] - (this.weight * this.xArr[i] + this.bias);
            w_deriv += -2 * this.xArr[i] * gx;
            b_deriv += -2 * gx;
        }

        this.weight -= (w_deriv / this.pointsCount) * this.learnc;
        this.bias -= (b_deriv / this.pointsCount) * this.learnc;
    }

    // Train Function
    this.train = (iter) => {

        for (let i = 0; i < iter; i++) {
            this.updateWeights();
        }

        this.cost = this.costError();
    }
}