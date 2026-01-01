

// this is used in Calendar.tsx for typing the props of Calendar component
export interface CalendarProps {
    // try npm run type-check to verify this
    // using number, string etc in Calendar props in App.tsx will cause type-check to fail
    // Error Message Example for type check fail: 
    // Calendar.types.ts(7, 5): The expected type comes from property 'date' which is declared here on type 'IntrinsicAttributes & CalendarProps'
    date: Date; // example: new Date('2022-10-03') 

}
