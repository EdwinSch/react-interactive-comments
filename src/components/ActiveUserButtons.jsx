import { FaTrash, FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../context";

const ActiveUserButtons = ({ id }) => {
  const { deleteComment } = useGlobalContext();

  return (
    <>
      <button
        onClick={() => deleteComment(id)}
        className="text-btn delete-btn"
        type="button"
      >
        <FaTrash />
        delete
      </button>
      <button className="text-btn reply-btn" type="button">
        <FaEdit />
        edit
      </button>
    </>
  );
};

export default ActiveUserButtons;
