from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

import pandas as pd
import joblib

from report_generator import generate_report

app = Flask(__name__)
CORS(app)

# LOAD MODELS
carbon_model = joblib.load('models/carbon_model.pkl')
circularity_model = joblib.load('models/circularity_model.pkl')
grade_model = joblib.load('models/grade_model.pkl')


# PREDICTION ROUTE
@app.route('/predict', methods=['POST'])
def predict():

    data = request.json

    input_df = pd.DataFrame([{
        "metal_type": data["metal_type"],
        "energy_mix": data["energy_mix"],
        "production_route": data["production_route"],
        "transport_distance_km": data["transport_distance_km"],
        "product_lifespan_years": data["product_lifespan_years"],
        "end_of_life_treatment": data["end_of_life_treatment"]
    }])

    carbon = carbon_model.predict(input_df)[0]
    circularity = circularity_model.predict(input_df)[0]
    grade = grade_model.predict(input_df)[0]

    return jsonify({
        "carbon_footprint": round(float(carbon), 2),
        "circularity_score": round(float(circularity), 2),
        "sustainability_grade": grade
    })


# REPORT GENERATION ROUTE
@app.route('/generate-report', methods=['POST'])
def generate_docx_report():

    data = request.json

    input_df = pd.DataFrame([{
        "metal_type": data["metal_type"],
        "energy_mix": data["energy_mix"],
        "production_route": data["production_route"],
        "transport_distance_km": data["transport_distance_km"],
        "product_lifespan_years": data["product_lifespan_years"],
        "end_of_life_treatment": data["end_of_life_treatment"]
    }])

    carbon = carbon_model.predict(input_df)[0]
    circularity = circularity_model.predict(input_df)[0]
    grade = grade_model.predict(input_df)[0]

    predictions = {
        "carbon_footprint": round(float(carbon), 2),
        "circularity_score": round(float(circularity), 2),
        "sustainability_grade": grade
    }

    file_path = generate_report(data, predictions)

    return send_file(
        file_path,
        as_attachment=True
    )


if __name__ == '__main__':
    app.run(debug=True)