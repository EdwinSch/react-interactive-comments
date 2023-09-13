import { createContext, useContext, useState } from "react";
import { commentsData, currentUser } from "./data";

const AppContext = createContext();

// ---- Initialisation

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [comments, setComments] = useState(commentsData);
  const [activeUser, setActiveUser] = useState(currentUser.user.name);

  // ---- Global Functions

  return (
    <AppContext.Provider
      value={{
        comments,
        activeUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
