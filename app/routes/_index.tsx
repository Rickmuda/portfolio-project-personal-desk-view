// app/routes/index.tsx
import React from "react";
import { Link } from "@remix-run/react"; // Import Link from Remix
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowLeft, faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import styles from "~/styles/desksetup.css";

// Exporting links to add styles
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

// Main function for the desk setup page
const DeskSetup: React.FC = () => {
  return (
    <div className="desk">
      {/* Left arrowhead linking to whiteboard */}
      <Link to="/whiteboard" className="arrow-link left-arrow">
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
      </Link>

      {/* Up arrowhead linking to another page */}
      <Link to="/someOtherPage" className="arrow-link up-arrow">
        <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
      </Link>

      {/* Right arrowhead linking to another page */}
      <Link to="/someOtherPage" className="arrow-link right-arrow">
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      </Link>
<Link to="projects" className="monitor left-monitor"></Link>
<Link to="persfav" className="monitor center-monitor">
  <img src="/images/rickambergen.gif" alt="GIF on Center Screen" className="center-gif" />
</Link>
<Link to="wip" className="monitor right-monitor"></Link>

      {/* Monitor Stand */}
      <div className="monitor-stand"></div>

      {/* Connector lines */}
      <div className="monitor-connector left-connector"></div>
      <div className="monitor-connector right-connector"></div>
    </div>
  );
};

export default DeskSetup;
