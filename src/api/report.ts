export const downloadReport = async (formData: any) => {

  const response = await fetch(
    "https://circai.onrender.com/generate-report",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Report generation failed");
  }

  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = "CircAI_Report.docx";

  document.body.appendChild(a);

  a.click();

  a.remove();
};