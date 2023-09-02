import { FaReply } from "react-icons/fa";

const Comment = ({ id, user, date, content, upvotePts, replies }) => {
  return (
    <article className="single-comment">
      <div className="upvotes"> + -</div>
      <div className="comment-wrapper">
        <div className="comment-header">
          <div className="user-wrapper">
            <img src={user.img} alt={user.name} />
            <p className="user-name">{user.name}</p>
            <p className="date">{date}</p>
          </div>

          <button className="reply-btn" type="button">
            <FaReply />
            reply
          </button>
        </div>
        <p className="content-text">{content}</p>
      </div>
    </article>
  );
};

export default Comment;
