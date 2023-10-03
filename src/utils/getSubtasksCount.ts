import { Task } from "../types";

export const getSubtasksCount = (task: Task): string => {
    if (task.subtasks.length) {
        const count = `${task.subtasks.filter((subtask) => subtask.isDone === true).length} / ${task.subtasks.length}`;
        return count.toString();
    }
    return " ";
};
