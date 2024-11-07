// app/routes/index.tsx
import React from "react";
import { Link } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import desksetupStyles from "../styles/desksetup.css"; // Import DeskSetup CSS

export function links() {
  return [{ rel: "stylesheet", href: desksetupStyles }];
}

const DeskSetup: React.FC = () => {
  return (
    <div className="desk">
      {/* Left arrowhead linking to whiteboard */}
      <Link to="/whiteboard" className="arrow-link left-arrow">
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
      </Link>

      {/* Up arrowhead linking to another page */}
      <Link to="/shelf" className="arrow-link up-arrow">
        <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
      </Link>

      {/* Right arrowhead linking to another page */}
      <Link to="/vinyls" className="arrow-link right-arrow">
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      </Link>

      <Link to="projects" className="monitor left-monitor"></Link>
      <Link to="persfav" className="monitor center-monitor">
        <img src="/images/rickambergen.gif" alt="GIF on Center Screen" className="center-gif" />
      </Link>
      <Link to="wip" className="monitor right-monitor"></Link>

      <div className="monitor-stand"></div>
      <div className="monitor-connector left-connector"></div>
      <div className="monitor-connector right-connector"></div>
    </div>
  );
};

export default DeskSetup;
