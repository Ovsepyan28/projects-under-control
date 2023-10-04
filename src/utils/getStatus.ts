import { Columns } from "../types";

export const getStatus = (column: keyof Columns): string => {
    const statusMap = {
        "column-1": "В очереди",
        "column-2": "В процессе разработки",
        "column-3": "Выполненно",
    };
    return statusMap[column];
};
