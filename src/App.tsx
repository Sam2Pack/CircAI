import { Routes, Route } from "react-router-dom";

import Assessment from "./pages/Assessment";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Assessment />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;

