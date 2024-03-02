import { useState } from 'react';

export default function Education() {
  const [schools, setSchool] = useState([]);
  // if editing = true, return inputs with previous values contained
  // if editing = false, return html elements with previous input values

  function School({ name, title, startDate, endDate }) {
    return (
      <span>
        {name} - {title} - From {startDate} to {endDate}
      </span>
    );
  }

  return (
    <div className="education">
      <h2>Educational History</h2>
      <School
        name={'Some University'}
        title={'Some Degree'}
        startDate={'August 2023'}
        endDate={'April 2024'}
      />
    </div>
  );
}
