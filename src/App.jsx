import { useState } from 'react';
import './App.css';
import ChangeButton from './components/ChangeButton';
import Education from './components/Education';
import Employment from './components/Employment';
import GeneralInfo from './components/GeneralInfo';
import Skills from './components/Skills';

function App() {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <GeneralInfo editing={editing} />
      {/* <Education /> */}
      {/* <Employment /> */}
      {/* <Skills /> */}
      <ChangeButton editing={editing} setEditing={setEditing} />
    </>
  );
}

export default App;
