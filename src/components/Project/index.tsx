import { FC } from "react";

import { TasksList } from "../TasksList";

import "./styles.sass";

export type Task = {
    id: number;
    name: string;
    status: "queue" | "inProgress" | "done";
};

const fakeProject: { name: string; tasks: Task[] } = {
    name: "Построить корабль",
    tasks: [
        { id: 1, name: "Сделать двигатель", status: "queue" },
        { id: 2, name: "Сделать борта", status: "done" },
        { id: 3, name: "Сделать палубу", status: "inProgress" },
        { id: 4, name: "Сделать сделать винт", status: "queue" },
        { id: 5, name: "Сделать сделать штурвал", status: "inProgress" },
    ],
};

export const Project: FC = () => {
    return (
        <div className="project">
            <TasksList type="queue" tasks={fakeProject.tasks.filter((task) => task.status === "queue")} />
            <TasksList type="inProgress" tasks={fakeProject.tasks.filter((task) => task.status === "inProgress")} />
            <TasksList type="done" tasks={fakeProject.tasks.filter((task) => task.status === "done")} />
        </div>
    );
};
