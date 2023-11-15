import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Report from "./Report";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report/:userId" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
