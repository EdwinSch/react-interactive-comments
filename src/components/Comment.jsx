import Vote from "./Vote";
import EditComment from "./EditComment";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { useState } from "react";

const Comment = ({ id, user, date, content, points, replies }) => {
  const { activeUser, openModal } = useGlobalContext();

  const [editMode, setEditMode] = useState(false);

  return (
    <div className="comment-set-wrapper">
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
          {editMode ? (
            <EditComment id={id} content={content} setEditMode={setEditMode} />
          ) : (
            <p className="text-content">{content}</p>
          )}
          {/* edit/content mode END */}

          <div className="btn-wrapper">
            {/* buttons switch START */}
            {activeUser.name === user.name ? (
              <>
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
              </>
            ) : (
              <button className="text-btn reply-btn">
                <FaReply className="icon" />
                Reply
              </button>
            )}
            {/* buttons switch END */}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Comment;
