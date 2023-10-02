import { FC, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import { Id } from "../../types";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { removeProject } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    name: string;
    url: Id;
    projectId: Id;
}

export const ProjectCard: FC<Props> = ({ name, url, projectId }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onRemoveProject: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        dispatch(removeProject(projectId));
    };

    return (
        <div className="projectCard" onClick={() => navigate(`/projects-under-control/${url}`)}>
            {name}
            <div>
                <button onClick={onRemoveProject}>Delete</button>
            </div>
        </div>
    );
};
