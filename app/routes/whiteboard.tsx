// app/routes/whiteboard.tsx
import React from "react";
import globalStyles from "../styles/global.css"; // Import Global CSS

export const links = () => [{ rel: "stylesheet", href: globalStyles }];

const Whiteboard: React.FC = () => {
  return <div className="section">Welcome to the Whiteboard page!</div>;
};

export default Whiteboard;
