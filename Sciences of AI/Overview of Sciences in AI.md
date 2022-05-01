# **Overview of Sciences in AI**

**Artificial Intelligence** is a set of different **Sciences**:

* Machine Learning (ML)
* Neural Networks (NN)
* Deep Learning (DL)
* Big Data

---

## **01. AI Scientists**

AI Scientists build software with algorithms that can do tasks that normally require human intelligence.

AI Scientists can be experts in multiple AI disciplines:

* Applied mathematics
* Computational statistics
* Computer Science
* Machine learning
* Deep learning

Some AI Scientists also have significant big data experience:

* Business Intelligence
* Data Base Design
* Data Warehouse Design
* Data Mining
* SQL Queries
* SQL Reporting

### **The Deep Learning Revolution**

The deep learning revolution started around 2010. Since then, Deep Learning has been used to solve many "unsolvable" problems.

**01. Convolutional Neural Networks (CNNs)**

> Deep CNNs such as [ResNeta](https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html) and [Inception](https://www.cv-foundation.org/openaccess/content_cvpr_2015/html/Szegedy_Going_Deeper_With_2015_CVPR_paper.html) have reduced the error rate in the **ImageNet** classification from 25% in 2011 to 5% in 2017.
> 
> **ImageNe**t is an image database organized according to the WordNet hierarchy, in which each node of the hierarchy contains hundreds and thousands of images. ImageNet is a useful resource for researchers, educators, students and everyone else with a passion for pictures.
> 
> **WordNet** is a lexical database of semantic relations between words in 200+ languages. It is organized as a combination of a dictionary and thesaurus, linking words together into semantic relations using synonyms, hyponyms, and meronyms.
> 

**02. Recurrent Neural Networks (RNNs)**

> RNNs are helping create music scores and novel instrument sounds:
> \
> https://magenta.tensorflow.org/demos.

---

## **02. Data in AI**

Up to **80%** of a Machine Learning project is about **Collecting Data**:

* What data is Required?
* What data is Available?
* How to Select the data?
* How to Collect the data?
* How to Clean the data?
* How to Prepare the data?
* How to Use the data?

### **What is Data?**

Data can be many things. With Machine Learning, it is a collection of facts.

| Type | Examples |
| :--- | :--- |
| Numbers | Prices, Dates |
| Measurements | Size, Height, Weight |
| Words | Names, Places |
| Observations | Counting Cars | 
| Descriptions | It is cold |

### **Intelligence Needs Data**

Human intelligence needs data:

* A real estate broker needs data about sold houses to estimate prices.

Artificial Intelligence also needs data:

* A Machine Learning program needs data to estimate prices.

### **Storing Data**

The most common data to collect are **Numbers** and **Measurements**.

Often data are stored in arrays representing the relationship between values.

### **Qualitative Data vs Quantitative Data**

Quantitative data are numerical:

* 55 cars
* 15 meters
* 35 children

Qualitative data are descriptive:

* It is cold
* It is long
* It was fun

### **Sampling Terms**

A **Population** is group of individuals (objects) we want to collect information from.

A **Census** is information about every individual in a population.

A **Sample** is information about a part of the population. (in order to represent all)

* If we wanted to know how many Americans smoke cigarettes, we could ask every person in the US (a census), or we could ask 10 000 people (a sample).

* A census is **Accurate**, but hard to do. A sample is **Inaccurate**, but is easier to do.

### **Random Samples**

In order for a sample to represent a population, it must be collected randomly.

A **Random Sample** is a sample where every member of the population has an equal chance to appear in the sample.

A **Sampling Bias** (Error) occurs when samples are collected in such a way that some individuals are less (or more) likely to be included in the sample.

---

## **03. Data Clusters**

Clusters are collections of data based on similarity.

Data points clustered together in a graph can often be classified into clusters.

In the graph below we can distinguish 3 different clusters:

![clustering](https://i.stack.imgur.com/e2UeU.png)

### **Identifying Clusters**

Clusters can hold a lot of valuable information, but clusters come in all sorts of shapes, so how can we recognize them?

The two main methods are:

* Using Visualization
* Using an Clustering Algorithm

### **Clustering**

Clustering is a type of **Unsupervised Learning**.

Clustering is trying to:

* Collect similar data in groups
* Collect dissimilar data in other groups

There are 4 clustering methods:

**01. Density Method**

> It considers points in a dense regions to have more similarities and differences than points in a lower dense region. The density method has a good accuracy. It also has the ability to merge clusters.
>     
> Two common algorithms are **DBSCAN** and **OPTICS**.

**02. Hierarchical Method**

> It forms the clusters in a tree-type structure. New clusters are formed using previously formed clusters.
> 
> Two common algorithms are **CURE** and **BIRCH**. 

**03. Partitioning Method**

> It partitions the objects into k clusters and each partition forms one cluster.
> 
> One common algorithm is **CLARANS**.

**04. Grid-based Method**

> It formulates the data into a finite number of cells that form a grid-like structure.
> 
> Two common algorithms are **CLIQUE** and **STING**.

### **Correlation Coefficient**

The **Correlation Coefficient** (r) describes the strength and direction of a linear relationship and x/y variables on a scatterplot.

The value of r is always between -1 and +1:

| r | Description | Relationship |
| :---: | :--- | :--- |
| -1.00 | Perfect Downhill | Negative Linear Relationship |
| -0.70 | Strong Downhill | Negative Linear Relationship |
| -0.50 | Moderate Downhill | Negative Linear Relationship |
| -0.30 | Weak Downhill | Negative Linear Relationship |
| 0.00 | - | No Linear Relationship |
| +0.30 | Weak Uphill | Positive Linear Relationship |
| +0.50 | Moderate Uphill | Positive Linear Relationship |
| +0.70 | Strong Uphill | Positive Linear Relationship |
| +1.00 | Perfect Uphill | Positive Linear Relationship |

![Correlation Coefficient Graphs](https://th.bing.com/th/id/OIP.SHXiBZ4wxa3BYpyjam35AgHaFj?pid=ImgDet&rs=1)

---

# **Reference**

The link to the subtopic on w3schools.com: [AI Sciences](https://www.w3schools.com/ai/ai_sciences.asp)