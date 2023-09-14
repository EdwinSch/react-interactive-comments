import Vote from "./Vote";
import { FaReply, FaEdit, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Comment = ({ id, user, date, content, points, replies }) => {
  const { activeUser } = useGlobalContext();

  return (
    <div className="comment-set-wrapper">
      <article className="comment">
        <Vote points={points} />

        <div className="content-wrapper">
          <header>
            <img src={user.img} alt={user.name} />
            <p className="username">{user.name}</p>
            {/* Current user batch */}
            {activeUser.name === user.name && <div className="badge">you</div>}
            <p className="timestamp">{date}</p>
          </header>

          <p className="text-content">{content}</p>

          <div className="btn-wrapper">
            {/* buttons switch START */}

            {activeUser.name === user.name ? (
              <>
                <button className="text-btn delete-btn">
                  <FaTrash className="icon" />
                  Delete
                </button>
                <button className="text-btn">
                  <FaEdit className="icon" />
                  Edit
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
