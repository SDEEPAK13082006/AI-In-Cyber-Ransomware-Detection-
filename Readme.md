# Ransomware Detection Using Machine Learning (AI with Cybersecurity)

## Project Overview

This project presents an **AI-based ransomware detection system** that uses Machine Learning and Deep Learning techniques to identify ransomware attacks based on system behavior, memory features, and executable characteristics. The objective is to improve cybersecurity by detecting malicious software before it encrypts user data.

The proposed system employs a **Hybrid SVM + LSTM model**, where Support Vector Machine (SVM) classifies structured features while Long Short-Term Memory (LSTM) learns behavioral patterns from sequential data. This combination improves detection accuracy for both known ransomware families and previously unseen attacks.

---

## Objectives

* Detect ransomware using Machine Learning algorithms.
* Improve cybersecurity through intelligent threat detection.
* Compare the performance of different ML models.
* Build a hybrid SVM + LSTM detection model.
* Develop a user-friendly web application for prediction.
* Evaluate the model using standard performance metrics.

---

## Features

* Data preprocessing and feature engineering
* Memory-based ransomware detection
* Static malware analysis
* Hybrid Machine Learning and Deep Learning model
* Real-time prediction support
* Flask-based web application
* Performance visualization
* Model evaluation using multiple metrics

---

## Project Structure

```text
Ransomware-Detection-ML/
│
├── datasets/
├── notebooks/
├── src/
├── saved_models/
├── web_app/
├── api/
├── reports/
├── results/
├── tests/
├── docs/
├── requirements.txt
├── README.md
└── LICENSE
```

---

## Technologies Used

* Python 3.11+
* Scikit-learn
* TensorFlow / Keras
* Pandas
* NumPy
* Matplotlib
* Flask
* Joblib
* Git & GitHub

---

## Machine Learning Algorithms

* Support Vector Machine (SVM)
* Random Forest
* XGBoost
* Long Short-Term Memory (LSTM)
* Hybrid SVM + LSTM

---

## Datasets

The project can be trained using one or more of the following datasets:

* CIC-MalMem-2022
* EMBER Dataset
* Ransomware Dataset 2024

---

## Workflow

```text
Dataset Collection
        │
        ▼
Data Preprocessing
        │
        ▼
Feature Engineering
        │
        ▼
Train/Test Split
        │
        ▼
SVM Model
        │
        ├──────────────┐
        ▼              │
LSTM Model             │
        │              │
        └──────► Hybrid Model
                     │
                     ▼
             Model Evaluation
                     │
                     ▼
              Web Application
                     │
                     ▼
             Ransomware Prediction
```

---

## Evaluation Metrics

The project evaluates model performance using:

* Accuracy
* Precision
* Recall
* F1-Score
* ROC-AUC
* Confusion Matrix

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/Ransomware-Detection-ML.git
cd Ransomware-Detection-ML
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python web_app/app.py
```

Open your browser and visit:

```text
http://127.0.0.1:5000
```

---

## Expected Output

The system predicts whether an input sample is:

* Benign
* Ransomware

It also displays:

* Prediction confidence
* Detection result
* Performance metrics
* Visual charts

---

## Future Enhancements

* Zero-day ransomware detection
* Real-time system monitoring
* Explainable AI (XAI)
* Cloud deployment
* REST API integration
* Docker containerization
* Threat intelligence integration

---

## Author

**Bharath**

Bachelor of Engineering (Artificial Intelligence and Data Science)

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

* Canadian Institute for Cybersecurity (CIC)
* EMBER Dataset Contributors
* Kaggle Community
* Open-source Machine Learning and Cybersecurity communities

