import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { commentsData, currentUser } from "./data";

const AppContext = createContext();

// ---- Initialisation

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [comments, setComments] = useState(commentsData);
  const [activeUser, setActiveUser] = useState(currentUser);

  const [newItemContent, setNewItemContent] = useState("");

  // ---- Global Functions
  const addComment = (content) => {
    const newComment = {
      id: nanoid(),
      user: {
        name: "juliusomo",
        img: "/juliusomo.webp",
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
