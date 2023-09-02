import { createContext, useContext, useState } from "react";

import commentsData from "./data";

const AppContext = createContext();

// ---- Local Storage Functions

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [comments, setComments] = useState(commentsData);

  // ---- Global Functions
  const addItem = () => {};

  return (
    <AppContext.Provider
      value={{
        comments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
