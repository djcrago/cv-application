import { useState } from 'react';
import '../styles/Employment.css';

export default function Employment({ editing }) {
  const [experiences, setExperiences] = useState([]);
  const [nextId, setNextId] = useState(0);

  function handleChange(experience, event, variable) {
    setExperiences(
      experiences.map((e) => {
        if (e.id === experience.id) {
          return { ...e, [variable]: event.target.value };
        }
        return e;
      })
    );
  }

  function addExperience() {
    setNextId(nextId + 1);
    setExperiences([
      ...experiences,
      {
        id: nextId,
        name: '',
        title: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
      },
    ]);
  }

  if (editing) {
    return (
      <div className="employment">
        <h2>Practical Experience</h2>
        {experiences.map((experience) => {
          return (
            <form key={experience.id}>
              <input
                type="text"
                placeholder="Company (or other) Name"
                value={experience.name}
                onChange={(event) => handleChange(experience, event, 'name')}
              />{' '}
              -
              <input
                type="text"
                placeholder="Position Title"
                value={experience.title}
                onChange={(event) => handleChange(experience, event, 'title')}
              />{' '}
              - From
              <input
                type="text"
                placeholder="Start Date (month, year)"
                value={experience.startDate}
                onChange={(event) =>
                  handleChange(experience, event, 'startDate')
                }
              />
              to
              <input
                type="text"
                placeholder="End Date (month, year)"
                value={experience.endDate}
                onChange={(event) => handleChange(experience, event, 'endDate')}
              />
              -
              <input
                type="text"
                placeholder="Main responsibilities"
                value={experience.responsibilities}
                onChange={() =>
                  handleChange(experience, event, 'responsibilities')
                }
              />
            </form>
          );
        })}
        <button type="button" onClick={() => addExperience()}>
          Add
        </button>
      </div>
    );
  }

  return (
    <div className="education">
      <h2>Practical Experience</h2>
      {experiences.map((experience) => {
        return (
          <div key={experience.id}>
            {experience.name} - {experience.title} - From {experience.startDate}{' '}
            to {experience.endDate} - {experience.responsibilities}
          </div>
        );
      })}
    </div>
  );
}
