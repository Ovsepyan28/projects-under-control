import { FC, MouseEventHandler, useCallback, useState } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import cn from "classnames";

import { Task as TaskType } from "../../types";

import { FullTask } from "../FullTask";
import { ConfirmRemove } from "../ConfirmRemove";
import { CreateTask } from "../CreateTask";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { removeTask } from "../../redux/reducers/projects/actions";
import { getSubtasksCount } from "../../utils/getSubtasksCount";

import "./styles.sass";

interface Props {
    task: TaskType;
    index: number;
}

export const Task: FC<Props> = ({ index, task }) => {
    const [openFull, setOpenFull] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const dispatch = useAppDispatch();

    const onRemoveTask: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setOpenConfirm(true);
    };

    const onRefuseFull = useCallback(() => {
        setOpenFull(false);
    }, []);

    const onEditTask: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setOpenEdit(true);
    };

    const onRefuseEdit = useCallback(() => {
        setOpenEdit(false);
    }, []);

    const onRefuseConfirm = useCallback(() => {
        setOpenConfirm(false);
    }, []);

    const priorityMap = {
        low: "Low",
        medium: "Medium",
        high: "High",
    };

    return (
        <>
            <Draggable draggableId={task.taskId} index={index}>
                {(provided: DraggableProvided) => (
                    <div
                        className="task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => setOpenFull(true)}
                    >
                        <div className="taskInfo">
                            <div className="taskTitle">
                                №{task.taskNumber} - {task.taskTitle}
                            </div>
                            <div className="taskProperties">
                                <div className={cn("taskPriority", task.taskPriority)}>
                                    {priorityMap[task.taskPriority]}
                                </div>
                                <div className="subtaskCounter">{getSubtasksCount(task)}</div>
                            </div>
                        </div>
                        <div className="task-buttons">
                            <button className="edit" onClick={onEditTask}>
                                Edit
                            </button>
                            <button className="delete" onClick={onRemoveTask}>
                                Delete
                            </button>
                        </div>
                    </div>
                )}
            </Draggable>
            {openFull && <FullTask onClose={onRefuseFull} />}
            {openConfirm && (
                <ConfirmRemove
                    onClose={onRefuseConfirm}
                    onRemove={() => dispatch(removeTask(task.taskId, task.columnId, task.projectId))}
                />
            )}
            {openEdit && (
                <CreateTask onClose={onRefuseEdit} columnId={task.columnId} projectId={task.projectId} task={task} />
            )}
        </>
    );
};
