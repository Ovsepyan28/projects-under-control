import { FC, MouseEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Project } from "../../types";

import { ConfirmRemove } from "../ConfirmRemove";
import { CreateProject } from "../CreateProject";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { removeProject } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    project: Project;
    progress: string;
}

export const ProjectCard: FC<Props> = ({ project, progress }) => {
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onRemoveProject: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setOpenConfirm(true);
    };

    const onRefuseConfirm = useCallback(() => {
        setOpenConfirm(false);
    }, []);

    const onEditProject: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setOpenEdit(true);
    };

    const onRefuseEdit = useCallback(() => {
        setOpenEdit(false);
    }, []);

    return (
        <div className="projectCard" onClick={() => navigate(`/${project.projectId}`)}>
            <div className="projectCard-title">
                <div className="projectCard-name">{project.projectName}</div>
                <div>{progress}</div>
            </div>
            <div className="projectCard-buttons">
                <button className="projectCard-edit " onClick={onEditProject}>
                    Edit
                </button>
                <button className="projectCard-delete" onClick={onRemoveProject}>
                    Delete
                </button>
            </div>
            {openConfirm && (
                <ConfirmRemove onClose={onRefuseConfirm} onRemove={() => dispatch(removeProject(project.projectId))} />
            )}
            {openEdit && <CreateProject onClose={onRefuseEdit} project={project} />}
        </div>
    );
};
