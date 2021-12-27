import React, { useState } from "react";

type UserContextObj = {
  user: string;
  setUser: (user: string) => void;
};

export const UserContext = React.createContext<UserContextObj>({
  user: "",
  setUser: () => {},
});

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<string>("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
