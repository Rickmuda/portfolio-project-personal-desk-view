import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";

import projectsStyles from "../styles/projects.css"; // Import Projects CSS

export const links = () => [{ rel: "stylesheet", href: projectsStyles }];

const prisma = new PrismaClient();

export const loader: LoaderFunction = async () => {
  const projects = await prisma.project.findMany();
  return { projects };
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
