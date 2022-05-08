# 6889spark
This repository is for the final project for ELEN E-6889 Large Scale Data Stream Processing.      


In this project, we implement how to predict a company's stock price based on sentiment analysis of the streaming social media data related to that company. We choose to use tweet data as the social media data. We obtain tweet data by Twitter API and stock price data by yahoo finance. For sentiment analysis, we set sentiment140 as training data set and use logistic regression training model to obtain sentiment scores. We select random forest Regressor, gradient boosting regressor, XGBoost, and Long Short-Term Memory as machine learning algorithms to predict stock price in future. After all results are stored, users can use our APP written by react.js framework to see predicted stock price and some other statistical graphs.
