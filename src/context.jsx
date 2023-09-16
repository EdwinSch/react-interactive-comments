import { createContext, useContext, useState } from "react";
import { commentsData, currentUser } from "./data";
import { nanoid } from "nanoid";

const AppContext = createContext();

// ---- Initialisation
let currentId = "";

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [comments, setComments] = useState(commentsData);
  const [activeUser, setActiveUser] = useState(currentUser.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [editTextInput, setEditTextInput] = useState("");
  const [replyTextInput, setReplyTextInput] = useState("");

  // ---- Global Functions

  // COMMENTS
  const addComment = (textinput) => {
    const newComment = {
      id: nanoid(),
      user: {
        name: "juliusomo",
        img: "/juliusomo.webp",
      },
      date: "now",
      content: textinput,
      points: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const deleteComment = (itemId) => {
    const newItems = comments.filter((item) => item.id !== itemId);
    setComments(newItems);
    setIsModalOpen(false);
  };

  const openModal = (itemId) => {
    currentId = itemId;
    setIsModalOpen(true);
  };

  const editComment = (id, textInput) => {
    const newItems = comments.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, content: textInput };
        return newItem;
      }
      return item;
    });
    setComments(newItems);
  };

  // REPLIES

  const addReply = (textinput) => {
    console.log("this is not working yet");
  };

  return (
    <AppContext.Provider
      value={{
        comments,
        activeUser,
        isModalOpen,
        setIsModalOpen,
        addComment,
        textInput,
        setTextInput,
        deleteComment,
        currentId,
        openModal,
        // edits
        editTextInput,
        setEditTextInput,
        editComment,
        // replies
        replyTextInput,
        setReplyTextInput,
        addReply,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
