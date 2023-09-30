import { FC, useState } from "react";
import { createPortal } from "react-dom";

import { Board, Id } from "../../types";

import { ModalContainer } from "../ModalContainer";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { addTask } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    projectId: Id;
    columnId: keyof Board;
    onClose: () => void;
}

export const CreateTask: FC<Props> = ({ onClose, columnId, projectId }) => {
    const [text, setText] = useState("");
    const dispatch = useAppDispatch();

    const onCreateTask = () => {
        dispatch(addTask(columnId, projectId, text));
        onClose();
    };

    return createPortal(
        <ModalContainer>
            <div className="createTask">
                <div className="createTask-header">
                    <h2>Новая задача</h2>
                    <div className="createTask-buttons">
                        <button className="createTask-create" onClick={onCreateTask}>
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
                    placeholder="Наименование задачи"
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
