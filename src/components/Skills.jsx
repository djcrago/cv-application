import { useState } from 'react';
import '../styles/Skills.css';

export default function Skills({ editing }) {
  const [nextId, setNextId] = useState(0);
  const [skills, setSkills] = useState([
    {
      id: nextId,
      text: '',
    },
  ]);

  function handleChange(skill, event, variable) {
    setSkills(
      skills.map((e) => {
        if (e.id === skill.id) {
          return { ...e, [variable]: event.target.value };
        }
        return e;
      })
    );
  }

  function addSkill() {
    setNextId(nextId + 1);
    setSkills([
      ...skills,
      {
        id: nextId + 1,
        text: '',
      },
    ]);
  }

  function removeSkill(skill) {
    if (skills.length <= 1) {
      setSkills([
        {
          id: nextId,
          text: '',
        },
      ]);
    }
    if (skills.length > 1) {
      setSkills(skills.filter((s) => s.id !== skill.id));
    }
  }

  if (!editing) {
    return (
      <div className="skills">
        <h2>Skills</h2>
        {skills.map((skill) => {
          if (skill.text) return <h3 key={skill.id}>{skill.text}</h3>;
        })}
      </div>
    );
  }

  if (editing) {
    return (
      <div className="skills">
        <h2>Skills</h2>
        {skills.map((skill) => {
          return (
            <form key={skill.id}>
              <input
                type="text"
                placeholder="Description of skill"
                value={skill.text}
                onChange={(event) => handleChange(skill, event, 'text')}
              />
              <button type="button" onClick={() => removeSkill(skill)}>
                Remove
              </button>
            </form>
          );
        })}
        <button type="button" onClick={() => addSkill()}>
          Add
        </button>
      </div>
    );
  }
}
