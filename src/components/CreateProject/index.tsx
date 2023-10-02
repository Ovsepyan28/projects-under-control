import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ModalContainer } from "../ModalContainer";
import { PortalContent } from "../PortalContent";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { addProject } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    onClose: () => void;
}

export const CreateProject: FC<Props> = ({ onClose }) => {
    const [text, setText] = useState("");
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const onCreateProject = () => {
        dispatch(addProject(text));
        onClose();
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return createPortal(
        <ModalContainer onClose={onClose}>
            <PortalContent>
                <div className="createProject-header">
                    <h2>Новый проект</h2>
                    <div className="createProject-buttons">
                        <button
                            className="createProject-create"
                            onClick={onCreateProject}
                            disabled={!(text.length > 3)}
                        >
                            Create
                        </button>
                        <button className="createProject-cancel" onClick={onClose}>
                            Cancel
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
            </PortalContent>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
