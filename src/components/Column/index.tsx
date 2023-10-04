import { FC, useCallback, useState } from "react";
import { Droppable, DroppableProvided } from "react-beautiful-dnd";

import { Columns, Id, Tasks } from "../../types";

import { Task } from "../Task";
import { CreateTask } from "../CreateTask";

import "./styles.sass";

interface Props {
    title: string;
    tasks: Tasks;
    columnId: keyof Columns;
    projectId: Id;
}

export const Column: FC<Props> = ({ title, tasks, columnId, projectId }) => {
    const [openModal, setOpenModal] = useState(false);

    const onRefuse = useCallback(() => {
        setOpenModal(false);
    }, []);

    return (
        <div className="column">
            <div className="column-header">
                <div className="column-title">
                    <h3>{title}</h3>
                    <h3 className="column-task-counter">{tasks.length ? `/ ${tasks.length}` : ""}</h3>
                </div>
                <button className="column-new" onClick={() => setOpenModal(true)}>
                    New
                </button>
            </div>
            <Droppable droppableId={columnId}>
                {(provided: DroppableProvided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="tasks-list">
                        {tasks.map((task, index) => (
                            <Task key={task.taskId} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            {openModal && <CreateTask onClose={onRefuse} columnId={columnId} projectId={projectId} />}
        </div>
    );
};
