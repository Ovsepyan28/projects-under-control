import { v4 as uuid } from "uuid";

import { State } from "./types";

export const initialState: State = [
    {
        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
        projectName: "Построить самолет",
        taskCount: 3,
        columns: {
            "column-1": {
                title: "Queue",
                tasks: [
                    {
                        taskId: uuid(),
                        columnId: "column-1",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                        taskNumber: 1,
                        taskTitle: "Задача 1",
                        taskCreateDate: 1696199995167,
                    },
                ],
            },
            "column-2": {
                title: "Development",
                tasks: [
                    {
                        taskId: uuid(),
                        columnId: "column-2",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                        taskNumber: 2,
                        taskTitle: "Задача 2",
                        taskCreateDate: 1696200035590,
                    },
                ],
            },
            "column-3": {
                title: "Done",
                tasks: [
                    {
                        taskId: uuid(),
                        columnId: "column-3",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                        taskNumber: 3,
                        taskTitle: "Задача 3",
                        taskCreateDate: 16962000359890,
                    },
                ],
            },
        },
    },
    {
        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
        projectName: "Построить корабль",
        taskCount: 3,
        columns: {
            "column-1": {
                title: "Queue",
                tasks: [
                    {
                        taskId: uuid(),
                        columnId: "column-1",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                        taskNumber: 1,
                        taskTitle: "Задача 1",
                        taskCreateDate: 1696199965167,
                    },
                ],
            },
            "column-2": {
                title: "Development",
                tasks: [
                    {
                        taskId: uuid(),
                        columnId: "column-2",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                        taskNumber: 2,
                        taskTitle: "Задача 2",
                        taskCreateDate: 1696200075590,
                    },
                ],
            },
            "column-3": {
                title: "Done",
                tasks: [
                    {
                        taskId: uuid(),
                        columnId: "column-3",
                        projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
                        taskNumber: 3,
                        taskTitle: "Задача 3",
                        taskCreateDate: 16962000859890,
                    },
                ],
            },
        },
    },
];
