import { createContext, useContext, useState } from "react";
import { commentsData, currentUser } from "./data";
import { nanoid } from "nanoid";

const AppContext = createContext();

// ---- Initialisation

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [comments, setComments] = useState(commentsData);
  const [activeUser, setActiveUser] = useState(currentUser.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textInput, setTextInput] = useState("");

  // ---- Global Functions
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
