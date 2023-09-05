import { FaReply } from "react-icons/fa";
import Upvote from "./Upvote";
import ActiveUserButtons from "./ActiveUserButtons";
import Reply from "./Reply";
import { useGlobalContext } from "../context";

const Comment = ({ id, user, date, content, upvotePts, replies }) => {
  const { activeUser } = useGlobalContext();
  return (
    <>
      <article className="single-comment">
        <div className="btn-wrapper-mobile">
          <Upvote upvotePts={upvotePts} />

          {/* start mobile structure */}
          <div className="hide-on-desktop">
            {activeUser.user.name === user.name ? (
              <ActiveUserButtons id={id} />
            ) : (
              <button className="text-btn reply-btn" type="button">
                <FaReply />
                reply
              </button>
            )}
          </div>
          {/* end mobile structure */}
        </div>
        <div className="comment-wrapper">
          <div className="comment-header">
            <div className="user-wrapper">
              <img src={user.img} alt={user.name} />
              <p className="user-name">{user.name}</p>
              {/* Check for current user */}
              {activeUser.user.name === user.name && (
                <div className="user-flag">you</div>
              )}
              <p className="date">{date}</p>
            </div>

            {/* Action BTNS switch */}
            <div className="btn-wrapper">
              {activeUser.user.name === user.name ? (
                <ActiveUserButtons id={id} />
              ) : (
                <button className="text-btn reply-btn" type="button">
                  <FaReply />
                  reply
                </button>
              )}
            </div>
          </div>
          <p className="content-text">{content}</p>
        </div>
      </article>

      {/* REPLIES */}
      <div className="replies-container">
        {replies.map((reply) => {
          return <Reply key={reply.id} {...reply} />;
        })}
      </div>
    </>
  );
};

export default Comment;
