import React from "react";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WorkFlowDynamics from "./components/WorkFlowDynamics";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/workflow-dynamics" element={<WorkFlowDynamics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
