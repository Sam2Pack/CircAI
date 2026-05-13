import pandas as pd
import joblib

import os
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import RandomForestClassifier

# LOAD DATASET
df = pd.read_csv("circai_large_ml_dataset_india.csv")

df=df.dropna(subset=['carbon_footprint_tCO2e',
    'circularity_score',
    'sustainability_grade'
])

# INPUT FEATURES (MATCHING YOUR UI)
features = [
    'metal_type',
    'energy_mix',
    'production_route',
    'transport_distance_km',
    'product_lifespan_years',
    'end_of_life_treatment'
]

X = df[features]

# TARGETS
y_carbon = df['carbon_footprint_tCO2e']
y_circularity = df['circularity_score']
y_grade = df['sustainability_grade']

# FEATURE TYPES
categorical_features = [
    'metal_type',
    'energy_mix',
    'production_route',
    'end_of_life_treatment'
]

numerical_features = [
    'transport_distance_km',
    'product_lifespan_years'
]

# PREPROCESSING
numeric_transformer = Pipeline(
    steps=[
        ('imputer', SimpleImputer(strategy='median'))
    ]
)

categorical_transformer = Pipeline(
    steps=[
        ('imputer', SimpleImputer(strategy='most_frequent')),
        ('encoder', OneHotEncoder(handle_unknown='ignore'))
    ]
)

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)
    ]
)

# SPLIT
X_train, X_test, yc_train, yc_test = train_test_split(
    X,
    y_carbon,
    test_size=0.2,
    random_state=42
)

_, _, ycir_train, ycir_test = train_test_split(
    X,
    y_circularity,
    test_size=0.2,
    random_state=42
)

_, _, yg_train, yg_test = train_test_split(
    X,
    y_grade,
    test_size=0.2,
    random_state=42
)

# CARBON MODEL
carbon_model = Pipeline([
    ('preprocessor', preprocessor),
    ('model', RandomForestRegressor(
        n_estimators=10,
        random_state=42
    ))
])

carbon_model.fit(X_train, yc_train)

# CIRCULARITY MODEL
circularity_model = Pipeline([
    ('preprocessor', preprocessor),
    ('model', RandomForestRegressor(
        n_estimators=10,
        random_state=42
    ))
])

circularity_model.fit(X_train, ycir_train)

# GRADE MODEL
grade_model = Pipeline([
    ('preprocessor', preprocessor),
    ('model', RandomForestClassifier(
        n_estimators=10,
        random_state=42
    ))
])

grade_model.fit(X_train, yg_train)

os.makedirs('models', exist_ok=True)
# SAVE MODELS
joblib.dump(carbon_model, 'models/carbon_model.pkl')
joblib.dump(circularity_model, 'models/circularity_model.pkl')
joblib.dump(grade_model, 'models/grade_model.pkl')

print("Models trained and saved")