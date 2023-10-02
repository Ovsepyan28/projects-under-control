import { Board, Id, Project, State } from "../../../types";

export type Action =
    | { type: "ADD_PROJECT"; payload: { projectName: string } }
    | { type: "REMOVE_PROJECT"; payload: { projectId: Id } }
    | { type: "SET_PROJECT"; payload: { project: Project } }
    | { type: "SET_PROJECTS"; payload: { projects: State } }
    | { type: "ADD_TASK"; payload: { columnId: keyof Board; projectId: Id; taskTitle: string } }
    | { type: "REMOVE_TASK"; payload: { taskId: string; columnId: keyof Board; projectId: Id } };
