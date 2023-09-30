import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Id } from "../../types";

import "./styles.sass";

interface Props {
    name: string;
    url: Id;
}

export const ProjectCard: FC<Props> = ({ name, url }) => {
    const navigate = useNavigate();

    return (
        <div className="projectCard" onClick={() => navigate(`/${url}`)}>
            {name}
        </div>
    );
};
