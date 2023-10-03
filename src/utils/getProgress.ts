import { Project } from "../types";

export const getProgress = (project: Project): string => {
    let progress = `${project.columns["column-1"].tasks.length} / ${project.columns["column-2"].tasks.length} / ${project.columns["column-3"].tasks.length}`;
    return progress;
};
