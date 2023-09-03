import { FaReply } from "react-icons/fa";
import Upvote from "./Upvote";

const Reply = ({ id, user, date, content, upvotePts, replyTo, replies }) => {
  return (
    <article className="single-reply">
      <Upvote upvotePts={upvotePts} />
      <div className="reply-wrapper">
        <div className="reply-header">
          <div className="user-wrapper">
            <img src={user.img} alt={user.name} />
            <p className="user-name">{user.name}</p>
            <p className="date">{date}</p>
          </div>

          <button className="text-btn reply-btn" type="button">
            <FaReply />
            reply
          </button>
        </div>
        <p className="content-text">
          <span>@{replyTo}</span>
          {content}
        </p>
      </div>
    </article>
  );
};

export default Reply;
