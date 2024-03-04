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

  if (!editing) {
    return (
      <div className="info employment">
        <h2>Practical Experience</h2>
        {experiences.map((e) => {
          return <ExperienceItem key={e.id} experience={e} />;
        })}
      </div>
    );
  }

  if (editing) {
    return (
      <div className="info employment">
        <h2>Practical Experience</h2>
        {experiences.map((experience) => {
          return (
            <form key={experience.id}>
              <span>
                Company (or other) Name:{' '}
                <input
                  type="text"
                  placeholder="Example Company"
                  className="employment-name"
                  value={experience.name}
                  onChange={(event) => handleChange(experience, event, 'name')}
                />
              </span>
              <span>
                Position Title:{' '}
                <input
                  type="text"
                  placeholder="Example job title"
                  className="employment-title"
                  value={experience.title}
                  onChange={(event) => handleChange(experience, event, 'title')}
                />
              </span>
              <span>
                Started:{' '}
                <input
                  type="text"
                  placeholder="Month, Year"
                  className="start-date"
                  value={experience.startDate}
                  onChange={(event) =>
                    handleChange(experience, event, 'startDate')
                  }
                />
              </span>
              <span>
                Finished:{' '}
                <input
                  type="text"
                  placeholder="Month, Year"
                  className="end-date"
                  value={experience.endDate}
                  onChange={(event) =>
                    handleChange(experience, event, 'endDate')
                  }
                />
              </span>
              <span>
                Responsibilities:{' '}
                <input
                  type="text"
                  placeholder="Example responsibility"
                  className="employment-responsibilities"
                  value={experience.responsibilities}
                  onChange={() =>
                    handleChange(experience, event, 'responsibilities')
                  }
                />
              </span>
              <button
                type="button"
                onClick={() => removeExperience(experience)}
              >
                Remove Experience
              </button>
            </form>
          );
        })}
        <button type="button" onClick={() => addExperience()}>
          Add Experience
        </button>
      </div>
    );
  }

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
}
