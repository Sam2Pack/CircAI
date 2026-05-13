import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import About from "./pages/About";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/results" element={<Results />} />
      <Route path="/about" element={<About />} />
      <Route path="/index" element={<Index />} />
    </Routes>
  );
}

export default App;
