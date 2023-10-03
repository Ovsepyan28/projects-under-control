import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ModalContainer } from "../ModalContainer";
import { PortalContent } from "../PortalContent";

import { Project } from "../../types";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { addProject, setProject } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    onClose: () => void;
    project?: Project;
}

export const CreateProject: FC<Props> = ({ onClose, project = null }) => {
    const initialProjectName = project ? project.projectName : "";
    const [text, setText] = useState(initialProjectName);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (project) {
            onEditProject(project);
        } else {
            onCreateProject();
        }
    };

    const onCreateProject = () => {
        dispatch(addProject(text));
        onClose();
    };

    const onEditProject = (project: Project): void => {
        project.projectName = text;
        dispatch(setProject(project));
        onClose();
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return createPortal(
        <ModalContainer onClose={onClose}>
            <PortalContent maxWidth={700}>
                <div className="createProject">
                    <div className="createProject-header">
                        <h2>{initialProjectName ? "Редактирование" : "Новый проект"}</h2>
                        <div className="createProject-buttons">
                            <button className="createProject-cancel" onClick={onClose}>
                                Cancel
                            </button>
                            <button
                                className="createProject-create"
                                onClick={handleSubmit}
                                disabled={!(text.length > 3)}
                            >
                                {initialProjectName ? "Edit" : "Create"}
                            </button>
                        </div>
                    </div>
                    <input
                        className="createProject-input"
                        value={text}
                        placeholder="Наименование проекта"
                        onChange={(e) => setText(e.target.value)}
                        ref={inputRef}
                    />
                </div>
            </PortalContent>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
