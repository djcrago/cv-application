import { useState } from 'react';
import '../styles/Education.css';

export default function Education({ editing }) {
  const [nextId, setNextId] = useState(0);
  const [schools, setSchools] = useState([
    { id: nextId, name: '', title: '', startDate: '', endDate: '' },
  ]);

  function handleChange(school, event, variable) {
    setSchools(
      schools.map((s) => {
        if (s.id === school.id) {
          return { ...s, [variable]: event.target.value };
        }
        return s;
      })
    );
  }

  function addSchool() {
    setNextId(nextId + 1);
    setSchools([
      ...schools,
      { id: nextId + 1, name: '', title: '', startDate: '', endDate: '' },
    ]);
  }

  function removeSchool(school) {
    if (schools.length <= 1) {
      setSchools([
        { id: nextId, name: '', title: '', startDate: '', endDate: '' },
      ]);
    }
    if (schools.length > 1) {
      setSchools(schools.filter((s) => s.id !== school.id));
    }
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
                placeholder="School (or other) Name"
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
              <button type="button" onClick={() => removeSchool(school)}>
                Remove
              </button>
            </form>
          );
        })}
        <button type="button" onClick={() => addSchool()}>
          Add
        </button>
      </div>
    );
  }

  return (
    <div className="education">
      <h2>Educational History</h2>
      {schools.map((school) => {
        return (
          <div key={school.id}>
            {school.name} - {school.title} - From {school.startDate} to{' '}
            {school.endDate}
          </div>
        );
      })}
    </div>
  );
}
