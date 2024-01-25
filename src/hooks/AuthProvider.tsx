import React from "react";
import { getInstance } from "@sdk";

type userType = { fullName: string; token: string; username: string } | null;
interface AuthContextType {
  user: userType;
  onLogin: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
  onLogout: () => Promise<void>;
}
const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<userType>(null);

  const handleLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const loginApi = getInstance().LoginPageApi;
    const user = await loginApi.login({ username, password });
    setUser(user);
  };

  const handleLogout = async () => {
    const loginApi = getInstance().LoginPageApi;
    await loginApi.logout();
    setUser(null);
  };

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return React.useContext(AuthContext) as AuthContextType;
};
export default AuthProvider;
