import { FC } from "react";
import { createPortal } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { Board, CreateTaskFormValues, Id, Task } from "../../types";

import { ModalContainer } from "../ModalContainer";
import { PortalContent } from "../PortalContent";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { addTask, setTask } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    projectId: Id;
    columnId: keyof Board;
    task?: Task;
    onClose: () => void;
}

export const CreateTask: FC<Props> = ({ onClose, columnId, projectId, task = null }) => {
    const initial: CreateTaskFormValues = task
        ? { taskTitle: task.taskTitle, taskPriority: task.taskPriority, content: task.content }
        : { taskTitle: "", taskPriority: "medium", content: "" };

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<CreateTaskFormValues>({
        defaultValues: initial,
    });

    const dispatch = useAppDispatch();

    const onHandleSubmit: SubmitHandler<CreateTaskFormValues> = (data) => {
        if (task) {
            dispatch(setTask(columnId, projectId, data.taskTitle, data.content || "", data.taskPriority, task.taskId));
            onClose();
        } else {
            dispatch(addTask(columnId, projectId, data.taskTitle, data.content || "", data.taskPriority));
            onClose();
        }
    };

    return createPortal(
        <ModalContainer onClose={onClose}>
            <PortalContent maxWidth={700}>
                <div className="createTask">
                    <div className="createTask-header">
                        <h2>{task ? "Редактирование" : "Новая задача"}</h2>
                        <div className="createTask-buttons">
                            <button className="createTask-cancel" onClick={onClose}>
                                Cancel
                            </button>
                            <button className="createTask-create" onClick={handleSubmit(onHandleSubmit)}>
                                {task ? "Save" : "Create"}
                            </button>
                        </div>
                    </div>
                    <form className="createTask-form">
                        <div className="formTitle">
                            <input
                                {...register("taskTitle", { required: true, minLength: 4 })}
                                placeholder="Заголовок задачи"
                                className="formItemInput"
                                aria-invalid={errors.taskTitle ? "true" : "false"}
                            />
                            {errors.taskTitle?.type === "required" && (
                                <div className="formError">Обязательное поле</div>
                            )}
                            {errors.taskTitle?.type === "minLength" && (
                                <div className="formError">Длина заголовка не менее 4 символов</div>
                            )}
                        </div>
                        <textarea {...register("content")} placeholder="Описание задачи" className="formContent" />
                        <div className="formPriority">
                            Приоритер
                            <label className="priorityItem">
                                <input
                                    {...register("taskPriority", { required: true })}
                                    type="radio"
                                    value="low"
                                    id="test"
                                />
                                Low
                            </label>
                            <label className="priorityItem">
                                <input
                                    {...register("taskPriority", { required: true })}
                                    type="radio"
                                    value="medium"
                                    defaultChecked
                                />
                                Medium
                            </label>
                            <label className="priorityItem">
                                <input {...register("taskPriority", { required: true })} type="radio" value="high" />
                                High
                            </label>
                        </div>
                    </form>
                </div>
            </PortalContent>
        </ModalContainer>,
        document.getElementById("modalContainer") || document.body
    );
};
