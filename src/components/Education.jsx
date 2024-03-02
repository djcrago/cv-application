import { useState } from 'react';
import '../styles/Education.css';

export default function Education({ editing }) {
  const [schools, setSchools] = useState([
    {
      name: 'Name 1',
      title: 'Title 1',
      startDate: 'Start Date 1',
      endDate: 'End Date 1',
      id: 0,
    },
    {
      name: 'Name 2',
      title: 'Title 2',
      startDate: 'Start Date 2',
      endDate: 'End Date 2',
      id: 1,
    },
  ]);

  function handleChange(school, event, variable) {
    setSchools(
      schools.map((s) => {
        if (s.name === school.name) {
          return { ...s, [variable]: event.target.value };
        }
        return s;
      })
    );
  }

  if (editing) {
    return (
      <div className="education">
        <h2>Educational History</h2>
        {schools.map((school) => {
          return (
            <form key={school.id}>
              <input
                type="text"
                placeholder="School Name"
                value={school.name}
                onChange={(event) => handleChange(school, event, 'name')}
              />{' '}
              -
              <input
                type="text"
                placeholder="Title of Study (degree, certificate, etc.)"
                value={school.title}
                onChange={(event) => handleChange(school, event, 'title')}
              />{' '}
              - From
              <input
                type="text"
                placeholder="Start Date (month, year)"
                value={school.startDate}
                onChange={(event) => handleChange(school, event, 'startDate')}
              />
              to
              <input
                type="text"
                placeholder="End Date (month, year)"
                value={school.endDate}
                onChange={(event) => handleChange(school, event, 'endDate')}
              />
            </form>
          );
        })}
      </div>
    );
  }

  return (
    <div className="education">
      <h2>Educational History</h2>
      {schools.map((school) => {
        return (
          <div key={school.name}>
            {school.name} - {school.title} - From {school.startDate} to{' '}
            {school.endDate}
          </div>
        );
      })}
    </div>
  );
}
