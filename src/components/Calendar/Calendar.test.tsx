import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('<Calendar />', () => {
    test('renders month and year based on the provided date', () => {
        render(<Calendar date={new Date('2022-10-03')} />);

        expect(screen.getByText('October 2022')).toBeInTheDocument();
    });

    test('renders days of the week', () => {
        render(<Calendar date={new Date('2022-10-03')} />);

        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        weekDays.forEach((day) => {
            expect(screen.getByText(day)).toBeInTheDocument();
        });
    });

    test('highlights the selected date', () => {
        render(<Calendar date={new Date('2022-10-03')} />);

        const selectedDate = screen.getByText('3');

        expect(selectedDate).toHaveClass('selected');
    });

    test('renders correct number of days for the month', () => {
        // February 2020 (leap year)
        render(<Calendar date={new Date('2020-02-23')} />);

        expect(screen.getByText('29')).toBeInTheDocument();
    });
});
