import { FC } from "react";
import { NavLink, useParams } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux/useAppSelector";

import "./styles.sass";

export const Header: FC = () => {
    const params = useParams();
    const projects = useAppSelector((state) => state.projects);
    const project = projects.find((project) => project.projectId === params.id);
    const projectName = project?.projectName;

    return (
        <div className="header">
            {projectName ? (
                <>
                    <NavLink end to="/">
                        <button>Проекты</button>
                    </NavLink>
                    <div className="header-projectName">{projectName}</div>
                </>
            ) : (
                <div className="header-appName">PROJECTS UNDER CONTROL</div>
            )}
        </div>
    );
};
