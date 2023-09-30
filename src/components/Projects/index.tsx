import { FC } from "react";

import { ProjectCard } from "../ProjectCard";

import { useAppSelector } from "../../hooks/redux/useAppSelector";

import "./styles.sass";
export const Projects: FC = () => {
    const projects = useAppSelector((state) => state);
    return (
        <div className="projects">
            <div className="projectList">
                <div className="projectList-header">
                    <h2>Ваши проекты</h2>
                    <button className="projectList-new" onClick={() => console.log("новый проект")}>
                        New
                    </button>
                </div>
                {projects.projects.map((project) => (
                    <ProjectCard name={project.projectName} key={project.projectId} url={project.projectId} />
                ))}
            </div>
        </div>
    );
};
