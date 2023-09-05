import { useGlobalContext } from "../context";

const NewCommentInput = () => {
  const {
    activeUser,
    newItemContent,
    setNewItemContent,
    addComment,
    comments,
  } = useGlobalContext();

  const handleChange = (event) => {
    setNewItemContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItemContent) {
      return;
    }
    addComment(newItemContent);
    setNewItemContent("");
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <img src={activeUser.user.img} alt={activeUser.user.name} />
      <textarea
        onChange={handleChange}
        placeholder="Add a comment..."
        value={newItemContent}
      ></textarea>
      <button type="submit" className="action-btn">
        send
      </button>
    </form>
  );
};

export default NewCommentInput;
