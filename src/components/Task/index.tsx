import { FC } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";

import { Task as TaskType } from "../../types";

import "./styles.sass";

interface Props {
    task: TaskType;
    index: number;
}

export const Task: FC<Props> = ({ index, task }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided: DraggableProvided) => (
                <div
                    className="task"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {task.content}
                </div>
            )}
        </Draggable>
    );
};
