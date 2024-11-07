import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeskSetup from "./routes/_index"; // Main DeskSetup component
import Whiteboard from "./routes/whiteboard"; // Whiteboard component
import Shelf from "./routes/shelf"; // Shelf component
import Vinyls from "./routes/vinyls"; // Vinyls component
import Projects from "./routes/projects"; // Projects component
import PersFav from "./routes/persfav"; // Personal Favorites component
import WIP from "./routes/wip"; // Work in Progress component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeskSetup />} /> {/* Main DeskSetup route */}
        <Route path="/whiteboard" element={<Whiteboard />} /> {/* Whiteboard route */}
        <Route path="/shelf" element={<Shelf />} /> {/* Shelf route */}
        <Route path="/vinyls" element={<Vinyls />} /> {/* Vinyls route */}
        <Route path="/projects" element={<Projects />} /> {/* Projects route */}
        <Route path="/persfav" element={<PersFav />} /> {/* Personal Favorites route */}
        <Route path="/wip" element={<WIP />} /> {/* Work in Progress route */}
      </Routes>
    </Router>
  );
};

export default App;
