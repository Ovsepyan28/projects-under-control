export const getFormattedDays = (days: number) => {
    const formatter = new Intl.PluralRules("ru-RU");
    const suffixes = {
        zero: "дней",
        one: "день",
        two: "дня",
        few: "дня",
        many: "дней",
        other: "дней",
    };

    return `${days} ${suffixes[formatter.select(days)]}`;
};
