import React, { createContext, ReactNode, useContext, useState } from "react";
import User from "./user";
const UserContext = createContext<{
  user: User | undefined;
  setUser: (user: User) => void;
}>({
  user: undefined,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
