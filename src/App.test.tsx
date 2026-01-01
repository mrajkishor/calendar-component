import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Calendar', () => ({
  Calendar: ({ date }: { date: Date }) => (
    <div data-testid="calendar-mock">
      Calendar mock – {date.toISOString()}
    </div>
  ),
}));

describe('<App />', () => {
  test('renders App root container', () => {
    const { container } = render(<App />);

    // ✅ Use RTL container instead of document
    expect(container.firstChild).toHaveClass('App');
  });

  test('renders Calendar inside CalendarWrapper', () => {
    render(<App />);

    // ✅ RTL query
    expect(screen.getByTestId('calendar-mock')).toBeInTheDocument();
  });

  test('passes correct date prop to Calendar', () => {
    render(<App />);

    expect(
      screen.getByText('Calendar mock – 2022-10-03T00:00:00.000Z')
    ).toBeInTheDocument();
  });
});
