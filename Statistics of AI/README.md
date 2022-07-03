# **Overview of Statistics in AI**

Statistical Learning is a set of tools for understanding data. These tools broadly come under two classes: supervised learning & unsupervised learning. 

Generally, supervised learning refers to predicting or estimating an output based on one or more inputs. Unsupervised learning provides a relationship or finds a pattern within the given data without a supervised output.

---

## **01. Probability**

Probability is how likely something is to occur, or how likely something is true.

The mathematic probability is a number between 0 and 1.

0 indicates **Impossibility** and 1 indicates **Certainty**.

### **The Probability of an Event**

I have 6 balls in a bag: 3 reds, 2 are green, and 1 is blue. What is the probability that I pick a green one blindfolded?

> Number of ways, n(G) it can happen are 2 (there are 2 greens).
> 
> Number of outcomes, n(S) are 6 (there are 6 balls).
> 
> The probability is 2 out of 6: 
>
> n(G) / n(S) = 2 / 6 = 0.333333...

**Probability = # of Ways / # of Outcomes**

### **P(A) - The Probability**

The probability of an event A is often written as P(A).

When tossing two coins, there are 4 possible outcomes:

|Event, A      | P(A)      |
|:---          |:----------|
|Heads + Heads | 1/4 = 0.25|
|Tails + Tails | 1/4 = 0.25|
|Heads + Tails | 1/4 = 0.25|
|Tails + Heads | 1/4 = 0.25|

> When P(A) **=** P(B): Event A and B have the **same** chance to occur.
> 
> When P(A) **>** P(B): Event A has a **higher** chance to occur.
> 
> When P(A) **<** P(B): Event A has a **lower** chance to occur.

---

## **02. Statistics**

Statistics is about how to collect, analyze, interpret, and present data.

> Statistics works with questions like:
> 
> * What is the most **Common**?
> * What is the most **Expected**?
> * What is the most **Normal**?

### **Inferential Statistics**

**Inferential statistics** are methods for quantifying properties of a population from a small Sample.

You take data from a sample and make a prediction about the whole population.

> For example, you can stand in a shop and ask a sample of 100 people if they like chocolate.
>
> You obtained that 8 out of the 100 people do not like chocolate.

From your research, using inferential statistics, you could predict that 92% of all shoppers like chocolate.

### **Descriptive Statistics**

**Descriptive statistics** are methods for summarizing observations into information that we can understand.

Since we register every new born baby, we can tell that 51 out of 100 are boys.

From the numbers we have collected, we can predict a 51% chance that a new baby will be a boy.

It is a mystery that the ratio is not 50%, like basic biology would predict. We can only say that we have at least had this tilted sex ratio since the 17th century.

### **The Mean**

The mean is the **Average** of all values.

> The mean is the **Sum** divided by the **Count**.

This table contains house prices versus size:

|Price|	7	|8	  |8	|9    |9	|9	  |10	|11   |14	|14	  |15   |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|Size |	50	|60   |70   |80   |90	|100  |110  |120  |130	|140  |150  |

The mean price is (7 + 8 + 8 + 9 + 9 + 9 + 10 + 11 + 14 + 14 + 15) / 11 = 10.363636.

> Calculating **mean** in JavaScript:
>
> ```js
> var mean = (7 + 8 + 8 + 9 + 9 + 9 + 10 + 11 + 14 + 14 + 15) / 11;
> ```

> Or if we use a math library like math.js:
>
> ```js
> var mean = math.mean([7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]);
> ```

### **The Variance**

In statistics, the variance is the average of the squared differences from the mean value.

In other words, it describes how far a set of numbers is spread out from their average value.

> Calculating **variance** in JavaScript:
>
> ```js
> // Calculate the Mean (m)
> var m = (7 + 8 + 8 + 9 + 9 + 9 + 10 + 11 + 14 + 14 + 15) / 1
> 
> // Calculate the Sum of Squares (ss)
> var ss = (7-m)**2 + (8-m)**2 + (8-m)**2 + (9-m)**2 + (9-m)**2 + (9-m)**2 + (10-m)**2 + (11-m)**2 + (14-m)**2 + (14-m)**2 + (15-m)**2;
>
> // Calculate the Variance
> var variance = ss / 11;
> ```

> Or if we use a math library like math.js:
>
> ```js
> var variance = math.variance([7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15], "uncorrected");
> ```

### **Standard Deviation**

Standard deviation is a measure of how spread out numbers are.

The symbol is **σ** (Greek letter sigma).

The formula is the **√(variance)** (the square root of the variance).

> Calculating **standard deviation** in JavaScript:
> 
> ```js
> // Calculate the Mean (m)
> var m = (7 + 8 + 8 + 9 + 9 + 9 + 10 + 11 + 14 + 14 + 15) / 11;
>
> // Calculate the Sum of Squares (ss)
> var ss = (7-m)**2 + (8-m)**2 + (8-m)**2 + (9-m)**2 + (9-m)**2 + (9-m)**2 + (10-m)**2 + (11-m)**2 + (14-m)**2 + (14-m)**2 + (15-m)**2;
>
> // Calculate the Variance
> var variance = ss / 11;
>     
> // Calculate the Standard Deviation
> var std = Math.sqrt(variance); // Java Lib uses (M)ath, math.js uses (m)ath
> ```

> Or if we use a math library like math.js:
>
> ```js
> var std = math.std([7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15], "uncorrected");
> ```

---

## **03. Normal Distribution**

The **Normal Distribution Curve** is a bell-shaped curve.

Each band of the curve has a width of **1 Standard Deviation**:

![normal dist curve](https://www.w3schools.com/ai/img_standard_normal_distribution.jpg)

> Values less than 1 Standard Deviation away account for 68.27%.
> 
> Values less than 2 standard deviations away account for 95.45%.
> 
> Values less than 3 standard deviations away account for 99.73%.

What does it mean?

* Most observations are within 1 standard deviation from the mean.
* Almost all observations are within 2 standard deviations.
* Practically all observations are within 3 standard deviations.

### **Normal Distribution Facts**

Normal distribution is **Symmetric**. The peak always divides the distribution in half.

Normal distribution is a probability distribution.

A lot of observations follow the normal distribution:

* Our IQ
* Our Weight
* Our Height
* Our Salary
* Our Blood Pressure

> The 68–95–99.7 Rule (aka The Empirical Rule), is a shorthand to remember the percentage of values that lie within the different bands of a normal distribution.

Normal distribution is also known as the **Gaussian Distribution** and the **Bell Curve**.

### **The Margin of Error**

Statisticians will always try to predict everything with 100% accuracy.

But, there will always be some uncertainty.

The **Margin of Error** is the number that quantifies this statistical uncertainty.

> Different margins define different ranges for where we believe the correct answers can be found.
> 
> The acceptable margin is a matter of judgment, and relative to how important the answer is.

The more samples we collect, the lower the margin of error is:

![Margin of Error](https://www.w3schools.com/ai/img_margin_of_error.png)

### **How to Interpret Margin of Error**

Suppose 55% of a sampled population say they plan to vote "Yes".

When projecting this to a whole population, you add / subtract the margin of error to give a range of possible results.

* With a margin of error of 3%, you are confident that between 52% and 58% will vote "Yes".
* With a margin of error of 10%, you are confident that between 45% and 65% will vote "Yes".

---

# **Reference**

The link to the subtopic on w3schools.com: [AI Statistics](https://www.w3schools.com/ai/ai_distribution.asp)

More on Statistical Learning from towardsdatascience.com: [Statistical Learning](https://towardsdatascience.com/introduction-to-statistical-methods-in-ai-23f89df72cdb)