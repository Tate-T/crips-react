import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ childen }) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log("aaaa");
  return (
    <AuthContext.Provider value={{ isLogin }}>
      {console.log(childen)}
    </AuthContext.Provider>
  );
};
