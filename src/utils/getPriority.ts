import { Priority } from "../types";

export const getPriority = (priority: Priority): string => {
    const priorityMap = {
        low: "Low",
        medium: "Medium",
        high: "High",
    };
    return priorityMap[priority];
};
