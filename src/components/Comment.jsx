import Vote from "./Vote";
import { FaReply } from "react-icons/fa";

const Comment = ({ id, user, date, content, points, replies }) => {
  return (
    <div className="comment-set-wrapper">
      <article className="comment">
        <Vote points={points} />

        <div className="content-wrapper">
          <header>
            <img src={user.img} alt={user.name} />
            <p className="username">{user.name}</p>
            <p className="timestamp">{date}</p>
          </header>

          <p className="text-content">{content}</p>

          <div className="btn-wrapper">
            <button className="text-btn reply-btn">
              <FaReply className="icon" />
              Reply
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Comment;
