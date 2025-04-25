// app/routes/index.tsx
import React from "react";
<<<<<<< HEAD
import { Link } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import desksetupStyles from "../styles/desksetup.css"; // Import DeskSetup CSS
=======
import styles from "~/styles/DeskSetup.css";
>>>>>>> parent of 0569771 (Pijlen en projecten paginas)

export function links() {
  return [{ rel: "stylesheet", href: desksetupStyles }];
}

const DeskSetup: React.FC = () => {
  return (
    <div className="desk">
      {/* Left monitor */}
      <div className="monitor left-monitor"></div>

<<<<<<< HEAD
      {/* Up arrowhead linking to another page */}
      <Link to="/shelf" className="arrow-link up-arrow">
        <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
      </Link>

      {/* Right arrowhead linking to another page */}
      <Link to="/vinyls" className="arrow-link right-arrow">
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      </Link>
=======
      {/* Center monitor with GIF */}
      <div className="monitor center-monitor">
        <img
          src="/public/images/rickambergen.gif"
          alt="GIF on Center Screen"
          className="center-gif"
        />
      </div>

      {/* Right monitor */}
      <div className="monitor right-monitor"></div>
>>>>>>> parent of 0569771 (Pijlen en projecten paginas)

      <Link to="projects" className="monitor left-monitor"></Link>
      <Link to="persfav" className="monitor center-monitor">
        <img src="/images/rickambergen.gif" alt="GIF on Center Screen" className="center-gif" />
      </Link>
      <Link to="wip" className="monitor right-monitor"></Link>

      <div className="monitor-stand"></div>
<<<<<<< HEAD
=======

      {/* Connector lines, moved outside the monitors */}
>>>>>>> parent of 0569771 (Pijlen en projecten paginas)
      <div className="monitor-connector left-connector"></div>
      <div className="monitor-connector right-connector"></div>

      {/* Arrows */}
      <div className="arrow top-arrow"></div>
      <div className="arrow left-arrow"></div>
    </div>
  );
};

export default DeskSetup;
