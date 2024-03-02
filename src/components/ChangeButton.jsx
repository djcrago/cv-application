// import {useState} from 'react'

export default function ChangeButton({ editing, setEditing }) {
  // if editing = true, button text = 'submit'
  // onClick = re-render input values are in html elements
  // if editing = false, button text = 'edit'
  // onClick = re-render html elements' values are in inputs

  console.log(editing);

  let text = 'Edit';

  if (editing) {
    text = 'Submit';
  }

  return (
    <>
      <button type="button" onClick={() => setEditing(!editing)}>
        {text}
      </button>
    </>
  );
}
