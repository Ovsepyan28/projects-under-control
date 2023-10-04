export type Id = string;

export type Task = {
    taskId: Id;
    columnId: keyof Columns;
    projectId: Id;
    taskTitle: string;
    content?: string;
    taskNumber: number | undefined;
    taskCreateDate: number;
    taskFinishDate?: number;
    taskPriority: Priority;
    subtasks: Subtasks;
    comments?: Comments;
};

export type Priority = "low" | "medium" | "high";

export type Tasks = Task[];

export type Column = { title: string; tasks: Tasks };

export type Columns = { "column-1": Column; "column-2": Column; "column-3": Column };

export type Project = { projectId: Id; projectName: string; columns: Columns; taskCount: number };

export type Subtask = { subtaskId: Id; content: string; isDone: boolean };

export type Subtasks = Subtask[];

export type Comment = string;

export type Comments = string[];

export type State = Project[];

export type CreateTaskFormValues = {
    taskTitle: string;
    content?: string;
    taskPriority: Priority;
};
