import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Vote = ({ points }) => {
  const [score, setScore] = useState(points);

  return (
    <div className="vote-container">
      <button
        onClick={() => setScore(score + 1)}
        className="vote-btn"
        aria-label="decrease score button"
        type="button"
      >
        <FaPlus className="icon-inc-dec" />
      </button>

      <p className="score">{score}</p>

      <button
        onClick={() => setScore(score - 1)}
        className="vote-btn"
        aria-label="increase score button"
        type="button"
      >
        <FaMinus className="icon-inc-dec" />
      </button>
    </div>
  );
};

export default Vote;
