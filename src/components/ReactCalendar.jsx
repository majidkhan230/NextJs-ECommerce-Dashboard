'use client'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


 function ReactCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='p-2 '>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default ReactCalendar;