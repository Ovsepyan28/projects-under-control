import { State } from "./types";

export const initial: State = {
    "column-1": {
        title: "Queue",
        tasks: [
            { id: "item-1", content: "Элемент 1" },
            { id: "item-2", content: "Элемент 2" },
            { id: "item-3", content: "Элемент 3" },
            { id: "item-7", content: "Элемент 7" },
        ],
    },
    "column-2": {
        title: "Development",
        tasks: [
            { id: "item-4", content: "Элемент 4" },
            { id: "item-5", content: "Элемент 5" },
            { id: "item-6", content: "Элемент 6" },
        ],
    },
    "column-3": {
        title: "Done",
        tasks: [
            { id: "item-8", content: "Элемент 8" },
            { id: "item-9", content: "Элемент 9" },
            { id: "item-10", content: "Элемент 10" },
        ],
    },
};
