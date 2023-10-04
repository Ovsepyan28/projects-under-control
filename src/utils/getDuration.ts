import moment from "moment";

export const getDuration = (a: number, b: number): number => {
    const x = moment(a);
    const y = moment(b);
    const duration = Math.floor(moment.duration(y.diff(x)).asDays());
    return duration || 1;
};
