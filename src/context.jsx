import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { commentsData, currentUser } from "./data";

const AppContext = createContext();

// ---- Initialisation
let currentId = "";

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [comments, setComments] = useState(commentsData);
  const [activeUser, setActiveUser] = useState(currentUser);

  const [newItemContent, setNewItemContent] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // ---- Global Functions
  const addComment = (content) => {
    const newComment = {
      id: nanoid(),
      user: {
        name: activeUser.user.name,
        img: activeUser.user.img,
      },
      date: "now",
      content: content,
      upvotePts: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const deleteComment = (commentId) => {
    const newComments = comments.filter((item) => item.id !== commentId);
    setComments(newComments);
    setModalIsOpen(false);
  };

  const toggleModal = (commentId) => {
    setModalIsOpen(!modalIsOpen);
    currentId = commentId;
    return currentId;
  };

  return (
    <AppContext.Provider
      value={{
        comments,
        activeUser,
        newItemContent,
        setNewItemContent,
        addComment,
        deleteComment,
        toggleModal,
        modalIsOpen,
        currentId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
