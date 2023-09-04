import { FaTrash, FaEdit } from "react-icons/fa";

const ActiveUserButtons = () => {
  return (
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
  );
};

export default ActiveUserButtons;
