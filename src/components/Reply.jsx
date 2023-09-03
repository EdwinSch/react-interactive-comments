import { FaReply } from "react-icons/fa";
import Upvote from "./Upvote";
import { useGlobalContext } from "../context";

const Reply = ({ id, user, date, content, upvotePts, replyTo, replies }) => {
  // Get logged in user from global context
  const { activeUser } = useGlobalContext();

  return (
    <article className="single-reply">
      <Upvote upvotePts={upvotePts} />
      <div className="reply-wrapper">
        <div className="reply-header">
          <div className="user-wrapper">
            <img src={user.img} alt={user.name} />
            <p className="user-name">{user.name}</p>
            {/* Check for current user */}
            {activeUser.user.name === user.name && (
              <div className="user-flag">you</div>
            )}
            <p className="date">{date}</p>
          </div>
          {/* Buttons */}
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
