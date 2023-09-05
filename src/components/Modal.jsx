import { useGlobalContext } from "../context";

const Modal = () => {
  const { toggleModal, deleteComment, currentId } = useGlobalContext();

  return (
    <section className="fullscreen-overlay">
      <div className="modal">
        <h3>Delete comment</h3>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className="btn-wrapper">
          <button
            onClick={toggleModal}
            className="action-btn cancel-btn"
            type="button"
          >
            no, cancel
          </button>
          <button
            onClick={() => deleteComment(currentId)}
            className="action-btn confirm-delete-btn"
            type="button"
          >
            yes, delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
