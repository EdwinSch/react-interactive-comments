import { useGlobalContext } from "../context";

const Input = () => {
  const { activeUser } = useGlobalContext();

  return (
    <form className="form">
      {/* Desktop Structure */}
      <div className="show-on-desktop">
        <img
          src={activeUser.img}
          alt={activeUser.name}
          className="current-user-img"
        />
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
        <button className="action-btn" type="submit">
          send
        </button>
      </div>

      {/* Mobile structure */}
      <div className="show-on-mobile">
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
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
