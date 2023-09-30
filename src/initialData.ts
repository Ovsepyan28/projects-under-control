import { v4 as uuid } from "uuid";

import { State } from "./types";

export const initialState: State = [
    {
        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
        projectName: "Построить самолет",
        columns: {
            "column-1": {
                title: "Queue",
                tasks: [
                    {
                        taskId: uuid(),
                        content: "Задача 1",
                        columnId: "column-1",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 2",
                        columnId: "column-1",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 3",
                        columnId: "column-1",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 7",
                        columnId: "column-1",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                ],
            },
            "column-2": {
                title: "Development",
                tasks: [
                    {
                        taskId: uuid(),
                        content: "Задача 4",
                        columnId: "column-2",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 5",
                        columnId: "column-2",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 6",
                        columnId: "column-2",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                ],
            },
            "column-3": {
                title: "Done",
                tasks: [
                    {
                        taskId: uuid(),
                        content: "Задача 8",
                        columnId: "column-3",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 9",
                        columnId: "column-3",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 10",
                        columnId: "column-3",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                    },
                ],
            },
        },
    },
    {
        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
        projectName: "Построить корабль",
        columns: {
            "column-1": {
                title: "Queue",
                tasks: [
                    {
                        taskId: uuid(),
                        content: "Задача 1",
                        columnId: "column-1",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 2",
                        columnId: "column-1",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 3",
                        columnId: "column-1",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 7",
                        columnId: "column-1",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                ],
            },
            "column-2": {
                title: "Development",
                tasks: [
                    {
                        taskId: uuid(),
                        content: "Задача 4",
                        columnId: "column-2",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 5",
                        columnId: "column-2",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 6",
                        columnId: "column-2",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                ],
            },
            "column-3": {
                title: "Done",
                tasks: [
                    {
                        taskId: uuid(),
                        content: "Задача 8",
                        columnId: "column-3",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 9",
                        columnId: "column-3",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                    {
                        taskId: uuid(),
                        content: "Задача 10",
                        columnId: "column-3",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                    },
                ],
            },
        },
    },
];
