import { FaReply, FaTrash, FaEdit } from "react-icons/fa";
import Upvote from "./Upvote";
import Reply from "./Reply";
import { useGlobalContext } from "../context";
import { currentUser } from "../data";

const Comment = ({ id, user, date, content, upvotePts, replies }) => {
  const { activeUser } = useGlobalContext();
  return (
    <>
      <article className="single-comment">
        <Upvote upvotePts={upvotePts} />
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
                <>
                  <button className="text-btn delete-btn" type="button">
                    <FaTrash />
                    delete
                  </button>
                  <button className="text-btn reply-btn" type="button">
                    <FaEdit />
                    edit
                  </button>
                </>
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
