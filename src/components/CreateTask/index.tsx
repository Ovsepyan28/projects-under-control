import { FC, useEffect, useRef, useState } from "react";
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
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const onCreateTask = () => {
        dispatch(addTask(columnId, projectId, title));
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
                    <h2>Новая задача</h2>
                    <div className="createTask-buttons">
                        <button className="createTask-create" onClick={onCreateTask} disabled={!(title.length > 3)}>
                            Создать
                        </button>
                        <button className="createTask-cancel" onClick={onClose}>
                            Отмена
                        </button>
                    </div>
                </div>
                <input
                    className="input"
                    value={title}
                    placeholder="Наименование задачи"
                    onChange={(e) => setTitle(e.target.value)}
                    ref={inputRef}
                />
            </div>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
