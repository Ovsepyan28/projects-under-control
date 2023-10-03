import { v4 as uuid } from "uuid";

import { State } from "./types";

export const initialState: State = [
    {
        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
        projectName: "Построить самолет",
        taskCount: 5,
        columns: {
            "column-1": {
                title: "Queue",
                tasks: [
                    {
                        taskId: uuid(),
                        columnId: "column-1",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                        taskNumber: 1,
                        taskTitle: "Тестирование и первый полет",
                        subtasks: [
                            { subtaskId: uuid(), content: "Провести статические испытания", isDone: false },
                            { subtaskId: uuid(), content: "Проверить работу мотора", isDone: false },
                            { subtaskId: uuid(), content: "Совершить первый полет", isDone: false },
                        ],
                        taskPriority: "high",
                        taskCreateDate: 1696199995167,
                    },
                    {
                        taskId: uuid(),
                        columnId: "column-1",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                        taskNumber: 5,
                        taskTitle: "Продажа самолета",
                        subtasks: [],
                        taskPriority: "low",
                        taskCreateDate: 1696199095167,
                        content:
                            "В этой задаче проводятся статические испытания, проверяется работа мотора и совершается первый полет самолета.",
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
                        taskTitle: "Сборка фюзеляжа",
                        subtasks: [
                            { subtaskId: uuid(), content: "Вырезать детали фюзеляжа", isDone: true },
                            { subtaskId: uuid(), content: "Собрать раму", isDone: false },
                            { subtaskId: uuid(), content: "Закрепить крыло", isDone: false },
                        ],
                        taskPriority: "high",
                        taskCreateDate: 1696200035590,
                        content:
                            "Эта задача включает в себя вырезку деталей фюзеляжа, сборку рамы и закрепление крыла.",
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
                        taskTitle: "Изучить дизайн самолета",
                        subtasks: [
                            { subtaskId: uuid(), content: "Исследовать форму крыла", isDone: true },
                            { subtaskId: uuid(), content: "Выбрать двигатель", isDone: true },
                            { subtaskId: uuid(), content: "Рассмотреть материалы для фюзеляжа", isDone: true },
                        ],
                        taskPriority: "high",
                        taskCreateDate: 16962000359890,
                        taskFinishDate: 16962000659890,
                        content:
                            "В этой задаче требуется исследовать дизайн самолета, включая форму крыла, выбор двигателя и рассмотрение материалов для фюзеляжа.",
                    },
                    {
                        taskId: uuid(),
                        columnId: "column-3",
                        projectId: "b809e5a9-24b9-404a-9658-67597bd7db14",
                        taskNumber: 4,
                        taskTitle: "Собрать необходимые материалы",
                        subtasks: [
                            { subtaskId: uuid(), content: "Закупить алюминиевые листы", isDone: true },
                            { subtaskId: uuid(), content: "Приобрести мотор и винты", isDone: true },
                            { subtaskId: uuid(), content: "Заказать стекло для кабины", isDone: true },
                        ],
                        taskPriority: "medium",
                        taskCreateDate: 16962000399890,
                        taskFinishDate: 16962008659890,
                        content:
                            "Здесь нужно собрать все необходимые материалы для проекта, включая алюминиевые листы, мотор и винты, а также стекло для кабины.",
                    },
                ],
            },
        },
    },
    // {
    //     projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
    //     projectName: "Построить корабль",
    //     taskCount: 3,
    //     columns: {
    //         "column-1": {
    //             title: "Queue",
    //             tasks: [
    //                 {
    //                     taskId: uuid(),
    //                     columnId: "column-1",
    //                     projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
    //                     taskNumber: 1,
    //                     taskTitle: "Задача 1",
    //                     taskCreateDate: 1696199965167,
    //                 },
    //             ],
    //         },
    //         "column-2": {
    //             title: "Development",
    //             tasks: [
    //                 {
    //                     taskId: uuid(),
    //                     columnId: "column-2",
    //                     projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
    //                     taskNumber: 2,
    //                     taskTitle: "Задача 2",
    //                     taskCreateDate: 1696200075590,
    //                 },
    //             ],
    //         },
    //         "column-3": {
    //             title: "Done",
    //             tasks: [
    //                 {
    //                     taskId: uuid(),
    //                     columnId: "column-3",
    //                     projectId: "ea065155-960b-4d43-b3e0-b02d722b69a2",
    //                     taskNumber: 3,
    //                     taskTitle: "Задача 3",
    //                     taskCreateDate: 16962000859890,
    //                 },
    //             ],
    //         },
    //     },
    // },
];
