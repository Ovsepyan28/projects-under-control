import { FC, useState } from "react";
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

    const onCreateProject = () => {
        dispatch(addProject(text));
        onClose();
    };

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
                        <button className="createTask-create" onClick={onCreateProject}>
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
                />
            </div>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
