import { useGlobalContext } from "../context";

const EditComment = ({ content, id, setEditMode }) => {
  const { editComment, editTextInput, setEditTextInput, comments } =
    useGlobalContext();

  const handleChange = (event) => {
    setEditTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editComment(id, editTextInput);
    setEditMode(false);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <textarea
        onChange={handleChange}
        value={editTextInput}
        className="edit-text-input"
      ></textarea>
      <div className="edit-btn-row">
        <button className="action-btn" type="submit">
          update
        </button>
      </div>
    </form>
  );
};

export default EditComment;
