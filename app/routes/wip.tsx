// app/routes/projecten/projects.tsx
import React from "react";
import globalStyles from "../styles/global.css"; // Import Global CSS

export const links = () => [{ rel: "stylesheet", href: globalStyles }];

const Projects: React.FC = () => {
  return <div className="section">Projects Page</div>;
};

export default Projects;
