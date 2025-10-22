import { createContext, useContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <UserContext.Provider value={{ isLoginPage, setIsLoginPage }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for easy access
export const useUserContext = () => useContext(UserContext);
