import { useContext, createContext } from 'react';
import { useAuthProvider } from './AuthProvider.hooks';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, logIn, logOut } = useAuthProvider();

  return (
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
