/* 
 * Example
 * You sell roses.
 * 
 * - Red roses are $3 each
 * - White roses are $4 each
 * - Yellow roses are $2 each
 * 
 * - Monday you sold 260 (120 red, 90 white, 60 yellow) roses
 * - Tuesday you sold 200 (80 red, 70 white, 40 yellow) roses
 * - Wednesday you sold 120 (60 red, 40 white, 20 yellow) roses
 * 
 * What was the value of all the sales?
 */ 

const mRose = math.matrix([3, 4, 2]);
const mSold = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);

const mSales = math.multiply(mRose, mSold);

console.log(mSales);