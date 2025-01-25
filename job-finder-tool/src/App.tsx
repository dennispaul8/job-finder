import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from "./components/JobList";
import ApplicationTracker from "./pages/ApplicationTracker";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/applications" element={<ApplicationTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
