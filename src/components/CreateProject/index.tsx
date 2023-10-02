import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ModalContainer } from "../ModalContainer";

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
            <div
                className="createTask"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="createTask-header">
                    <h2>Новый проект</h2>
                    <div className="createTask-buttons">
                        <button className="createTask-create" onClick={onCreateProject} disabled={!(text.length > 3)}>
                            Создать
                        </button>
                        <button className="createTask-cancel" onClick={onClose}>
                            Отмена
                        </button>
                    </div>
                </div>
                <input
                    className="input"
                    value={text}
                    placeholder="Наименование проекта"
                    onChange={(e) => setText(e.target.value)}
                    ref={inputRef}
                />
            </div>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
