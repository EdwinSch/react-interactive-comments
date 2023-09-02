import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// ---- Local Storage Functions

export const AppProvider = ({ children }) => {
  // ---- Global States
  const [items, setItems] = useState([]);

  // ---- Global Functions
  const addItem = () => {};

  return (
    <AppContext.Provider
      value={{
        items,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
