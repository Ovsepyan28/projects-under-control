import { v4 as uuid } from "uuid";

import { Board, State, Task } from "../../../types";
import { Action } from "./types";

import { ADD_PROJECT, REMOVE_PROJECT, SET_PROJECT, ADD_TASK, REMOVE_TASK, SET_TASK } from "./actions";
import { getStartProjects } from "../../../utils/getStartProjects";

export const projectsReducer = (state = getStartProjects(), action: Action): State => {
    switch (action.type) {
        case ADD_PROJECT:
            return [
                ...state,
                {
                    projectId: uuid(),
                    projectName: action.payload.projectName,
                    taskCount: 0,
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
            let changeableProject = state.find((project) => project.projectId === action.payload.projectId);
            if (changeableProject) {
                changeableProject.taskCount = changeableProject.taskCount + 1;
            }
            const newTask: Task = {
                taskId: uuid(),
                columnId: action.payload.columnId,
                projectId: action.payload.projectId,
                taskTitle: action.payload.taskTitle,
                taskCreateDate: Date.now(),
                subtasks: [],
                content: action.payload.content,
                taskPriority: action.payload.taskPriority,
                taskNumber: changeableProject?.taskCount,
            };
            state
                .find((project) => project.projectId === action.payload.projectId)
                ?.columns[action.payload.columnId as keyof Board].tasks.push(newTask);
            return state;
        case SET_TASK:
            let changeableTask = state
                .find((project) => project.projectId === action.payload.projectId)
                ?.columns[action.payload.columnId as keyof Board].tasks.find(
                    (task) => task.taskId === action.payload.taskId
                );
            if (changeableTask) {
                changeableTask.taskPriority = action.payload.taskPriority;
                changeableTask.content = action.payload.content;
                changeableTask.taskTitle = action.payload.taskTitle;
            }
            return state;
        case REMOVE_TASK:
            const targetProjectIndex = state.findIndex((project) => project.projectId === action.payload.projectId);
            const targetTaskIndex = state[targetProjectIndex].columns[
                action.payload.columnId as keyof Board
            ].tasks.findIndex((task) => task.taskId === action.payload.taskId);
            state[targetProjectIndex].columns[action.payload.columnId as keyof Board].tasks.splice(targetTaskIndex, 1);
            return [...state];
        default:
            return state;
    }
};
