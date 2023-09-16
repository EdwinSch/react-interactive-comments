import Vote from "./Vote";
import { useGlobalContext } from "../context";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Reply = ({ id, user, date, content, points }) => {
  const { activeUser, openModal } = useGlobalContext();

  const [editMode, setEditMode] = useState(false);

  return (
    <article className="comment">
      <Vote points={points} />

      <div className="content-wrapper">
        <header>
          <img src={user.img} alt={user.name} />
          <p className="username">{user.name}</p>
          {/* Current user badge */}
          {activeUser.name === user.name && <div className="badge">you</div>}
          <p className="timestamp">{date}</p>
        </header>

        {/* edit/content mode START */}
        {/* {editMode ? (
          <EditComment id={id} content={content} setEditMode={setEditMode} />
        ) : (
          <p className="text-content">{content}</p>
        )} */}
        {/* edit/content mode END */}

        <p className="text-content">{content}</p>

        {activeUser.name === user.name && (
          <div className="btn-wrapper">
            <button
              onClick={() => openModal(id)}
              className="text-btn delete-btn"
              type="button"
            >
              <FaTrash className="icon" aria-label="delete icon" />
              delete
            </button>
            <button
              onClick={() => setEditMode(!editMode)}
              className="text-btn"
              type="button"
            >
              <FaEdit className="icon" aria-label="edit icon" />
              {editMode ? "cancel" : "edit"}
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Reply;
