export type Id = string;

export type Task = {
    taskId: Id;
    columnId: keyof Board;
    projectId: Id;
    taskTitle: string;
    content?: string;
    taskNumber?: number;
    taskCreateDate: number;
    taskFinishDate?: string;
    taskPriority?: "low" | "medium" | "high";
    subtasks?: Subtasks;
    comments?: Comments;
};

export type Tasks = Task[];

export type Column = { title: string; tasks: Tasks };

export type Board = { "column-1": Column; "column-2": Column; "column-3": Column };

export type Project = { projectId: Id; projectName: string; columns: Board; taskCount: number };

export type Subtask = { subtaskId: Id; content: string; isDone: boolean };

export type Subtasks = Subtask[];

export type Comment = string;

export type Comments = string[];

export type State = Project[];
