# CircAI

AI-Powered Life Cycle Assessment & Circularity Intelligence Platform for the Metals Industry

---

# Overview

CircAI is a web-based sustainability intelligence platform designed to simplify and automate Life Cycle Assessment (LCA) for the metals and materials sector.

The platform combines:

- Artificial Intelligence (AI)
- Machine Learning (ML)
- Circular Economy Analytics
- Lifecycle Impact Modeling
- Sustainability Reporting

to help industries evaluate the environmental performance and circularity potential of metal production systems.

Unlike traditional LCA software that often requires specialized expertise, CircAI provides a streamlined and intuitive interface where users can input production and lifecycle parameters and instantly receive:

- Carbon footprint estimations
- Circularity performance scores
- Sustainability grading
- AI-generated recommendations
- Automated sustainability reports

---

# Problem Statement

Traditional lifecycle assessment workflows are:

- Time-consuming
- Data intensive
- Expensive
- Difficult for non-experts
- Poorly integrated with circular economy metrics

Industries in sectors such as:

- Aluminium
- Copper
- Steel
- Critical minerals
- Battery materials

need faster and more intelligent tools to evaluate sustainability performance while optimizing for recyclability, reuse, and circular resource flows.

CircAI addresses this challenge using AI-driven predictive models trained on sustainability datasets.

---

# Key Features

## AI-Powered Lifecycle Assessment

Predict lifecycle emissions and sustainability performance using machine learning models trained on industrial sustainability datasets.

---

## Carbon Footprint Prediction

Estimate lifecycle greenhouse gas emissions across production, transport, use phase, and end-of-life stages.

Outputs include:

- Total lifecycle emissions
- Environmental impact indicators
- Sustainability insights

---

## Circularity Intelligence

Evaluate the circular economy potential of metal systems through:

- Recycling effectiveness
- Material recovery potential
- Reuse efficiency
- Circularity scoring

---

## Sustainability Grading

Generate an overall sustainability grade based on:

- Carbon intensity
- Circularity performance
- Production methods
- Energy mix
- End-of-life strategies

---

## AI Recommendations

Receive intelligent optimization suggestions such as:

- Cleaner energy alternatives
- Improved recycling pathways
- Reduced transport impacts
- Better end-of-life recovery methods
- Circular manufacturing improvements

---

## Automated Report Generation

Generate downloadable sustainability assessment reports using:

- Python backend
- python-docx reporting engine

Reports include:

- Project details
- Input parameters
- AI predictions
- Sustainability insights
- Circularity analysis
- Recommendations

---

# Technology Stack

## Frontend

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- Recharts

---

## Backend

- Python
- Flask
- Flask-CORS
- Scikit-learn
- Pandas
- NumPy
- Joblib
- python-docx

---

## Machine Learning

The platform uses ML models trained on lifecycle and sustainability datasets to predict:

- Carbon Footprint
- Circularity Score
- Sustainability Grade

Models include:

- Random Forest Regressors
- Random Forest Classifiers
- Data preprocessing pipelines
- Missing value handling
- Categorical encoding

---

# System Architecture

```text
User Input
    ↓
Frontend React Interface
    ↓
Flask API Backend
    ↓
ML Prediction Models
    ↓
AI Sustainability Analysis
    ↓
Results Dashboard + Report Generation
