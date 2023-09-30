import { State } from "../types";

import { initialState } from "../initialData";

export const getStartProjects = (): State => {
    if (localStorage.projects && JSON.parse(localStorage.projects).length !== 0) {
        return JSON.parse(localStorage.projects);
    } else {
        const initialProjects: State = initialState;
        localStorage.projects = JSON.stringify(initialProjects);
        return initialProjects;
    }
};
