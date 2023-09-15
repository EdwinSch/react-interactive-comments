import { useState } from "react";
import { useGlobalContext } from "../context";

const Input = () => {
  const { activeUser, addComment, textInput, setTextInput } =
    useGlobalContext();

  const [inputError, setInputError] = useState(false);

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (textInput === "") {
      setTimeout(() => {
        setInputError(false);
      }, 800);

      setInputError(true);
      return;
    }

    addComment(textInput);
    setTextInput("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Desktop Structure */}
      <div className="show-on-desktop">
        <img
          src={activeUser.img}
          alt={activeUser.name}
          className="current-user-img"
        />
        <textarea
          onChange={handleChange}
          placeholder="Add a comment..."
          value={textInput}
          className={
            inputError ? "main-text-input input-error" : "main-text-input"
          }
        ></textarea>
        <button className="action-btn" type="submit">
          send
        </button>
      </div>

      {/* Mobile structure */}
      <div className="show-on-mobile">
        <textarea
          onChange={handleChange}
          placeholder="Add a comment..."
          value={textInput}
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

export default Input;
