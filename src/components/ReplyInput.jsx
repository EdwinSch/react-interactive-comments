import { useGlobalContext } from "../context";
import { useState } from "react";

const ReplyInput = ({ replyToCurrentUser, setIsReplyActive }) => {
  const { activeUser, replyTextInput, setReplyTextInput, addReply } =
    useGlobalContext();

  const [inputError, setInputError] = useState(false);

  const handleChange = (event) => {
    setReplyTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (replyTextInput === "") {
      setTimeout(() => {
        setInputError(false);
      }, 800);

      setInputError(true);
      return;
    }

    setIsReplyActive(false);
    // Add reply start
    addReply(replyTextInput);
    // Add reply end

    setReplyTextInput("");
  };

  return (
    <form className="form reply-form" onSubmit={handleSubmit}>
      {/* Desktop Structure */}
      <div className="show-on-desktop">
        <img
          src={activeUser.img}
          alt={activeUser.name}
          className="current-user-img"
        />
        <textarea
          onChange={handleChange}
          value={replyTextInput}
          placeholder={`@${replyToCurrentUser}`}
          className={
            inputError ? "main-text-input input-error" : "main-text-input"
          }
        ></textarea>
        <button className="action-btn" type="submit">
          reply
        </button>
      </div>

      {/* Mobile structure */}
      <div className="show-on-mobile">
        <textarea
          onChange={handleChange}
          value={replyTextInput}
          placeholder={`@${replyToCurrentUser}`}
          className={
            inputError ? "main-text-input input-error" : "main-text-input"
          }
        ></textarea>
        <div className="mobile-row">
          <img
            src={activeUser.img}
            alt={activeUser.name}
            className="current-user-img"
          />
          <button className="action-btn" type="submit">
            send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReplyInput;
