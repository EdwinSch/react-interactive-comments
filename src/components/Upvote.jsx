import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Upvote = ({ upvotePts }) => {
  const [votes, setVotes] = useState(upvotePts);

  return (
    <section className="upvote-container">
      <button
        onClick={() => setVotes(votes + 1)}
        className="text-btn vote-btn"
        type="button"
      >
        <FaPlus />
      </button>
      <p className="votes">{votes}</p>
      <button
        onClick={() => setVotes(votes - 1)}
        className="text-btn vote-btn"
        type="button"
      >
        <FaMinus />
      </button>
    </section>
  );
};

export default Upvote;
