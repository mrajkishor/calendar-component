import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calendar } from './components/Calendar';

function App() {
  return (
    <div className="App">
      <div className="CalendarWrapper">
        <Calendar date={new Date('2022-10-03')} />
      </div>
    </div>
  );
}

export default App;
