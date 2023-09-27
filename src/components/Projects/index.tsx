import { FC } from "react";

import { ProjectCard } from "../ProjectCard";

import "./styles.sass";

const fakeProjects = ["Постройка корабля", "Постройка самолета"];

const projectsList = fakeProjects.map((project) => <ProjectCard name={project} key={project} />);

export const Projects: FC = () => {
    return <div className="projects">{projectsList}</div>;
};
