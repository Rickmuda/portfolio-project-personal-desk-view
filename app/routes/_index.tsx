// app/routes/index.tsx
import React from "react";
import styles from "~/styles/DeskSetup.css";

// Exporting links to add styles
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

// Main function for the desk setup page
const DeskSetup: React.FC = () => {
  return (
    <div className="desk">
      {/* Left monitor */}
      <div className="monitor left-monitor"></div>

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

      {/* Monitor Stand */}
      <div className="monitor-stand"></div>

      {/* Connector lines, moved outside the monitors */}
      <div className="monitor-connector left-connector"></div>
      <div className="monitor-connector right-connector"></div>

      {/* Arrows */}
      <div className="arrow top-arrow"></div>
      <div className="arrow left-arrow"></div>
    </div>
  );
};

export default DeskSetup;
