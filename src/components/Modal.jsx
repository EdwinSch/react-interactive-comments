import { useGlobalContext } from "../context";

const Modal = () => {
  const { setIsModalOpen, deleteComment, currentId } = useGlobalContext();

  return (
    <div className="overlay">
      <div className="modal-container">
        <h3>Delete comment</h3>
        <p className="warning">
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className="btn-row">
          <button
            onClick={() => setIsModalOpen(false)}
            className="action-btn cancel-btn"
            type="button"
          >
            no, cancel
          </button>
          <button
            onClick={() => deleteComment(currentId)}
            className="action-btn confirm-btn"
            type="button"
          >
            yes, delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
