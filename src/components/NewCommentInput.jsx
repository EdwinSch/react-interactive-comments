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
    <>
      {/* desktop layout */}
      <form className="form-control-desktop" onSubmit={handleSubmit}>
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

      {/* mobile layout */}
      <form className="form-control-mobile" onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          placeholder="Add a comment..."
          value={newItemContent}
        ></textarea>

        <div className="form-wrapper">
          <img src={activeUser.user.img} alt={activeUser.user.name} />
          <button type="submit" className="action-btn">
            send
          </button>
        </div>
      </form>
    </>
  );
};

export default NewCommentInput;
