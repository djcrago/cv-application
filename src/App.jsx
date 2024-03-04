import { useState } from 'react';
import ChangeButton from './components/ChangeButton';
import Education from './components/Education';
import Employment from './components/Employment';
import GeneralInfo from './components/GeneralInfo';
import Skills from './components/Skills';

function App() {
  const [editing, setEditing] = useState(true);

  return (
    <>
      <GeneralInfo editing={editing} />
      <Education editing={editing} />
      <Employment editing={editing} />
      <Skills editing={editing} />
      <ChangeButton editing={editing} setEditing={setEditing} />
    </>
  );
}

export default App;
