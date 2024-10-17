import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeskSetup from "./routes/_index"; // Main DeskSetup component
import Whiteboard from "./routes/whiteboard"; // Whiteboard component
import Shelf from "./routes/shelf"; // Shelf component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeskSetup />} /> {/* Main DeskSetup route */}
        <Route path="/whiteboard" element={<Whiteboard />} /> {/* Whiteboard route */}
        <Route path="/shelf" element={<Shelf />} /> {/* Shelf route */}
      </Routes>
    </Router>
  );
};

export default App;
