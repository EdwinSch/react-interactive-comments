import Vote from "./Vote";
import EditComment from "./EditComment";
import Reply from "./Reply";
import ReplyInput from "./ReplyInput";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { useState } from "react";

const Comment = ({ id, user, date, content, points, replies }) => {
  const { activeUser, openModal } = useGlobalContext();

  const [isReplyActive, setIsReplyActive] = useState(false);
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
              <button
                onClick={() => setIsReplyActive(!isReplyActive)}
                className="text-btn reply-btn"
                type="button"
              >
                <FaReply className="icon" />
                {isReplyActive ? "cancel" : "reply"}
              </button>
            )}
            {/* buttons switch END */}
          </div>
        </div>
      </article>

      {isReplyActive && (
        <ReplyInput
          replyToCurrentUser={user.name}
          setIsReplyActive={setIsReplyActive}
        />
      )}

      {/* Replies rendering */}
      <div className="replies-set-wrapper">
        {replies.map((reply) => {
          return (
            <Reply key={reply.id} {...reply} replyToCurrentUser={user.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
