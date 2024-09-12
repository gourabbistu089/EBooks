import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Get the value from localStorage
  let authUser = localStorage.getItem("UserInfo");

  // Safely handle the parsing of the JSON, with a try-catch block to avoid errors
  try {
    authUser = authUser ? JSON.parse(authUser) : null;
  } catch (error) {
    console.error("Error parsing UserInfo from localStorage:", error);
    authUser = null; // Set to null if JSON parsing fails
  }

  // Set up state
  const [authUserInfo, setAuthUserInfo] = useState(authUser);

  return (
    <AuthContext.Provider value={[authUserInfo, setAuthUserInfo]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
