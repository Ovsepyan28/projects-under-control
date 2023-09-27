import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.sass";

export interface IProjectCardProps {
    name: string;
}

export const ProjectCard: FC<IProjectCardProps> = ({ name }) => {
    const navigate = useNavigate();

    return (
        <div className="projectCard" onClick={() => navigate(`/test`)}>
            {name}
        </div>
    );
};
