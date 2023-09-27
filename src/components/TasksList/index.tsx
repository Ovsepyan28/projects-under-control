import { FC } from "react";

import "./styles.sass";
import { Task } from "../Project";
import { Tasks } from "../Tasks";

export interface ITasksListProps {
    type: "queue" | "inProgress" | "done";
    tasks: Task[];
}

const listNames = { queue: "В очереди", inProgress: "В процессе", done: "Выполнено" };

export const TasksList: FC<ITasksListProps> = ({ type, tasks }) => {
    const tasksList = tasks.map((task) => <Tasks name={task.name} key={task.id} />);

    return (
        <div className="tasksList">
            <div className="tasksList-header">{listNames[type]}</div>
            <div className="tasks">{tasksList}</div>
        </div>
    );
};
