import { FC, useCallback, useState } from "react";

import { ProjectCard } from "../ProjectCard";

import { CreateProject } from "../CreateProject";

import { useAppSelector } from "../../hooks/redux/useAppSelector";

import "./styles.sass";

export const Projects: FC = () => {
    const projects = useAppSelector((state) => state);
    const [openModal, setOpenModal] = useState(false);

    const onRefuse = useCallback(() => {
        setOpenModal(false);
    }, []);

    return (
        <div className="projects">
            <div className="projectList">
                <div className="projectList-header">
                    <h2>Ваши проекты</h2>
                    <button className="projectList-new" onClick={() => setOpenModal(true)}>
                        New
                    </button>
                </div>
                {projects.projects.map((project) => (
                    <ProjectCard name={project.projectName} key={project.projectId} url={project.projectId} />
                ))}
                {openModal && <CreateProject onClose={onRefuse} />}
            </div>
        </div>
    );
};
