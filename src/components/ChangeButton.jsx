export default function ChangeButton({ editing, setEditing }) {
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
