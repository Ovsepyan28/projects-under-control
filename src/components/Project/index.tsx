import { FC } from "react";
import { useParams } from "react-router-dom";

import { Board } from "../Board";

import { useAppSelector } from "../../hooks/redux/useAppSelector";

import "./styles.sass";

export const Project: FC = () => {
    const params = useParams();
    const projects = useAppSelector((state) => state.projects);
    const project = projects.find((project) => project.projectId === params.id);
    return <div className="project">{project && <Board project={project} />}</div>;
};
