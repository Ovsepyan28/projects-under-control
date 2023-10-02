import { FC, MouseEventHandler } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";

import { Task as TaskType } from "../../types";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { removeTask } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    task: TaskType;
    index: number;
}

export const Task: FC<Props> = ({ index, task }) => {
    const dispatch = useAppDispatch();

    const onRemoveTask: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        dispatch(removeTask(task.taskId, task.columnId, task.projectId));
    };

    return (
        <Draggable draggableId={task.taskId} index={index}>
            {(provided: DraggableProvided) => (
                <div
                    className="task"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {task.taskTitle}
                    <div>
                        <button onClick={onRemoveTask}>Delete</button>
                    </div>
                </div>
            )}
        </Draggable>
    );
};
