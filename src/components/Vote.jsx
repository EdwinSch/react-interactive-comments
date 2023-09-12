import { FaPlus, FaMinus } from "react-icons/fa";

const Vote = () => {
  return (
    <div className="vote-container">
      <button className="vote-btn">
        <FaPlus />
      </button>
      <p className="score">12</p>
      <button className="vote-btn">
        <FaMinus />
      </button>
    </div>
  );
};

export default Vote;
