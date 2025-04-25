<<<<<<< HEAD
// app/routes/projects.tsx
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";

import projectsStyles from "../styles/projects.css"; // Import Projects CSS

export const links = () => [{ rel: "stylesheet", href: projectsStyles }];

const prisma = new PrismaClient();

export const loader: LoaderFunction = async () => {
  const projects = await prisma.project.findMany();
  return { projects };
=======
import React from "react";

// Exporting a simple Projects page
const Projects: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', color: '#fff', backgroundColor: '#282c34', height: '100vh' }}>
      <h1>Projects Page</h1>
      <p>Welcome to the Projects page! Here you will find details of various projects.</p>
    </div>
  );
>>>>>>> parent of 0569771 (Pijlen en projecten paginas)
};

type LoaderData = {
  projects: {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    url: string;
  }[];
};

export default function Projects() {
  const { projects } = useLoaderData<LoaderData>();

  return (
    <div>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
