import { Columns, Id, Project, State } from "../../../types";

export type Action =
    | { type: "ADD_PROJECT"; payload: { projectName: string } }
    | { type: "REMOVE_PROJECT"; payload: { projectId: Id } }
    | { type: "SET_PROJECT"; payload: { project: Project } }
    | { type: "SET_PROJECTS"; payload: { projects: State } }
    | {
          type: "ADD_TASK";
          payload: {
              columnId: keyof Columns;
              projectId: Id;
              taskTitle: string;
              content?: string;
              taskPriority: "low" | "medium" | "high";
          };
      }
    | {
          type: "SET_TASK";
          payload: {
              columnId: keyof Columns;
              projectId: Id;
              taskTitle: string;
              content?: string;
              taskPriority: "low" | "medium" | "high";
              taskId: Id;
          };
      }
    | { type: "REMOVE_TASK"; payload: { taskId: string; columnId: keyof Columns; projectId: Id } };
