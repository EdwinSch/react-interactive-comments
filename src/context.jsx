import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// ---- Initialisation

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [comments, setComments] = useState("");

  // ---- Global Functions

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
