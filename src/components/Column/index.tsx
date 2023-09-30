import { FC } from "react";
import { Droppable, DroppableProvided } from "react-beautiful-dnd";

import { Tasks } from "../../types";

import { Task } from "../Task";

import "./styles.sass";

interface Props {
    title: string;
    tasks: Tasks;
    columnId: string;
}

export const Column: FC<Props> = ({ title, tasks, columnId }) => {
    return (
        <div className="column">
            <h2>{title}</h2>
            <Droppable droppableId={columnId}>
                {(provided: DroppableProvided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="tasks-list">
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};
