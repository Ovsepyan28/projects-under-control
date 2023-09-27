import { FC } from "react";

import "./styles.sass";

export interface ITasksProps {
    name: string;
}

export const Tasks: FC<ITasksProps> = ({ name }) => {
    return <div className="task">{name}</div>;
};
