import { FaTrash, FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../context";

const ActiveUserButtons = () => {
  const { openModal } = useGlobalContext();

  return (
    <>
      <button onClick={openModal} className="text-btn delete-btn" type="button">
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
