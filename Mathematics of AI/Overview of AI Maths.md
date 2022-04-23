# **Overview of Mathematics in AI**

Behind every AI success there is Mathematics.

All AI models are constructed using solutions and ideas from math.

---

## **01. AI Mathematics**

The purpose of AI is to create models for understanding thinking.

If you want an AI career:

* Data Scientist
* Machine Learning Engineer
* Robot Scientist
* Data Analyst
* Natural Language Expert
* Deep Learning Scientist

The main branches of Mathematics involved in Artificial Intelligence are:

* Linear Functions
* Linear Graphics
* Linear Algebra
* Probability
* Statistics

---

## **02. Linear Functions**

A Function is a special relationship where each input has an output.

A function is often written as f(x) where x is the input.

> * Linear means straight
> * A linear function is a straight line
> * A linear graph represents a linear function

### **Linear Equations**

A linear equation is an equation of a straight line.

* y = 2
* x = 2
* y = x
* y = 2x
* y = 2x + 5
* 5y = 3x

### **Non-Linear Equations**

Non-linear equations are equations that does not draw a straight line.

* y = x²
* y = eˣ
* y = √(x)
* y = sin(2x)

### **Linear Regression**

A Linear regression tries to model the relationship between two variables by fitting a linear graph to data.

One variable (x) is considered to be data, and the other (y) is considered to be dependent.

For example, a Linear Regression can be a model to relate the price of houses to their size.

### **Linear Least Squares**

Linear Least Squares (LLS) is a set of formulations for solving statistical problems involved in Linear Regression.

> **GRAPHICS**
> 
> Graphics plays an important role in Math, Statistics and Machine Learning.

---

## **03. Linear Algebra**

Linear algebra is the bedrock of data science.

It is used to solve Linear Equations. 

> *Linear Algebra is the branch of mathematics that concerns linear equations (and linear maps) and their representations in vector spaces and through matrices.*
> 
> *Linear algebra is central to almost all areas of mathematics.*
>
> Wikipedia

Knowing linear algebra boosts our ability to understand data science algorithms.

> **Artificial Intelligence** experts cannot live without **Linear Algebra**:
> 
> * AI make heavy use of **Scalars**
> * AI make heavy use of **Vectors**
> * AI make heavy use of **Matrices**
> * AI make heavy use of **Tensors**
> 
> The purpose of this chapter is to highlight the parts of linear algebra that is used in data science projects like machine learning and deep learning.

![Scalar vs Vector vs Matrix vs Tensor](https://res.cloudinary.com/practicaldev/image/fetch/s--oTgfo1EL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/adhiraiyan/DeepLearningWithTF2.0/master/notebooks/figures/fig0201a.png)

---

## **04. Scalars**

In linear algebra, a scalar is a single number.

> In JavaScript it can be written like a constant or a variable:
> 
> ```js
> const myScalar = 1;
> let x = 1;
> var y = 1;
> ```

---

## **05. Vectors**

In linear algebra, a vector is an array of numbers.

> In JavaScript, it can be written as an array:
> 
> ```js
> const vectorArray = [1, 2, 3];
> ```
>
> It can also be written as Matrices with only one column:
> 
> ```js
> const vectorMatrix = [[1], [2], [3]];
> ```
> 
> An array can have multiple dimensions, but a vector is a 1-dimensional array.
>
> ```js
> const myArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
> myArray.length;   // the length of myArray is 11
> ```

Vectors have a **Magnitude** and a **Direction**. 

It typically describes **Motion**, **Force** or **Velocity**.

> **MOTION**
> 
> * Vectors are the building blocks of Motion
> * In geometry, a vector can describe a movement from one point to another.
> * The vector [3, 2] says go 3 right and 2 up.

### **Vector Addition**

The sum of two vectors (***a*** + ***b***) is found by moving the vector ***b*** until the tail meets the head of vector ***a***. (This does not change vector ***b***).

Then, the line from the tail of ***a*** to the head of ***b*** is the vector (***a*** + ***b***):

![Vector Addition](https://www.w3schools.com/ai/img_vector_addition.jpg)

### **Vector Sign**

Vector -***a*** is the opposite of +***a***.

This means that vector ***a*** and vector -***a*** has the same magnitude in opposite directions:

![Vector Sign](https://www.w3schools.com/ai/img_vector_subtraction.jpg)

### **Scalar Operations**

Vectors can be modified by adding, subtracting, or multiplying a scalar (number) from all the vector values:

***a*** = [1 1 1]

***a*** + ***1*** = [2 2 2]

[1 2 3] + ***1*** = [2 3 4]

Vector multiplications has much of the same properties as normal multiplication:

[2 2 2] * 3 = [6 6 6]

[6 6 6] / 3 = [2 2 2]

---

## **06. Matrices**

> A matrix is set of Numbers.
> 
> A matrix is an Rectangular Array.
> 
> A matrix is arranged in Rows and Columns.

In linear algebra, a matrix is a 2-dimensional array.

> In JavaScript, a matrix is an array with 2 indices (indexes).
> 
> ```js
> var myArray = [[1, 2], [3, 4], [5, 6]];
> ```

### **Matrix Dimensions**

For a matrix with p rows and q columns, its dimension is (p × q).

### **Square Matrices**

A **Square Matrix** is a matrix with the number of rows and columns.

An n-by-n matrix is known as a square matrix of order n.

![Square Matrix](https://miro.medium.com/max/1332/1*bC4v94NZQ2LA4OXEfML6Ew.png)

### **Diagonal Matrices**

A **Diagonal Matrix** has values on the diagonal entries, and zero on the rest.

> All Diagonal Matrices are Square Matrices.

![Diagonal Matrix](https://miro.medium.com/max/1228/1*6Y5bTxYWyvvelb0rHa4DGg.png)

### **The Identity Matrix**

The **Identity Matrix** has 1 on the diagonal and 0 on the rest.

> The Identity Matrix is a Diagonal Matrix and is also a Square Matrix.

This is the matrix equivalent of 1. The symbol is ***I***.

![Identity Matrix](https://miro.medium.com/max/1316/1*Tz_xm6AcQ1FtJLkB6sTcEQ.png)

### **Zero Matrix**

A **Zero Matrix** is also known as a Null Matrix.

It contains only zeroes in the matrix. The symbol is ***O***.

![Zero Matrix](https://dcvp84mxptlac.cloudfront.net/diagrams2/equation-2-examples-of-zero-matrices-in-various-sizes.png)

### **JavaScript Matrix Operations**

Programming matrix operations in JavaScript, can easily become a spaghetti of loops.

Using a JavaScript library will save you a lot of headache.

One of the most common libraries to use for matrix operations is called **math.js**.

It can be added to your web page with one line of code:

> **USING math.js IN HTML CODE**
> 
> ```html
> <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.3.2/math.js"></script>
> ```

### **Addition and Subtraction of Matrices**

If two matrices have the **same dimension**, we can add or subtract them:

> ```js    
> const mA = math.matrix([[1, 2], [3, 4], [5, 6]]);
> const mB = math.matrix([[1, -1], [2, -2], [3, -3]]);
> 
> // Matrix Addition
> const matrixAdd = math.add(mA, mB);
> 
>   // additionResult: [[2, 1], [5, 2], [8, 3]]
> 
> // Matrix Subtraction
> const matrixSub = math.subtract(mA, mB);
> 
>   // subtractionResult: [[0, 3], [1, 6], [2, 9]]
> ```

### **Scalar Multiplication and Division of Matrices**

While numbers in rows and columns are called **Matrices**, single numbers are called **Scalars**.

It is easy to multiply or divide a matrix with a scalar. Just multiply or divide each number in the matrix with the scalar:

> ```js
> const mA = math.matrix([[0, 2], [4, 6], [8, 10]]);
> 
> // Matrix Multiplication
> const matrixMult = math.multiply(2, mA);
> 
>   // Result [[0, 4], [8, 12], [16, 20] 
> 
> // Matrix Division
> const matrixDiv = math.divide(mA, 2); 
> 
>   // Result [[0, 1], [2, 3], [4, 5]]
> ```

### **Transposition of Matrices**

To transpose a matrix, means to replace rows with columns.

When you swap rows and columns, you rotate the matrix around it's diagonal.

![Matrix Transposition](https://www.studymite.com/wp-content/uploads/2018/12/transpose.jpg)

### **Multiplying Matrices**

Multiplying matrices is more difficult.

We can only multiply two matrices if the number of rows in matrix A is the same as the number of columns in matrix B.

Then, we need to compile a "[dot product](https://en.wikipedia.org/wiki/Dot_product)":

We need to multiply the numbers in each row of A with the numbers in each column of B, and then add the products:

> ```js
> const mA = math.matrix([[1, 2, 3]]);
> const mB = math.matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
> 
> // Matrix Multiplication
> const matrixMult = math.multiply(mA, mB);
> 
>   // Result [[6, 12, 18]]
> ```

### **Matrix Factorization**

With AI, you need to know how to factorize a matrix.

Matrix factorization is a key tool in linear algebra, especially in Linear Least Squares.

---

## **07. Tensors**

> A Tensor is an **N-dimensional Matrix**:
> 
> * A Scalar is a 0-dimensional tensor
> * A Vector is a 1-dimensional tensor
> * A Matrix is a 2-dimensional tensor
> 
> A Tensor is a generalization of Vectors and Matrices to higher dimensions.

![Scalar vs Vector vs Matrix vs Tensor](https://hadrienj.github.io/assets/images/2.1/scalar-vector-matrix-tensor.png)

In JavaScript, a tensor is an array with multiple indices (indexes).

### **Tensor Ranks**

The number of directions a tensor can have in a **N**-dimensional space, is called the **Rank** of the tensor.

The rank is denoted **R**.

A Scalar is a single number. R = 0.

* It has 0 axis.
* It has a Rank of 0.
* It is a 0-dimensional Tensor.

A Vector is an array of numbers. R = 1.

* It has 1 axis.
* It has a Rank of 1.
* It is a 1-dimensional Tensor.

A Matrix is a 2-dimensional array. R = 2.

* It has 2 axis.
* It has a Rank of 2.
* It is a 2-dimensional Tensor.

### **Real Tensors**

Technically, all of the above are tensors, but when we speak of tensors, we generally speak of matrices with a dimension larger than 2 (R > 2).

In JavaScript, an example of the initialisation and declaration of 2-D tensor (matrix):

```js
const tensor = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Array in another Array
```

### **TensorFlow Library**

One of the most common libraries to use for tensor operations is called **tensorflow.js**.

> **USING tensorflow.js IN HTML CODE**
> 
> ```html
> <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
> ```

### **JavaScript Tensor Operations**

Programming tensor operations in JavaScript, can easily become a spaghetti of loops.

Using a JavaScript library will save you a lot of headache.

```js
const tensorA = tf.tensor([[1, 2], [3, 4], [5, 6]]);
const tensorB = tf.tensor([[1, -1], [2, -2], [3, -3]]);

// Tensor Addition
const tensorAdd = tensorA.add(tensorB);

    // Result: [[2, 1], [5, 2], [8, 3]]

// Tensor Subtraction
const tensorSub = tensorA.sub(tensorB);

    // Result: [[0, 3], [1, 6], [2, 9]]
```

---

# **Reference**

The link to the subtopic on w3schools.com: [AI Mathematics](https://www.w3schools.com/ai/ai_mathematics.asp)