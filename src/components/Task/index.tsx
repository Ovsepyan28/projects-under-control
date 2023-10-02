import { FC, MouseEventHandler, useCallback, useState } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";

import { Task as TaskType } from "../../types";

import { FullTask } from "../FullTask";
import { ConfirmRemove } from "../ConfirmRemove";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { removeTask } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    task: TaskType;
    index: number;
}

export const Task: FC<Props> = ({ index, task }) => {
    const [openFull, setOpenFull] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const dispatch = useAppDispatch();

    const onRemoveTask: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setOpenConfirm(true);
    };

    const onRefuseFull = useCallback(() => {
        setOpenFull(false);
    }, []);

    const onRefuseConfirm = useCallback(() => {
        setOpenConfirm(false);
    }, []);

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
                        {task.taskTitle}
                        <div className="task-buttons">
                            <button className="button edit" onClick={(e) => e.stopPropagation()}>
                                Edit
                            </button>
                            <button className="button delete" onClick={onRemoveTask}>
                                Del
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
        </>
    );
};
