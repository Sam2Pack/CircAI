export const predictAssessment = async (formData: any) => {
  const response = await fetch("https://circai.onrender.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
};