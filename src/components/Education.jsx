import { useState } from 'react';

export default function Education() {
  const [schools, setSchools] = useState([]);

  // cycle through schools
  // if editing = true, return inputs with object values
  // if editing = false, return html elements with object values

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
