


export const WEEK_DAYS: readonly string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
];


export function getMonthYearLabel(date: Date): string {
    // input: new Date('2022-10-03')
    // output: Mon Oct 03 2022 05:30:00 GMT+0530 (India Standard Time)
    // formatted output: "October 2022"
    return date.toLocaleDateString('en-US', {
        month: 'long', // Oct to October
        year: 'numeric', // 2022
    }); // returns "October 2022"
}

// get Days in month or get last date of the month
export function getDaysInMonth(date: Date): number {
    // input: new Date('2022-10-03')
    return new Date(
        date.getFullYear(), // 2022
        date.getMonth() + 1, // 10 + 1 = 11 (November)
        0 // 0th day of November is last day of October
    ).getDate(); // returns 31
}


export function getStartDayOfMonth(date: Date): number {
    // input: new Date('2022-10-03')
    return new Date(
        date.getFullYear(), // 2022
        date.getMonth(), // 10 (October)
        1 // 1st day of the month
    ).getDay(); // returns day of the week (0 = Sunday, 6 = Saturday)
}

export function generateCalendarGrid(
    date: Date
): Array<number | null> {
    // input: new Date('2022-10-03')
    const daysInMonth = getDaysInMonth(date); // 31
    const startDay = getStartDayOfMonth(date); // 6 (Saturday)

    const cells: Array<number | null> = []; // Initialize empty array

    // Empty cells before first date
    for (let i = 0; i < startDay; i++) { // 0 to 5 for October 2022
        cells.push(null); // Push null for empty cells
    }

    // Actual dates
    for (let day = 1; day <= daysInMonth; day++) { // 1 to 31
        cells.push(day); // Push actual date
    }

    return cells; // Return the generated grid. which is an array of numbers and nulls. nulls will be rendered as empty cells in the calendar UI
}
