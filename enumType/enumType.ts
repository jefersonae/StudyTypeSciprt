enum WeekDays {
    Monday = 'Mon',
    Tuesday = 'Tue',
    Wednesday = 'Wed',
    Thursday = 'Thu',
    Friday = 'Fri',
    Saturday = 'Sat',
    Sunday = 'Sun'
}

console.log(WeekDays.Monday); // Mon

// Enum with const
const enum WeekDaysConst {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(WeekDaysConst.Monday); // 0