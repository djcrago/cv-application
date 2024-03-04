import '../styles/ChangeButton.css';

export default function ChangeButton({ editing, setEditing }) {
  let text = 'Edit Form';

  if (editing) {
    text = 'Submit Form';
  }

  return (
    <>
      <button
        className="change"
        type="button"
        onClick={() => setEditing(!editing)}
      >
        {text}
      </button>
    </>
  );
}
