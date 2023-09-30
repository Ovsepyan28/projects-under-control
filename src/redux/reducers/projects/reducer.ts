import { v4 as uuid } from "uuid";

import { Board, State, Task } from "../../../types";
import { Action } from "./types";

import { ADD_PROJECT, REMOVE_PROJECT, SET_PROJECT, ADD_TASK, REMOVE_TASK } from "./actions";
import { getStartProjects } from "../../../utils/getStartProjects";

export const projectsReducer = (state = getStartProjects(), action: Action): State => {
    switch (action.type) {
        case ADD_PROJECT:
            return [
                ...state,
                {
                    projectId: uuid(),
                    projectName: action.payload.projectName,
                    columns: {
                        "column-1": {
                            title: "Queue",
                            tasks: [],
                        },
                        "column-2": {
                            title: "Development",
                            tasks: [],
                        },
                        "column-3": {
                            title: "Done",
                            tasks: [],
                        },
                    },
                },
            ];
        case REMOVE_PROJECT:
            return state.filter((project) => project.projectId !== action.payload.projectId);
        case SET_PROJECT:
            let targetProject = state.findIndex((project) => project.projectId === action.payload.project.projectId);
            state[targetProject] = action.payload.project;
            return state;
        case ADD_TASK:
            const newTask: Task = {
                taskId: uuid(),
                columnId: action.payload.columnId,
                projectId: action.payload.projectId,
                content: action.payload.content,
            };
            state
                .find((project) => project.projectId === action.payload.projectId)
                ?.columns[action.payload.columnId as keyof Board].tasks.push(newTask);
            return state;
        case REMOVE_TASK:
            let targetTasks = state.find((project) => project.projectId === action.payload.projectId)?.columns[
                action.payload.columnId as keyof Board
            ].tasks;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            targetTasks = targetTasks?.filter((task) => task.taskId !== action.payload.taskId);
            return state;
        default:
            return state;
    }
};
