import { FC, useCallback, useState } from "react";

import { ProjectCard } from "../ProjectCard";
import { CreateProject } from "../CreateProject";

import { useAppSelector } from "../../hooks/redux/useAppSelector";
import { getProgress } from "../../utils/getProgress";

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
                    <div className="projectList-title">
                        <h2>Ваши проекты</h2>
                        <h2 className="projectList-counter">
                            {projects.projects.length ? `/ ${projects.projects.length}` : ""}
                        </h2>
                    </div>
                    <button className="projectList-new" onClick={() => setOpenModal(true)}>
                        New
                    </button>
                </div>
                {projects.projects.map((project) => (
                    <ProjectCard project={project} key={project.projectId} progress={getProgress(project)} />
                ))}
                {openModal && <CreateProject onClose={onRefuse} />}
            </div>
        </div>
    );
};
