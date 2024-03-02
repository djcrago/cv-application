import { useState } from 'react';
import '../styles/Employment.css';

export default function Employment({ editing }) {
  const [nextId, setNextId] = useState(0);
  const [experiences, setExperiences] = useState([
    {
      id: nextId,
      name: '',
      title: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
    },
  ]);

  function ExperienceItem({ experience }) {
    if (experience.name) {
      return (
        <div>
          <h3>{experience.name}</h3>
          <ul>
            {experience.title && <li>Position: {experience.title}</li>}
            {experience.startDate && <li>Started: {experience.startDate}</li>}
            {experience.endDate && <li>Finished: {experience.endDate}</li>}
            {experience.responsibilities && (
              <li>Responsibilities: {experience.responsibilities}</li>
            )}
          </ul>
        </div>
      );
    }
  }

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
        id: nextId + 1,
        name: '',
        title: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
      },
    ]);
  }

  function removeExperience(experience) {
    if (experiences.length <= 1) {
      setExperiences([
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
    if (experiences.length > 1) {
      setExperiences(experiences.filter((e) => e.id !== experience.id));
    }
  }

  if (!editing) {
    return (
      <div className="employment">
        <h2>Practical Experience</h2>
        {experiences.map((e) => {
          return <ExperienceItem key={e.id} experience={e} />;
        })}
      </div>
    );
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
              <button
                type="button"
                onClick={() => removeExperience(experience)}
              >
                Remove
              </button>
            </form>
          );
        })}
        <button type="button" onClick={() => addExperience()}>
          Add
        </button>
      </div>
    );
  }
}
