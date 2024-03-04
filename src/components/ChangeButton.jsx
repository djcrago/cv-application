import '../styles/ChangeButton.css';

export default function ChangeButton({ editing, setEditing }) {
  return (
    <>
      <button
        className="change"
        type="button"
        onClick={() => setEditing(!editing)}
      >
        {editing ? 'Submit Form' : 'Edit Form'}
      </button>
    </>
  );
}
