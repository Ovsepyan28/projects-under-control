import { FC, KeyboardEventHandler, useState } from "react";
import { createPortal } from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import moment from "moment";

import { ModalContainer } from "../ModalContainer";
import { PortalContent } from "../PortalContent";

import { Subtasks, Task } from "../../types";

import { getPriority } from "../../utils/getPriority";
import { getDuration } from "../../utils/getDuration";
import { getFormattedDays } from "../../utils/getFormattedDays";
import { getStatus } from "../../utils/getStatus";

import "./styles.sass";

interface Props {
    onClose: () => void;
    task: Task;
}

export const FullTask: FC<Props> = ({ onClose, task }) => {
    const [subtasks, setSubtasks] = useState<Subtasks>(task.subtasks);
    const [text, setText] = useState<string>("");

    const { handleSubmit, register } = useForm<Record<string, boolean>>();

    const onSubmit: SubmitHandler<Record<string, boolean>> = (data) => console.log(data);

    const onCreateSubtask = () => {
        if (text.trim().length < 4) return;
        setSubtasks([...subtasks, { content: text.trim(), subtaskId: uuid(), isDone: false }]);
        setText("");
    };

    const onEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.code === "NumpadEnter" && text.trim().length > 3) {
            onCreateSubtask();
        }
    };

    return createPortal(
        <ModalContainer onClose={onClose}>
            <PortalContent maxWidth={700}>
                <div className="fullTask">
                    <div className="fullTask_header">
                        <h2>{task.taskTitle}</h2>
                        <div>
                            <button className="fullTask_button_cancel" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                    <div className="fullTask_scroll">
                        <div className="summary">
                            <div className="summary_title">Общая информация по задаче</div>
                            <div>Номер задачи - {task.taskNumber}</div>
                            <div>Текущий статус - {getStatus(task.columnId)}</div>
                            <div>Приоритет {getPriority(task.taskPriority)}</div>
                            <div>Дата создания - {moment(task.taskCreateDate).format("DD.MM.YYYY")}</div>
                            {task.taskFinishDate && (
                                <div>Дата завершения - {moment(task.taskFinishDate).format("DD.MM.YYYY")}</div>
                            )}
                            <div>
                                В работе{" "}
                                {getFormattedDays(getDuration(task.taskCreateDate, task.taskFinishDate || Date.now()))}
                            </div>
                        </div>
                        {task.content && (
                            <div className="description">
                                <div className="description_title">Описание задачи</div>
                                <div className="description_content">{task.content}</div>
                            </div>
                        )}
                        {/* <div className="subtasks">
                            <div className="subtasks_title">Подзадачи</div>
                            <div className="subtasks_input">
                                <input
                                    className="createSubtask_input"
                                    value={text}
                                    placeholder="Наименование подзадачи"
                                    onChange={(e) => setText(e.target.value)}
                                    onKeyDown={(e) => onEnter(e)}
                                />
                                <button
                                    className="createSubtask_create"
                                    onClick={onCreateSubtask}
                                    disabled={!(text.length > 3)}
                                >
                                    Create
                                </button>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="subtasks_form">
                                {subtasks.map((subtask, index) => (
                                    <label key={subtask.subtaskId} className="subtasks_form_item">
                                        <input
                                            type="checkbox"
                                            {...register(index.toString(), {})}
                                            defaultChecked={subtask.isDone}
                                        />
                                        {subtask.content}
                                    </label>
                                ))}
                            </form>
                        </div> */}
                    </div>
                </div>
            </PortalContent>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
