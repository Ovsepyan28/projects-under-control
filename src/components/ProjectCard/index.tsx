import { FC, MouseEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Id } from "../../types";

import { ConfirmRemove } from "../ConfirmRemove";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { removeProject } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    name: string;
    url: Id;
    projectId: Id;
}

export const ProjectCard: FC<Props> = ({ name, url, projectId }) => {
    const [openConfirm, setOpenConfirm] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onRemoveProject: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setOpenConfirm(true);
    };

    const onRefuseConfirm = useCallback(() => {
        setOpenConfirm(false);
    }, []);

    return (
        <div className="projectCard" onClick={() => navigate(`/${url}`)}>
            {name}
            <div>
                <button onClick={onRemoveProject}>Delete</button>
            </div>
            {openConfirm && (
                <ConfirmRemove onClose={onRefuseConfirm} onRemove={() => dispatch(removeProject(projectId))} />
            )}
        </div>
    );
};
