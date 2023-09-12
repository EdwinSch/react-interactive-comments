import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Vote = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="vote-container">
      <button
        onClick={() => setScore(score + 1)}
        className="vote-btn"
        aria-label="decrease score button"
        type="button"
      >
        <FaPlus />
      </button>

      <p className="score">{score}</p>

      <button
        onClick={() => setScore(score - 1)}
        className="vote-btn"
        aria-label="increase score button"
        type="button"
      >
        <FaMinus />
      </button>
    </div>
  );
};

export default Vote;
