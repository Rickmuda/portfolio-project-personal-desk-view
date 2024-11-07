// app/routes/vinyls.tsx
import React from "react";
import globalStyles from "../styles/global.css"; // Import Global CSS

export const links = () => [{ rel: "stylesheet", href: globalStyles }];

const Vinyls: React.FC = () => {
  return <div className="section">Welcome to the Vinyls page!</div>;
};

export default Vinyls;
