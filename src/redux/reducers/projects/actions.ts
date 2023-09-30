import { Board, Id, Project, State } from "../../../types";
import { Action } from "./types";

export const ADD_PROJECT = "ADD_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const SET_PROJECT = "SET_PROJECT";
export const SET_PROJECTS = "SET_PROJECTS";
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const addProject = (projectName: string): Action => ({
    type: ADD_PROJECT,
    payload: { projectName },
});

export const removeProject = (projectId: Id): Action => ({
    type: REMOVE_PROJECT,
    payload: { projectId },
});

export const setProject = (project: Project): Action => ({
    type: SET_PROJECT,
    payload: { project },
});

export const setProjects = (projects: State): Action => ({
    type: SET_PROJECTS,
    payload: { projects },
});

export const addTask = (columnId: keyof Board, projectId: Id, content: string): Action => ({
    type: ADD_TASK,
    payload: { columnId, projectId, content },
});

export const removeTask = (taskId: string, columnId: keyof Board, projectId: Id): Action => ({
    type: REMOVE_TASK,
    payload: { taskId, columnId, projectId },
});
