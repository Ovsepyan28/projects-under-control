export type Id = string;

export type Task = { taskId: Id; columnId: keyof Board; projectId: Id; content: string };

export type Tasks = Task[];

export type Column = { title: string; tasks: Tasks };

export type Board = { "column-1": Column; "column-2": Column; "column-3": Column };

export type Project = { projectId: Id; projectName: string; columns: Board };

export type State = Project[];
