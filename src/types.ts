export type Id = string;

export type Task = { id: Id; content: string };

export type Tasks = Task[];

export type Column = { title: string; tasks: Tasks };

export type State = { "column-1": Column; "column-2": Column; "column-3": Column };
