import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Board } from "../Board";

import { useAppSelector } from "../../hooks/redux/useAppSelector";

import "./styles.sass";

export const Project: FC = () => {
    const navigate = useNavigate();
    const params = useParams();
    const projects = useAppSelector((state) => state.projects);
    const project = projects.find((project) => project.projectId === params.id);

    if (!project) {
        setTimeout(() => navigate("/"), 1000);
    }

    return <div className="project">{project ? <Board project={project} /> : <h1>Что то пошло не так...</h1>}</div>;
};
