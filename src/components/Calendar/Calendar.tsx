import React from 'react';
import styles from './Calendar.module.css';
import { CalendarProps } from './Calendar.types';
import {
    WEEK_DAYS,
    getMonthYearLabel,
    generateCalendarGrid,
} from './Calendar.utils';

// Reusable ui component

// As per Atomic Design principles, here
// Atom: Header (Month & Year, WeekDays), Cell
// Molecule: Grid (made of multiple Cells) and WeekDays Header and Month & Year Header
// Organism: Calendar (made of Headers and Grid)
// Since Atom and Molecule are not used outside Calendar component, creating separate components for them is not necessary.

export const Calendar: React.FC<CalendarProps> = ({ date }) => { // input: date = new Date('2022-10-03')
    const selectedDay = date.getDate(); // 3
    const calendarGrid = generateCalendarGrid(date); // for new Date('2022-10-03'), its [null, null, null, null, null, 1, 2, 3, ..., 31]

    return (
        <div className={styles.calendar} data-testid="calendar">

            {/* Month & Year */}
            <div className={styles.header}>
                {getMonthYearLabel(date)}
            </div>

            {/* Days */}
            <div className={styles.weekRow}>
                {WEEK_DAYS.map((day) => (
                    <div key={day} className={styles.weekDay}>
                        {day}
                    </div>
                ))}
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {calendarGrid.map((day, index) => {
                    const isSelected = day === selectedDay;

                    return (
                        <div
                            key={index}
                            className={[
                                styles.cell,
                                isSelected ? styles.selected : '',
                            ].join(' ')}
                        >
                            {day ?? ''}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
